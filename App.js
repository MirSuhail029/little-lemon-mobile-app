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
import burgerIcon from "./assets/burger menu.png";
import logoIcon from "./assets/little lemon logo.png";
import cartIcon from "./assets/cart logo.png";
import random from "./assets/favicon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Image source={burgerIcon} style={{ width: 100, height: 100 }} />
        <Image source={logoIcon} style={{ width: 100, height: 100 }} />
        <Image source={cartIcon} style={{ width: 100, height: 100 }} />
        <Image source={random} style={{ width: 100, height: 100 }} />
      </View>
      <View style={styles.hero}>
        <Text style={styles.heroHeading}>Little Lemon</Text>
        <Text style={styles.heroSubHeading}>Chicago</Text>
        <View style={styles.heroMessageImageContainer}>
          <Text style={styles.heroMessage}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <Image source={random} style={{ width: 150, height: 150 }} />
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
    backgroundColor: "pink",
    height: 80,
    width: "100%",
    flexDirection: "row",
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
    width: "70%",
  },
});
