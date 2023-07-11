import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TableReservation from "./pages/TableReservation";
import Payment from "./pages/Payment";
import CardPayment from "./pages/CardPayment";
import ReservationSuccess from "./pages/ReservationSuccess";

// import greekSalad from "./assets/greek-salad.jpg";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const setModalVisibility = function () {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      {/* <Home
        setModalVisibility={setModalVisibility}
        isModalVisible={isModalVisible}
      /> */}
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
      <ReservationSuccess
        setModalVisibility={setModalVisibility}
        isModalVisible={isModalVisible}
      />
      <StatusBar style="auto" />
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
