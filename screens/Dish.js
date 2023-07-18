import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import greekSalad from "../assets/greek-salad.jpg";
import brushetta from "../assets/brushetta.jpg";
import grilledFish from "../assets/grilled-fish.jpg";
import pasta from "../assets/pasta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import Colors from "../constants/Colors";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
const Dish = function (props) {
  return (
    <>
      <BurgerMenuModal
        modalVisibility={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
      />

      <SafeAreaView>
        <Navigation setModalVisibility={props.setModalVisibility} />
      </SafeAreaView>
      <View style={styles.rootContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/greek-salad.jpg")}
              style={styles.image}
            />
          </View>
          <Text style={styles.dishName}>Greek Salad</Text>
          <Text style={styles.description}>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </Text>
          <Text style={styles.price}>$12.99</Text>
          <View style={styles.controls}>
            <View style={styles.control}>
              <Pressable android_ripple={{ color: Colors.rippleDark }}>
                <Text style={styles.controlText}>Buy</Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                style={styles.control}
                android_ripple={{ color: Colors.rippleDark }}
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              >
                <Text style={styles.controlText}>Back</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default Dish;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 50,
    // backgroundColor: "green",
  },
  contentContainer: {
    width: "80%",
    marginVertical: 50,
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 250,
  },
  dishName: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    backgroundColor: Colors.primaryYellow,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  controls: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 60,
  },
  control: {
    marginHorizontal: 10,
    backgroundColor: Colors.primaryGray,
  },
  controlText: {
    color: Colors.primaryYellow,
    width: 100,
    height: 35,
    textAlign: "center",
    lineHeight: 35,
    fontSize: 14,
    fontWeight: "bold",
  },
});
