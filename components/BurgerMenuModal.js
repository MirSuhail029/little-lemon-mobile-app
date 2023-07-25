import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import Colors from "../constants/Colors";

const BurgerMenuModal = function (props) {
  // console.log(props);
  return (
    <Modal
      visible={props.isModalVisible}
      animationType="slide"
      // transparent={true}
    >
      <View style={styles.burgerMenuModalContainer}>
        <View style={styles.burgerMenuModal}>
          <Pressable onPress={props.setModalVisibility}>
            <Text
              style={{
                color: Colors.primaryYellow,
                fontSize: 20,
                fontWeight: "bold",
                width: 100,
                textAlign: "center",
                borderWidth: 2,
                borderColor: Colors.primaryYellow,
              }}
            >
              X Close
            </Text>
          </Pressable>
          <View style={styles.modalOptionsContainer}>
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.modalLinks}
              onPress={() => {
                props.navigate("Home");
                props.setModalVisibility();
              }}
            >
              <Text style={styles.burgerMenuText}>Home</Text>
            </Pressable>
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.modalLinks}
              onPress={() => {
                props.navigate("TableReservation");
                props.setModalVisibility();
              }}
            >
              <Text style={styles.burgerMenuText}>Reservation</Text>
            </Pressable>
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.modalLinks}
              onPress={() => {
                props.navigate("Login");
                props.setModalVisibility();
              }}
            >
              <Text style={styles.burgerMenuText}>Login</Text>
            </Pressable>
            <Pressable
              android_ripple={{ color: Colors.rippleDark }}
              style={styles.modalLinks}
            >
              <Text style={styles.burgerMenuText}>Contact</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default BurgerMenuModal;

const styles = StyleSheet.create({
  burgerMenuModalContainer: {
    width: "100%",
  },
  burgerMenuModal: {
    // backgroundColor: "green",
  },
  modalOptionsContainer: {
    height: 300,
    justifyContent: "space-around",
  },
  modalLinks: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  burgerMenuText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
