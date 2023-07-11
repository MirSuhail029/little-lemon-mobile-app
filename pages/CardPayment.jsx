import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../global/Colors";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
const CardPayment = function (props) {
  return (
    <>
      <BurgerMenuModal
        modalVisibility={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
      />

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
            style={styles.buttonContainer}
            onPress={() => {
              setIsPaymentSuccess(true);
            }}
          >
            <Text style={styles.buttonLabel}>Pay</Text>
          </Pressable>
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>Cancel</Text>
          </Pressable>
        </View>
      </View>
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
    justifyContent: "space-around",
  },
  buttonContainer: {
    backgroundColor: Colors.primaryGray,
    paddingHorizontal: 25,
    paddingVertical: 7,
  },
  buttonLabel: {
    color: Colors.primaryYellow,
    fontSize: 14,
    fontWeight: "bold",
  },
});
