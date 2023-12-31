import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "../components/Navigation";
import BurgerMenuModal from "../components/BurgerMenuModal";
import { useState } from "react";
import Colors from "../constants/Colors";
import deliveryVan from "../assets/van.png";
import AllMenu from "../components/AllMenu";

const Cart = function (props) {
  const [isRadioPressed, setIsRadioPressed] = useState(true);
  return (
    <>
      <BurgerMenuModal
        isModalVisible={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
        navigate={props.navigation.navigate}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation setModalVisibility={props.setModalVisibility} />
        <ScrollView
          style={styles.mainContainer}
          showsVerticalScrollIndicator={false}
        >
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
          <View style={styles.menu}>
            <View style={styles.addMoreTitleContainer}>
              <Text style={styles.addMore}>Add More To Your Order!</Text>
            </View>
            <ScrollView>
              <AllMenu navigation={props.navigation} />
            </ScrollView>
          </View>
          <View style={styles.totalContainer}>
            <View style={styles.subTotal}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text style={styles.subTotalPrice}>$12.99</Text>
            </View>
            <View style={styles.delivery}>
              <Text style={styles.deliveryText}>Delivery</Text>
              <Text style={styles.deliveryPrice}>$2.00</Text>
            </View>
            <View style={styles.service}>
              <Text style={styles.serviceText}>Service</Text>
              <Text style={styles.servicePrice}>$1.00</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalPrice}>$15.99</Text>
            </View>
          </View>
          <View style={styles.checkoutButtonContainer}>
            <View style={styles.checkoutButton}>
              <Pressable
                android_ripple={{ color: Colors.ripple }}
                style={styles.checkoutButtonPressable}
                onPress={() => {
                  props.navigation.navigate("Payment", { screen: "Cart" });
                }}
              >
                <Text style={styles.checkoutButtonText}>Checkout</Text>
              </Pressable>
            </View>
          </View>
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
    paddingBottom: 10,
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
    height: 100,
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
    fontSize: 18,
    fontWeight: 500,
  },
  description: {
    flex: 7,
    fontSize: 16,
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

  orderSummarySection: {
    minHeight: 130,
    justifyContent: "center",
    borderColor: Colors.lightGray,
    borderBottomWidth: 3,
    paddingVertical: 10,
    // backgroundColor: "red",
  },
  orderSummary: {
    fontSize: 21,
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
    fontSize: 17,
    fontWeight: 700,
    flex: 5,
  },
  itemPriceContainer: {
    alignItems: "flex-end",
    flex: 5,
  },
  itemPrice: {
    fontSize: 17,
    fontWeight: 700,
  },
  orderMenu: {
    marginTop: 10,
  },
  menu: {
    paddingBottom: 15,
    marginBottom: 25,
    borderColor: Colors.lightGray,
    borderBottomWidth: 3,
  },
  subTotalprice: {
    justifyContent: "flex-end",
    // backgroundColor: "red",
  },
  addMoreTitleContainer: {
    paddingVertical: 20,
  },
  addMore: {
    fontSize: 17,
    fontWeight: 900,
  },
  totalContainer: {
    // backgroundColor: "blue",
    minHeight: 130,
    borderBottomWidth: 3,
    borderColor: Colors.lightGray,
    // backgroundColor: "red",
  },
  subTotal: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  subTotalText: {
    fontSize: 16,
    fontWeight: 600,
  },
  subTotalPrice: {
    fontSize: 16,
    fontWeight: 600,
    color: Colors.primaryGray,
  },
  delivery: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  deliveryText: {
    fontSize: 16,
    // fontWeight: 600,
  },
  deliveryPrice: {
    fontSize: 16,
    // fontWeight: 600,
    color: Colors.primaryGray,
  },
  service: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  serviceText: {
    fontSize: 16,
  },

  servicePrice: {
    fontSize: 16,
    color: Colors.primaryGray,
  },
  total: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 16,
    fontWeight: 900,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 900,
    color: Colors.primaryGray,
  },
  checkoutButtonContainer: {
    // backgroundColor: "cyan",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutButton: {
    borderRadius: 15,
    width: "90%",
    backgroundColor: Colors.primaryYellow,
  },
  checkoutButtonPressable: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButtonText: {
    fontSize: 19,
    fontWeight: 700,
  },
});
