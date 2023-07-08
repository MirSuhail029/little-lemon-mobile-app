import { StyleSheet, ScrollView, View, Text } from "react-native";
const OrderSection = function () {
  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      <View style={styles.menuFilter}>
        {/* <ScrollView> */}
        <Text style={styles.filterText}>Lunch</Text>
        <Text style={styles.filterText}>Mains</Text>
        <Text style={styles.filterText}>Desserts</Text>
        <Text style={styles.filterText}>A La Carte</Text>
        <Text style={styles.filterText}>Special</Text>
        {/* </ScrollView> */}
      </View>
      <ScrollView>
        <View>
          <Text>Greek Salad</Text>
          <Text>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </Text>
          <Text>$12.99</Text>
        </View>
        <View>
          <Text>Brushetta</Text>
          <Text>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil. Toppings of tomato,
            veggies, beans, cured pork, or cheese are examples of variations. In
            Italy, a brustolina grill is frequently used to create bruschetta.
          </Text>
          <Text>$7.99</Text>
        </View>
        <View>
          <Text>Grilled Fish</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            cursus.
          </Text>
          <Text>$20.00</Text>
        </View>
        <View>
          <Text>Grilled Fish</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            cursus.
          </Text>
          <Text>$20.00</Text>
        </View>
        <View>
          <Text>Grilled Fish</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            cursus.
          </Text>
          <Text>$20.00</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};
export default OrderSection;

const styles = StyleSheet.create({
  menuFilter: {
    backgroundColor: "pink",
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterText: {
    backgroundColor: "#EDEFEE",
    width: 70,
    height: 35,
    borderRadius: 8,
    textAlign: "center",
    lineHeight: 30,
  },
});
