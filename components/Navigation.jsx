import { StyleSheet, View, Image } from "react-native";
import burgerIcon from "../assets/burger-menu.png";
import logoIcon from "../assets/little-lemon-logo.png";
import cartIcon from "../assets/cart-logo.png";

const Navigation = function () {
  return (
    <View style={styles.navigation}>
      <Image
        source={burgerIcon}
        style={{ marginTop: "auto", marginBottom: "auto" }}
      />
      <Image
        source={logoIcon}
        style={{ marginTop: "auto", marginBottom: "auto" }}
      />
      <Image
        source={cartIcon}
        style={{ marginTop: "auto", marginBottom: "auto" }}
      />
    </View>
  );
};
export default Navigation;
const styles = StyleSheet.create({
  navigation: {
    // backgroundColor: "pink",
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
