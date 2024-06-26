import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import TableReservation from "./screens/TableReservation";
import Payment from "./screens/Payment";
import CardPayment from "./screens/CardPayment";
import ReservationSuccess from "./screens/ReservationSuccess";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dish from "./screens/Dish";
import Cart from "./screens/Cart";

const stack = createNativeStackNavigator();
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const setModalVisibility = function () {
    setIsModalVisible(!isModalVisible);
  };
console.log("test");
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Cart"
          screenOptions={{ headerStyle: { backgroundColor: "green" } }}
        >
          <stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => {
              return (
                <Home
                  {...props}
                  isModalVisible={isModalVisible}
                  setModalVisibility={setModalVisibility}
                />
              );
            }}
          </stack.Screen>
          <stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => {
              return (
                <Login
                  {...props}
                  isModalVisible={isModalVisible}
                  setModalVisibility={setModalVisibility}
                />
              );
            }}
          </stack.Screen>
          <stack.Screen name="CardPayment" options={{ headerShown: false }}>
            {(props) => {
              return (
                <CardPayment
                  {...props}
                  isModalVisible={isModalVisible}
                  setModalVisibility={setModalVisibility}
                />
              );
            }}
          </stack.Screen>
          <stack.Screen name="Payment" options={{ headerShown: false }}>
            {(props) => {
              return (
                <Payment
                  {...props}
                  isModalVisible={isModalVisible}
                  setModalVisibility={setModalVisibility}
                />
              );
            }}
          </stack.Screen>
          <stack.Screen
            name="ReservationSuccess"
            options={{ headerShown: false }}
          >
            {(props) => {
              return (
                <ReservationSuccess
                  {...props}
                  isModalVisible={isModalVisible}
                  setModalVisibility={setModalVisibility}
                />
              );
            }}
          </stack.Screen>
          <stack.Screen
            name="TableReservation"
            options={{ headerShown: false }}
          >
            {(props) => {
              return (
                <TableReservation
                  {...props}
                  isModalVisible={isModalVisible}
                  setModalVisibility={setModalVisibility}
                />
              );
            }}
          </stack.Screen>
          <stack.Screen name="Dish" options={{ headerShown: false }}>
            {(props) => {
              return (
                <Dish
                  {...props}
                  isModalVisible={isModalVisible}
                  setModalVisibility={setModalVisibility}
                />
              );
            }}
          </stack.Screen>
          <stack.Screen name="Cart" options={{ headerShown: false }}>
            {(props) => {
              return (
                <Cart
                  {...props}
                  isModalVisible={isModalVisible}
                  setModalVisibility={setModalVisibility}
                />
              );
            }}
          </stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
