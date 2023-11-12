import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { UserContext } from "../contexts/FormContext";
import { Ionicons } from "@expo/vector-icons";

export default function Users({ navigation }) {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const { nome, email, senha } = React.useContext(UserContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const [color, setColor] = React.useState(getRandomColor());
  const user = [nome, email, senha];
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="arrow-back" size={32} color="black" />
      </Pressable>
      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          Perfil
        </Text>
        <View style={[styles.avatar, { backgroundColor: color }]}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            {nome
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Text>
        </View>
        <View style={styles.perfilView}>
          <View style={styles.dataView}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nome</Text>
            <Text style={{ fontSize: 16 }}>{nome}</Text>
          </View>
          <View style={styles.dataView}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Email</Text>
            <Text style={{ fontSize: 16 }}>{email}</Text>
          </View>
          <View
            style={[
              styles.dataView,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Senha</Text>
              <Text style={{ fontSize: 16 }}>
                {showPassword ? senha : "********"}
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{ alignSelf: "center" }}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={32}
                color="black"
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  perfilView: {
    backgroundColor: "#BEBEBE",
    borderRadius: 22,
    width: 380,
    padding: 20,
    gap: 10,
  },
  dataView: {
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#93B1A6",
  },
});
