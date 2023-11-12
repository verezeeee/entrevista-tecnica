import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import UserProvider from "./src/contexts/FormContext";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <UserProvider>
      <Navigation />
      <Toast />
    </UserProvider>
  );
}
