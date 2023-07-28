import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../constants/Colors";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import { SafeAreaView } from "react-native-safe-area-context";
const CardPayment = function (props) {
  const navigationScreen = props.route.params.screen == "Cart";
  return (
    <>
      <BurgerMenuModal
        isModalVisible={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
        navigate={props.navigation.navigate}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation setModalVisibility={props.setModalVisibility} />

        <HeroSection />

        <View style={styles.paymentContainer}>
          <Text style={styles.containerHeading}>Card Details</Text>
          <View style={styles.boxContainer}>
            <Text style={styles.inputBoxTitle}>Card Number</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.inputBoxTitle}>Valid Up-To dd/mm/yy</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.inputBoxTitle}>CVV</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.inputBoxTitle}>Name of the card holder</Text>
          </View>
          <View style={styles.controlsContainer}>
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.buttonContainer}
              onPress={() => {
                // setIsPaymentSuccess(true);
                // props.navigation.navigate("ReservationSuccess");
                !navigationScreen
                  ? props.navigation.navigate("ReservationSuccess", {
                      screen: "TableReservation",
                    })
                  : props.navigation.navigate("ReservationSuccess", {
                      screen: "Cart",
                    });
              }}
            >
              <Text style={styles.buttonLabel}>Pay</Text>
            </Pressable>
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.buttonContainer}
              onPress={() => {
                !navigationScreen
                  ? props.navigation.navigate("Payment", {
                      screen: "TableReservation",
                    })
                  : props.navigation.navigate("Payment", {
                      screen: "Cart",
                    });
              }}
            >
              <Text style={styles.buttonLabel}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default CardPayment;
const styles = StyleSheet.create({
  paymentContainer: {
    width: "100%",
    padding: 15,
  },
  containerHeading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  boxContainer: {
    backgroundColor: Colors.primaryGray,
    marginTop: 15,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },

  inputBoxTitle: {
    color: Colors.primaryYellow,
    fontSize: 14,
    fontWeight: "bold",
  },
  controlsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: Colors.primaryGray,
    width: 100,
    height: 35,
    marginHorizontal: 10,
  },
  buttonLabel: {
    color: Colors.primaryYellow,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 35,
  },
});
