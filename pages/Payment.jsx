import BurgerMenuModal from "../components/BurgerMenuModal";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../global/Colors";
const Payment = function (props) {
  return (
    <>
      <BurgerMenuModal
        modalVisibility={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
      />

      <Navigation setModalVisibility={props.setModalVisibility} />
      <HeroSection />
      <View style={styles.paymentContainer}>
        <Text style={styles.containerHeading}>Make Payment</Text>
        <View style={styles.boxContainer}>
          <Text style={styles.inputBoxTitle}>Customer Name</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.inputBoxTitle}>Reservation Number</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.inputBoxTitle}>Total Amount</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.inputBoxTitle}>Date</Text>
        </View>
        <View style={styles.boxContainerAlt}>
          <Text style={styles.inputBoxTitle}>Payment Type</Text>
          <Text>Placeholder</Text>
        </View>
        <View></View>

        <View style={styles.controlsContainer}>
          <Pressable style={styles.buttonContainer}>
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
export default Payment;
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
  boxContainerAlt: {
    backgroundColor: Colors.primaryGray,
    marginTop: 15,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBoxTitle: {
    color: Colors.primaryYellow,
    fontSize: 14,
    fontWeight: "bold",
    // textAlign: "center",
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
