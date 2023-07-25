import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import heroImage from "../assets/hero-image.jpg";
import Colors from "../constants/Colors";

const HeroSection = function (props) {
  return (
    <View style={styles.hero}>
      <Text style={styles.heroHeading}>Little Lemon</Text>
      <Text style={styles.heroSubHeading}>Chicago</Text>
      {props.heroMessageImageVisible && (
        <View style={styles.heroMessageImageContainer}>
          <Text style={styles.heroMessage}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <Image style={styles.heroImage} source={heroImage} />
        </View>
      )}
      {props.heroButtonVisible && (
        <View style={styles.heroButtonContainer}>
          <Pressable
            android_ripple={{ color: Colors.ripple }}
            style={styles.heroPressableStyle}
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          >
            <View>
              <Text style={styles.heroButton}>RESERVE A TABLE</Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};
export default HeroSection;

const styles = StyleSheet.create({
  hero: {
    backgroundColor: Colors.primaryGray,
    paddingBottom: 20,
    width: "100%",
    paddingHorizontal: 15,
  },
  heroHeading: {
    color: Colors.primaryYellow,
    fontSize: 38,
    marginTop: 5,
    // fontSize: 64,
    // fontFamily: "sans-serif-condensed",
  },
  heroSubHeading: {
    color: Colors.darkerWhiteShade,
    fontSize: 19,
    marginBottom: 15,
  },
  heroMessageImageContainer: {
    flexDirection: "row",
  },

  heroMessage: {
    color: Colors.primaryWhite,
    fontSize: 16,
    flex: 6,
    marginRight: 10,
  },
  heroImage: {
    backgroundColor: Colors.primaryGray,
    borderRadius: 16,
    flex: 3,
    height: 120,
  },
  heroButtonContainer: {
    width: 140,
    height: 30,
    borderRadius: 14,
    backgroundColor: Colors.primaryYellow,
    overflow: "hidden",
  },
  heroButton: {
    fontSize: 10,
    height: "100%",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 30,
    fontSize: 12,
  },
});
