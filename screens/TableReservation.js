import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Colors from "../constants/Colors";
import { useState } from "react";
import { Calendar } from "react-native-calendars";

const TableReservation = function (props) {
  const [isDateModal, setIsDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [isTimeVisible, setIsTimeVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isPersonsVisible, setIsPersonsVisible] = useState(false);
  const [noOfPersons, setNoOfPersons] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [reservationInfo, setReservationInfo] = useState([]);
  return (
    <>
      <BurgerMenuModal
        modalVisibility={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
      />
      <Modal visible={isDateModal} animationType="slide">
        <Calendar
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
            setIsDateModal(!isDateModal);
          }}
        />
      </Modal>

      <Navigation setModalVisibility={props.setModalVisibility} />
      <HeroSection />
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.tableReservation}>
            <Text style={styles.containerHeading}>Table Reservation</Text>
            <Pressable
              onPress={() => {
                setIsDateModal(!isDateModal);
              }}
            >
              <View style={styles.boxContainer}>
                <Text style={styles.inputBoxTitle}>Date</Text>
                {selectedDate && (
                  <Text style={styles.displayedData}>
                    {selectedDate.split("-").reverse().join("-")}
                  </Text>
                )}
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                setIsTimeVisible(!isTimeVisible);
              }}
            >
              <View style={styles.boxContainer}>
                <Text style={styles.inputBoxTitle}>Time hh/mm</Text>
                {isTimeVisible && (
                  <View>
                    <Text style={styles.displayedData}>
                      {selectedTime.getHours()} : {selectedTime.getMinutes()}
                      {selectedTime.getHours() <= 12 ? " AM" : " PM"}
                    </Text>
                  </View>
                )}
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                setIsPersonsVisible(!isPersonsVisible);
              }}
            >
              <View style={styles.boxContainer}>
                <Text style={styles.inputBoxTitle}>Number of Persons</Text>
                {isPersonsVisible && (
                  <Text style={styles.displayedData}>{noOfPersons}</Text>
                )}
              </View>
            </Pressable>
            <View style={styles.inputBoxContainer}>
              <Text style={styles.inputBoxTitle}>Customer Name</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Enter Name"
                onChangeText={(val) => {
                  setCustomerName(val);
                }}
                value={customerName}
              />
            </View>
            <View style={styles.inputBoxContainer}>
              <Text style={styles.inputBoxTitle}>Contact Number</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Enter Phone Number"
                onChangeText={(val) => {
                  setCustomerPhone(val);
                }}
                value={customerPhone}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.controlsContainer}>
              <Pressable
                android_ripple={{ color: Colors.rippleDark }}
                style={styles.buttonContainer}
                onPress={() => {
                  if (
                    selectedDate &&
                    selectedTime &&
                    noOfPersons &&
                    customerName &&
                    customerPhone
                  ) {
                    setReservationInfo([
                      selectedDate.split("-").reverse().join("-"),
                      `${selectedTime.getHours()} ${selectedTime.getMinutes()}`,
                      noOfPersons,
                      customerName,
                      customerPhone,
                    ]);
                    props.navigation.navigate("Payment");
                    setSelectedDate("");
                    setSelectedTime("");
                    setNoOfPersons("");
                    setCustomerName("");
                    setCustomerPhone("");
                    console.log(reservationInfo);
                  } else {
                    console.log("Please enter all the values");
                  }
                }}
              >
                <Text style={styles.buttonLabel}>Submit</Text>
              </Pressable>

              <Pressable
                android_ripple={{ color: Colors.rippleDark }}
                style={styles.buttonContainer}
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              >
                <Text style={styles.buttonLabel}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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
  displayedData: {
    color: Colors.primaryWhite,
    fontSize: 18,
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
