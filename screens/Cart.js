import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import Navigation from "../components/Navigation";
import BurgerMenuModal from "../components/BurgerMenuModal";
import { useState } from "react";
import Colors from "../constants/Colors";
import deliveryVan from "../assets/van.png";

const Cart = function (props) {
  const [isRadioPressed, setIsRadioPressed] = useState(false);
  return (
    <>
      <BurgerMenuModal
        isModalVisible={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
        navigate={props.navigation.navigate}
      />
      <SafeAreaView>
        <Navigation setModalVisibility={props.setModalVisibility} />
        <ScrollView style={styles.mainContainer}>
          <View style={styles.deliveryTimeContainer}>
            <Image source={deliveryVan} style={styles.van} />
            <Text style={styles.deliveryTime}>Delivery time: </Text>
            <Text style={styles.time}>20 Minutes</Text>
          </View>
          <View style={styles.cutleryContainer}>
            <Text style={styles.label}>Cutlery</Text>
            <View style={styles.infoRadioContainer}>
              <Text style={styles.description}>
                Help reduce plastic waste. Only ask for cutlery if you need it
              </Text>
              <Pressable
                onPress={() => {
                  setIsRadioPressed(!isRadioPressed);
                }}
                style={styles.buttonPressable}
              >
                <View style={styles.radio}>
                  {!isRadioPressed && <View style={styles.radioInner}></View>}
                  {isRadioPressed && (
                    <View style={styles.radioInnerSelected}></View>
                  )}
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.orderSummarySection}>
            <Text style={styles.orderSummary}>Order Summary</Text>
            <View style={styles.orderItemsContainer}>
              <Text style={styles.orderItems}>Items</Text>
            </View>
            <View style={styles.orderMenu}>
              <View style={styles.orderItem}>
                <Text style={styles.itemQuantity}>1 x Brushetta</Text>
                <View style={styles.itemPriceContainer}>
                  <Text style={styles.itemPrice}>$7.99</Text>
                </View>
              </View>
            </View>
          </View>
          <ScrollView style={styles.menu}></ScrollView>
          <View></View>
          <View></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Cart;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
  },
  deliveryTimeContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    borderColor: Colors.lightGray,
    borderBottomWidth: 3,
  },
  van: {
    marginRight: 10,
  },
  deliveryTime: {
    fontSize: 17,
  },
  time: {
    fontSize: 17,
    fontWeight: 500,
  },
  cutleryContainer: {
    // backgroundColor: "green",
    height: 120,
    justifyContent: "center",
    borderColor: Colors.lightGray,
    borderBottomWidth: 3,
  },
  infoRadioContainer: {
    flexDirection: "row",
  },
  buttonPressable: {
    flex: 3,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  label: {
    fontSize: 20,
    fontWeight: 500,
  },
  description: {
    flex: 7,
    fontSize: 17,
    color: Colors.primaryGray,
    // backgroundColor: "pink",
  },
  radio: {
    // backgroundColor: "green",
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.primaryGray,
    marginRight: 10,
  },
  radioInner: {
    // backgroundColor: "red",
    height: 15,
    width: 15,
    borderRadius: 20,
  },
  radioInnerSelected: {
    backgroundColor: Colors.primaryGray,
    height: 15,
    width: 15,
    borderRadius: 20,
  },
  orderMenu: {
    marginTop: 10,
  },
  orderSummarySection: {
    // backgroundColor: "red",
    minHeight: 130,
    justifyContent: "center",
    borderColor: Colors.lightGray,
    borderBottomWidth: 3,
    paddingVertical: 20,
  },
  orderSummary: {
    fontSize: 23,
    fontWeight: 500,
    marginBottom: 10,
  },
  orderItemsContainer: {
    height: 40,
    backgroundColor: Colors.darkGray,
    justifyContent: "center",
  },
  orderItems: {
    fontSize: 18,
    fontWeight: 500,
  },
  orderItem: {
    flexDirection: "row",
  },
  itemQuantity: {
    fontSize: 18,
    fontWeight: 500,
    flex: 5,
  },
  itemPriceContainer: {
    alignItems: "flex-end",
    flex: 5,
    // backgroundColor: "green",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 500,
  },
});
