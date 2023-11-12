import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { UserContext } from "../contexts/FormContext";
import verificarSenha from "../utils/verificarSenha";
import { verificarEmail } from "../utils/verificarEmail";
// import { cadastrarUsuario } from "../utils/firestore"; TODO
import Toast from "react-native-toast-message";

export default function Home({ navigation }) {
  const { nome, setNome, email, setEmail, senha, setSenha } =
    React.useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
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
          const emailValido = verificarEmail(email);
          if (
            senhaValida === "Senha válida!!" &&
            emailValido === "Email válido!"
          ) {
            // const user = {
            //   nome,
            //   email,
            //   senha,
            // };
            // await cadastrarUsuario(user);
            navigation.navigate("Users");
          } else if (emailValido !== "Email válido!") {
            Toast.show({
              type: "error",
              position: "top",
              text1: "Erro",
              text2: emailValido,
              visibilityTime: 3000,
              autoHide: true,
              bottomOffset: 40,
              topOffset: 40,
            });
          }
          if (senhaValida !== "Senha válida!!") {
            Toast.show({
              type: "error",
              position: "top",
              text1: "Erro",
              text2: senhaValida,
              visibilityTime: 3000,
              autoHide: true,
              bottomOffset: 40,
              topOffset: 40,
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
        <Text style={{ color: "white", textAlign: "center" }}>Cadastrar</Text>
      </TouchableOpacity>
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
    backgroundColor: "white",
  },
});
