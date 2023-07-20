import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import OrderSection from "../components/OrderSection";
import BurgerMenuModal from "../components/BurgerMenuModal";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = function (props) {
  // console.log("hey");
  return (
    <>
      <BurgerMenuModal
        isModalVisible={props.isModalVisible}
        setModalVisibility={props.setModalVisibility}
        navigate={props.navigation.navigate}
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
