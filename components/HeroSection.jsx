import { StyleSheet, View, Text, Image, Button, Pressable } from "react-native";
import heroImage from "../assets/hero-image.jpg";

const HeroSection = function () {
  return (
    <View style={styles.hero}>
      <Text style={styles.heroHeading}>Little Lemon</Text>
      <Text style={styles.heroSubHeading}>Chicago</Text>
      <View style={styles.heroMessageImageContainer}>
        <Text style={styles.heroMessage}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </Text>
        <Image style={styles.heroImage} source={heroImage} />
      </View>
      <View style={styles.heroButtonContainer}>
        <Pressable
          android_ripple={{ color: "#F4CEE" }}
          style={styles.heroButtonContainer}
          onPress={() => {
            console.log("pressed the button");
          }}
        >
          <View style={{ marginTop: "auto", marginBottom: "auto" }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              RESERVE A TABLE
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
export default HeroSection;

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#495E57",
    height: 350,
    width: "100%",
    padding: 15,
  },
  heroHeading: {
    color: "#F4CE14",
    fontSize: 45,
    // fontSize: 64,
    // fontFamily: "sans-serif-condensed",
  },
  heroSubHeading: {
    color: "#EDEFEE",
    fontSize: 25,
    marginBottom: 25,
  },
  heroMessageImageContainer: {
    flexDirection: "row",
  },

  heroMessage: {
    color: "white",
    fontSize: 17,
    flex: 5,
    marginRight: 10,
  },
  heroImage: {
    backgroundColor: "blue",
    borderRadius: 16,
    width: 150,
    height: 150,
  },
  heroButtonContainer: {
    width: 150,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#F4CE14",
  },
});