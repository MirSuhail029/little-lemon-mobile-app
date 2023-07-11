import { useState } from "react";
import BurgerMenuModal from "../components/BurgerMenuModal";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import LoginModule from "../components/LoginModule";

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
      <LoginModule />
    </>
  );
};
export default Login;
