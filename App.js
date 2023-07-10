import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
  Image,
} from "react-native";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import OrderSection from "./components/OrderSection";
import BurgerMenuModal from "./components/BurgerMenuModal";
// import greekSalad from "./assets/greek-salad.jpg";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const setModalVisibility = function () {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <BurgerMenuModal
        modalVisibility={isModalVisible}
        setModalVisibility={setModalVisibility}
      />

      <Navigation setModalVisibility={setModalVisibility} />
      <HeroSection />
      <OrderSection />

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
