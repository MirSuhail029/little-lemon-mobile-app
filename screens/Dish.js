import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

const Dish = function (props) {
  const { dishInfo } = props.route.params;
  const [image, dishName, description, price, ...rest] = dishInfo;
  return (
    <>
      <BurgerMenuModal
        isModalVisible={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
        navigate={props.navigation.navigate}
      />

      <SafeAreaView>
        <Navigation setModalVisibility={props.setModalVisibility} />
      </SafeAreaView>
      <ScrollView>
        <View style={styles.rootContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image source={image} style={styles.image} />
            </View>
            <Text style={styles.dishName}>{dishName}</Text>

            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
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
      </ScrollView>
    </>
  );
};
export default Dish;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: "80%",
    marginVertical: 30,
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
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20,
    backgroundColor: Colors.primaryYellow,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginTop: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  controls: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 40,
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
