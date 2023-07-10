import { useState } from "react";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import OrderSection from "../components/OrderSection";
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
        <View style={{ backgroundColor: "#495E57", marginTop: 20 }}>
          <Text style={{ color: "#F4CE14" }}>Username</Text>
          <TextInput
            style={{ borderWidth: 1, paddingHorizontal: 10 }}
            placeholder="Enter Username"
          />
        </View>
        <View style={{ backgroundColor: "#495E57", marginTop: 20 }}>
          <Text style={{ color: "#F4CE14" }}>Password</Text>
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
          <Pressable style={{ backgroundColor: "#495E57" }}>
            <Text style={{ color: "#F4CE14" }}>Login</Text>
          </Pressable>
          <Pressable style={{ backgroundColor: "#495E57" }}>
            <Text style={{ color: "#F4CE14" }}>Register</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
export default Login;
