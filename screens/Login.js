import { useState } from "react";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import LoginModule from "../components/LoginModule";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = function (props) {
  return (
    <>
      <BurgerMenuModal
        isModalVisible={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
        navigate={props.navigation.navigate}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation setModalVisibility={props.setModalVisibility} />
        <HeroSection heroMessageImageVisible />
        <ScrollView>
          <KeyboardAvoidingView>
            <LoginModule navigation={props.navigation} />
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Login;
