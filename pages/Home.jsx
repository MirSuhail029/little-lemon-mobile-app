import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import OrderSection from "../components/OrderSection";
import BurgerMenuModal from "../components/BurgerMenuModal";
import { useState } from "react";

const Home = function () {
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
      <HeroSection heroMessageImageVisible={true} heroButtonVisible={true} />
      <OrderSection />
    </>
  );
};
export default Home;
