import { StyleSheet, View, Text, Modal, Pressable } from "react-native";

const BurgerMenuModal = function (props) {
  console.log(props.modalVisibility);
  return (
    <Modal
      visible={props.modalVisibility}
      animationType="slide"
      // transparent={true}
    >
      <View style={styles.burgerMenuModalContainer}>
        <View style={styles.burgerMenuModal}>
          <Pressable onPress={props.setModalVisibility}>
            <Text
              style={{
                color: "#F4CE14",
                fontSize: 20,
                fontWeight: "bold",
                width: 100,
                textAlign: "center",
                borderWidth: 2,
                borderColor: "#F4CE14",
              }}
            >
              X Close
            </Text>
          </Pressable>
          <View style={styles.modalOptionsContainer}>
            <Pressable>
              <Text style={styles.burgerMenuText}>Home</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.burgerMenuText}>Reservation</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.burgerMenuText}>Registration</Text>
            </Pressable>
            <Pressable>
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
    padding: 20,
  },
  burgerMenuModal: {
    // backgroundColor: "green",
  },
  modalOptionsContainer: {
    height: 300,
    justifyContent: "space-around",
  },
  burgerMenuText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
