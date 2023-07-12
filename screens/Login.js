import { useState } from "react";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import LoginModule from "../components/LoginModule";

const Login = function (props) {
  return (
    <>
      <BurgerMenuModal
        modalVisibility={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
      />
      <Navigation setModalVisibility={props.setModalVisibility} />
      <HeroSection heroMessageImageVisible />
      <LoginModule />
    </>
  );
};
export default Login;
