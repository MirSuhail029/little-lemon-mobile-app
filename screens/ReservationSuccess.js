import BurgerMenuModal from "../components/BurgerMenuModal";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../constants/Colors";

const ReservationSuccess = function (props) {
  return (
    <>
      <BurgerMenuModal
        modalVisibility={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
      />

      <Navigation setModalVisibility={props.setModalVisibility} />
      <HeroSection heroMessageImageVisible={true} />
      <View style={styles.reservationSuccessContainer}>
        <Text style={styles.successMessage}>Reservation Successful !!!</Text>
        <View style={styles.controlsContainer}>
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>Home</Text>
          </Pressable>

          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>Close</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
export default ReservationSuccess;

const styles = StyleSheet.create({
  reservationSuccessContainer: {
    paddingVertical: 100,
  },
  controlsContainer: {
    flexDirection: "row",
    marginTop: 140,
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: Colors.primaryGray,
    width: 100,
    height: 30,
    marginHorizontal: 10,
  },
  buttonLabel: {
    color: Colors.primaryYellow,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,
  },
  successMessage: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
