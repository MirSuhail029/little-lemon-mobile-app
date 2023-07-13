import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { useState } from "react";
const LoginModule = function (props) {
  const [isRegister, setIsRegister] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [inputValue, setInputValue] = useState([]);

  console.log(inputValue);
  return (
    <View style={styles.loginSection}>
      {isRegistered && (
        <View style={styles.successScreen}>
          <Text style={styles.successMessage}>Registration Successful !!!</Text>
          <Text style={styles.redirectMessage}>
            You will be redirected in a moment
          </Text>
        </View>
      )}
      {!isRegistered && <Text style={styles.heading}>Enter Login Details</Text>}
      {!isRegistered && (
        <View style={styles.inputBoxContainer}>
          <Text style={styles.inputBoxTitle}>Username</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Username"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </View>
      )}
      {isRegister && !isRegistered && (
        <View style={styles.inputBoxContainer}>
          <Text style={styles.inputBoxTitle}>Email ID</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Email ID" />
        </View>
      )}
      {!isRegistered && (
        <View style={styles.inputBoxContainer}>
          <Text style={styles.inputBoxTitle}>Password</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Password" />
        </View>
      )}
      {!isRegistered && (
        <View style={styles.controlsContainer}>
          {!isRegister && (
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.buttonContainer}
              onPress={() => {
                props.navigation.navigate("TableReservation");
              }}
            >
              <Text style={styles.buttonLabel}>Login</Text>
            </Pressable>
          )}
          {!isRegister && (
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.buttonContainer}
              onPress={() => {
                setIsRegister(true);
              }}
            >
              <Text style={styles.buttonLabel}>Register</Text>
            </Pressable>
          )}
          {isRegister && (
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.buttonContainer}
              onPress={() => {
                setIsRegistered(true);
              }}
            >
              <Text style={styles.buttonLabel}>Register</Text>
            </Pressable>
          )}
          {isRegister && (
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.buttonContainer}
              onPress={() => {
                setIsRegister(false);
                // props.navigation.navigate("Login");
              }}
            >
              <Text style={styles.buttonLabel}>Cancel</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};
export default LoginModule;

const styles = StyleSheet.create({
  loginSection: {
    width: "100%",
    paddingHorizontal: 15,
    // backgroundColor: "cyan",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  inputBoxContainer: {
    backgroundColor: Colors.primaryGray,
    marginTop: 15,
    alignItems: "center",
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
    // paddingHorizontal: 25,
    // paddingVertical: 7,
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
  successScreen: {
    paddingVertical: 100,
  },
  successMessage: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  redirectMessage: {
    marginTop: 40,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
