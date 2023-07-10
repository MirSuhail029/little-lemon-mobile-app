import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./pages/Home";
import Login from "./pages/Login";

// import greekSalad from "./assets/greek-salad.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
});
