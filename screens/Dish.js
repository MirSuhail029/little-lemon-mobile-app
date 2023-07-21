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
import { useState } from "react";

const Dish = function (props) {
  const { dishInfo } = props.route.params;
  const [image, dishName, description, price, ...rest] = dishInfo;
  const [quantity, setQuantity] = useState(1);
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
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.dishName}>{dishName}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.delivery}>
              <Text style={styles.deliveryText}>Delivery time :</Text>
              <Text style={styles.deliveryTime}> 20 Minutes</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Pressable
                style={styles.quantityMinus}
                onPress={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                <Text style={styles.quantityText}>-</Text>
              </Pressable>
              <Text style={styles.quantityText}>{quantity}</Text>
              <Pressable
                style={styles.quantityPlus}
                onPress={() => {
                  if (quantity < 9) {
                    setQuantity(quantity + 1);
                  }
                }}
              >
                <Text style={styles.quantityText}>+</Text>
              </Pressable>
            </View>
            {/* <View style={styles.controls}> */}
            <View style={styles.control}>
              <Pressable android_ripple={{ color: Colors.rippleDark }}>
                <Text style={styles.controlText}>Add for {price}</Text>
              </Pressable>
            </View>
            {/* </View> */}
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
    width: "100%",
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
    width: "100%",
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentContainer: {
    width: "90%",
    marginVertical: 10,
  },
  dishName: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 0,
    // backgroundColor: Colors.primaryYellow,
    // textAlign: "center",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  delivery: {
    marginTop: 20,
    flexDirection: "row",
  },
  deliveryText: {
    fontSize: 16,
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: "bold",
  },
  control: {
    borderRadius: 15,
    width: "100%",
    backgroundColor: Colors.primaryYellow,
    marginTop: 20,
    overflow: "hidden",
  },
  controlText: {
    color: Colors.primaryBlack,
    textAlign: "center",
    lineHeight: 45,
    fontSize: 20,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  quantityMinus: { marginRight: 30 },
  quantityPlus: { marginLeft: 30 },
  quantityText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
