import { StyleSheet, View, Image, Pressable } from "react-native";
import burgerIcon from "../assets/burger-menu.png";
import logoIcon from "../assets/little-lemon-logo.png";
import cartIcon from "../assets/cart-logo.png";

const Navigation = function (props) {
  // console.log(props.setModalVisibility);
  return (
    <View style={styles.navigation}>
      <Pressable onPress={props.setModalVisibility}>
        <Image
          source={burgerIcon}
          style={{ marginTop: "auto", marginBottom: "auto" }}
        />
      </Pressable>
      <Image
        source={logoIcon}
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          height: 40,
          width: 150,
        }}
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
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
