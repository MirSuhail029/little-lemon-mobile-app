import { useState } from "react";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
// import OrderSection from "../components/OrderSection";
import Colors from "../global/Colors";
import { View, Text, TextInput, Pressable } from "react-native";

const Login = function () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const setModalVisibility = function () {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <>
      <BurgerMenuModal
        modalVisibility={isModalVisible}
        setModalVisibility={setModalVisibility}
      />

      <Navigation setModalVisibility={setModalVisibility} />
      <HeroSection heroMessageImageVisible />
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Enter Login Details
        </Text>
        <View style={{ backgroundColor: Colors.primaryGray, marginTop: 20 }}>
          <Text style={{ color: Colors.primaryYellow }}>Username</Text>
          <TextInput
            style={{ borderWidth: 1, paddingHorizontal: 10 }}
            placeholder="Enter Username"
          />
        </View>
        <View style={{ backgroundColor: Colors.primaryGray, marginTop: 20 }}>
          <Text style={{ color: Colors.primaryYellow }}>Password</Text>
          <TextInput
            style={{ borderWidth: 1, paddingHorizontal: 10 }}
            placeholder="Enter Username"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 50,
            justifyContent: "space-around",
          }}
        >
          <Pressable style={{ backgroundColor: Colors.primaryGray }}>
            <Text style={{ color: Colors.primaryYellow }}>Login</Text>
          </Pressable>
          <Pressable style={{ backgroundColor: Colors.primaryGray }}>
            <Text style={{ color: Colors.primaryYellow }}>Register</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
export default Login;
