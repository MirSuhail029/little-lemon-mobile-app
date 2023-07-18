import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import OrderSection from "../components/OrderSection";
import BurgerMenuModal from "../components/BurgerMenuModal";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = function (props) {
  return (
    <>
      <BurgerMenuModal
        modalVisibility={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
      />
      <SafeAreaView>
        <Navigation setModalVisibility={props.setModalVisibility} />
      </SafeAreaView>
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
