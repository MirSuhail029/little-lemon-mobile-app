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
import burgerIcon from "./assets/burger-menu.png";
import logoIcon from "./assets/little-lemon-logo.png";
import cartIcon from "./assets/cart-logo.png";
// import cartIcon from "./assets/cart-logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Image source={burgerIcon} />
        <Image source={logoIcon} />
        <Image source={cartIcon} />
      </View>
      <View style={styles.hero}>
        <Text style={styles.heroHeading}>Little Lemon</Text>
        <Text style={styles.heroSubHeading}>Chicago</Text>
        <View style={styles.heroMessageImageContainer}>
          <Text style={styles.heroMessage}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
        </View>
        <View style={styles.heroButtonContainer}>
          <Button title="Reserve a table" color="#F4CE14" />
        </View>
      </View>

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
  navigation: {
    // backgroundColor: "pink",
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  hero: {
    backgroundColor: "#495E57",
    height: 428,
    width: "100%",
    padding: 15,
  },
  heroHeading: {
    color: "#F4CE14",
    fontSize: 50,
    // fontSize: 64,
    // fontFamily: "sans-serif-condensed",
  },
  heroSubHeading: {
    color: "#EDEFEE",
    fontSize: 30,
    marginBottom: 25,
  },
  heroMessageImageContainer: {
    flexDirection: "row",
  },

  heroMessage: {
    color: "white",
    fontSize: 20,
    flex: 5,
    marginRight: 10,
  },
  heroButtonContainer: {
    width: 150,
    borderRadius: 14,
  },
});
