import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect } from "react";
import { UserContext } from "../contexts/FormContext";
import verificarSenha from "../utils/verificarSenha";
import { verificarEmail } from "../utils/verificarEmail";
import Toast from "react-native-toast-message";
// import registrarUsuario from '../hooks/useAuth' //TODO: Criar hook para registrar usuário

export default function Home({ navigation }) {
  const [emailValido, setEmailValido] = React.useState(false); //TODO: Criar hook para verificar se o email é válido
  const { nome, setNome, email, setEmail, senha, setSenha } =
    React.useContext(UserContext);

  const handleCheckEmail = async () => {
    try {
      const isValid = await verificarEmail(email);
      setEmailValido(isValid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#696969",
            marginBottom: 90,
          }}
        >
          <Image
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
            source={{
              uri: "https://academiadodesenvolvedor.com/treinando/pluginfile.php/1/theme_eguru/logo/1691613588/Logo%20branco.png",
            }}
          />
          <Text style={styles.text}>Registro</Text>
          <View style={{ gap: 10, marginBottom: 15 }}>
            <TextInput
              style={styles.inputs}
              placeholder="Nome"
              value={nome}
              onChangeText={(text) => {
                setNome(text);
              }}
            />
            <TextInput
              inputMode="email"
              style={styles.inputs}
              placeholder="Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Senha"
              value={senha}
              autoCorrect={false}
              onChangeText={(text) => {
                setSenha(text);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={async () => {
              const senhaValida = verificarSenha(senha);
              handleCheckEmail();
              //BUG -- Como a variável de email não é atualizada instantanemente, a verificação pode ocorrer com valores antigos, é recomendado que o usuário clique no botão de cadastro duas vezes para que a verificação ocorra corretamente.
              if (senhaValida === "Senha válida!!" && emailValido === true) {
                // registrarUsuario(email, senha, nome) //TODO: Criar hook para registrar usuário utilizando o firebase
                navigation.navigate("Users");
              } else if (senhaValida !== "Senha válida!!") {
                Toast.show({
                  type: "error",
                  text1: "Senha inválida",
                  text2: senhaValida,
                  visibilityTime: 3000,
                  autoHide: true,
                  topOffset: 50,
                  bottomOffset: 40,
                });
              } else if (emailValido !== true) {
                Toast.show({
                  type: "error",
                  text1: "Email inválido",
                  text2: "Insira um email válido",
                  visibilityTime: 3000,
                  autoHide: true,
                  topOffset: 50,
                  bottomOffset: 40,
                });
              }
            }}
            style={{
              backgroundColor: "#3aa40c",
              padding: 10,
              borderRadius: 12,
              height: 50,
              width: 310,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Cadastrar
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#696969",
  },
  inputs: {
    padding: 10,
    borderColor: "#BEBEBE",
    borderWidth: 2,
    borderRadius: 12,
    width: 310,
    height: 50,
    backgroundColor: "white",
  },
});
