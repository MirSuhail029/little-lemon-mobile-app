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

// import greekSalad from "./assets/greek-salad.jpg";
const stack = createNativeStackNavigator();
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const setModalVisibility = function () {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerStyle: { backgroundColor: "green" } }}
        >
          <stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            // handleClick={}
          />
          <stack.Screen
            name="CardPayment"
            component={CardPayment}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Payment"
            component={Payment}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="ReservationSuccess"
            component={ReservationSuccess}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="TableReservation"
            component={TableReservation}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Dish"
            component={Dish}
            options={{ headerShown: false }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
