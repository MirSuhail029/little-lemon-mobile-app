import BurgerMenuModal from "../components/BurgerMenuModal";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { useState } from "react";

const RadioButton = function (props) {
  const [isButtonSelected, setIsButtonSelected] = useState(false);
  const appliedStyle = isButtonSelected
    ? styles.radioButtonSelected
    : styles.radioButton;
  return (
    <>
      <Pressable
        onPress={() => {
          setIsButtonSelected(!isButtonSelected);
        }}
      >
        <View style={styles.buttonTextContainer}>
          <View style={appliedStyle}></View>
          <Text style={styles.radioText}>{props.title}</Text>
        </View>
      </Pressable>
    </>
  );
};

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

          {
            <View style={styles.radioButtonGroup}>
              <RadioButton title={"Cash"} />
              <RadioButton title={"Card"} />
              <RadioButton title={"Internet Banking"} />
              <RadioButton title={"UPI"} />
            </View>
          }
        </View>
        <View></View>

        <View style={styles.controlsContainer}>
          <Pressable
            android_ripple={{ color: Colors.rippleDark }}
            style={styles.buttonContainer}
            onPress={() => {
              props.navigation.navigate("CardPayment");
            }}
          >
            <Text style={styles.buttonLabel}>Pay</Text>
          </Pressable>

          <Pressable
            android_ripple={{ color: Colors.rippleDark }}
            style={styles.buttonContainer}
            onPress={() => {
              props.navigation.navigate("TableReservation");
            }}
          >
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
  radioButtonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  radioButton: {
    width: 10,
    height: 10,
    backgroundColor: Colors.primaryWhite,
    borderRadius: 10,
    marginRight: 5,
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    backgroundColor: Colors.primaryBlack,
    borderRadius: 10,
    marginRight: 5,
  },
  radioText: {
    color: Colors.primaryWhite,
  },
});
