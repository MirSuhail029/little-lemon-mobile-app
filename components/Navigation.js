import { StyleSheet, View, Image, Pressable } from "react-native";
import burgerIcon from "../assets/burger-menu.png";
import logoIcon from "../assets/little-lemon-logo.png";
import cartIcon from "../assets/cart-logo.png";
// import Ionicons from "vector-icons/Ionicons";

const Navigation = function (props) {
  // console.log(props.setModalVisibility);
  return (
    <View style={styles.navigation}>
      <Pressable
        onPress={props.setModalVisibility}
        style={styles.ThreeDotContainer}
      >
        <Image source={burgerIcon} style={styles.burgerIcon} />
      </Pressable>
      <View style={styles.logoContainer}>
        <Image source={logoIcon} style={styles.logoIcon} />
      </View>
      <Pressable style={styles.cartContainer}>
        <Image source={cartIcon} style={styles.cartIcon} />
      </Pressable>
    </View>
  );
};
export default Navigation;
const styles = StyleSheet.create({
  navigation: {
    // backgroundColor: "pink",
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ThreeDotContainer: {
    // backgroundColor: "green",
    width: 60,
    alignItems: "center",
    flex: 2,
  },
  burgerIcon: {
    marginTop: "auto",
    marginBottom: "auto",
    width: 28,
    height: 20,
  },
  logoContainer: {
    flex: 8,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    marginTop: "auto",
    marginBottom: "auto",
    height: 40,
    width: 150,
  },
  cartContainer: {
    flex: 2,
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  cartIcon: {
    marginTop: "auto",
    marginBottom: "auto",
    height: 33,
    width: 33,
  },
});
