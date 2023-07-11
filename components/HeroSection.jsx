import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import heroImage from "../assets/hero-image.jpg";
import Colors from "../global/Colors";

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
              console.log("pressed the button");
            }}
          >
            <View style={{ marginTop: "auto", marginBottom: "auto" }}>
              <Text
                style={{
                  fontSize: 13,
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
      )}
    </View>
  );
};
export default HeroSection;

const styles = StyleSheet.create({
  hero: {
    backgroundColor: Colors.primaryGray,
    height: 350,
    width: "100%",
    padding: 15,
  },
  heroHeading: {
    color: Colors.primaryYellow,
    fontSize: 45,
    // fontSize: 64,
    // fontFamily: "sans-serif-condensed",
  },
  heroSubHeading: {
    color: Colors.darkerWhiteShade,
    fontSize: 25,
    marginBottom: 25,
  },
  heroMessageImageContainer: {
    flexDirection: "row",
  },

  heroMessage: {
    color: Colors.primaryWhite,
    fontSize: 17,
    flex: 5,
    marginRight: 10,
  },
  heroImage: {
    backgroundColor: Colors.primaryGray,
    borderRadius: 16,
    width: 150,
    height: 150,
  },
  heroButtonContainer: {
    width: 150,
    height: 30,
    borderRadius: 14,
    backgroundColor: Colors.primaryYellow,
  },
  heroPressableStyle: {
    padding: 6,
  },
});
