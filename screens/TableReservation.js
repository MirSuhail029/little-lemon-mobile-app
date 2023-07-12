import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Colors from "../constants/Colors";
const TableReservation = function (props) {
  return (
    <>
      <BurgerMenuModal
        modalVisibility={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
      />

      <Navigation setModalVisibility={props.setModalVisibility} />
      <HeroSection />
      <View style={styles.tableReservation}>
        <Text style={styles.containerHeading}>Table Reservation</Text>
        <View style={styles.boxContainer}>
          <Text style={styles.inputBoxTitle}>Date dd/mm/yyyy</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.inputBoxTitle}>Time hh/mm</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.inputBoxTitle}>Number of Persons</Text>
        </View>
        <View style={styles.inputBoxContainer}>
          <Text style={styles.inputBoxTitle}>Customer Name</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Name" />
        </View>
        <View style={styles.inputBoxContainer}>
          <Text style={styles.inputBoxTitle}>Contact Number</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Phone Number" />
        </View>
        <View style={styles.controlsContainer}>
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>Submit</Text>
          </Pressable>

          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
export default TableReservation;
const styles = StyleSheet.create({
  tableReservation: {
    // backgroundColor: "green",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  containerHeading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputBoxContainer: {
    backgroundColor: Colors.primaryGray,
    marginTop: 15,
    alignItems: "center",
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
    // textAlign: "center",
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlign: "center",
    width: "80%",
    backgroundColor: Colors.primaryWhite,
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 12,
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
