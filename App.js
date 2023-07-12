import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import TableReservation from "./screens/TableReservation";
// import Payment from "./screens/Payment";
// import CardPayment from "./screens/CardPayment";
import ReservationSuccess from "./screens/ReservationSuccess";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import greekSalad from "./assets/greek-salad.jpg";
const stack = createNativeStackNavigator();
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const setModalVisibility = function () {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Home" component={Home} /> */}
      {/* <stack.Screen name="payment" component={Demo} /> */}
      <Home
        setModalVisibility={setModalVisibility}
        isModalVisible={isModalVisible}
      />
      {/* <Login
          setModalVisibility={setModalVisibility}
          isModalVisible={isModalVisible}
        /> */}
      {/* <TableReservation
        setModalVisibility={setModalVisibility}
        isModalVisible={isModalVisible}
      /> */}
      {/* <Payment
        setModalVisibility={setModalVisibility}
        isModalVisible={isModalVisible}
      /> */}
      {/* <CardPayment
        setModalVisibility={setModalVisibility}
        isModalVisible={isModalVisible}
      /> */}
      {/* <ReservationSuccess
        setModalVisibility={setModalVisibility}
        isModalVisible={isModalVisible}
      /> */}
      {/* </stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
});
