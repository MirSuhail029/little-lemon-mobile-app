import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import OrderSection from "../components/OrderSection";
import BurgerMenuModal from "../components/BurgerMenuModal";
const Home = function (props) {
  return (
    <>
      <BurgerMenuModal
        modalVisibility={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
      />
      <Navigation setModalVisibility={props.setModalVisibility} />
      <HeroSection
        heroMessageImageVisible={true}
        heroButtonVisible={true}
        navigation={props.navigation}
      />
      <OrderSection navigation={props.navigation} />
    </>
  );
};
export default Home;
