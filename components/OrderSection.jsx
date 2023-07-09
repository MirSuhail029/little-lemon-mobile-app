import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import greekSalad from "../assets/greek-salad.jpg";
import brushetta from "../assets/brushetta.jpg";
import grilledFish from "../assets/grilled-fish.jpg";
import pasta from "../assets/pasta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import { useState } from "react";
const OrderSection = function () {
  const menuArrayData = [
    [
      "Greek Salad",
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      "$12.99",
      { category: "lunch" },
      greekSalad,
    ],
    [
      "Brushetta",
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      "$7.99",
      { category: "lunch" },
      brushetta,
    ],
    [
      "Grilled Fish",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
      "$20.00",
      { category: "mains" },
      grilledFish,
    ],
    [
      "Pasta",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.",
      "$18.99",
      { category: "lunch" },
      pasta,
    ],
    [
      "Lemon Dessert",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "$6.99",
      { category: "dessert" },
      lemonDessert,
    ],
  ];
  const [menuArray, setMenuArray] = useState(menuArrayData);
  return (
    <>
      <View style={styles.menuFilterContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Order For Delivery!
        </Text>
        <View style={styles.menuFilter}>
          <Text
            style={styles.filterText}
            onPress={() => {
              setMenuArray(
                menuArray.filter((item) => {
                  return item[3].category === "lunch";
                })
              );
            }}
          >
            Lunch
          </Text>
          <Text
            style={styles.filterText}
            onPress={() => {
              setMenuArray(
                menuArray.filter((item) => {
                  return item[3].category === "mains";
                })
              );
            }}
          >
            Mains
          </Text>
          <Text
            style={styles.filterText}
            onPress={() => {
              setMenuArray(
                menuArray.filter((item) => {
                  return item[3].category === "dessert";
                })
              );
            }}
          >
            Desserts
          </Text>
          <Text style={styles.filterText}>A La Carte</Text>
          <Text style={styles.filterText}>Special</Text>
        </View>
      </View>

      <ScrollView style={{ paddingHorizontal: 10 }}>
        <ScrollView>
          {menuArray.map((item, index) => {
            const [menuItem, description, price, none, image] = item;
            return (
              <View key={index} style={styles.menuItemContainer}>
                <View
                  style={{
                    width: "80%",
                    borderTopWidth: 1,
                    borderTopColor: "#EDEFEE",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}
                  >
                    {menuItem}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#495E57",
                      height: 40,
                      width: "95%",
                      marginVertical: 10,
                    }}
                  >
                    {description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#495E57",
                      marginBottom: 10,
                    }}
                  >
                    {price}
                  </Text>
                </View>
                <Image source={image} style={styles.menuItemImage} />
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </>
  );
};
export default OrderSection;

const styles = StyleSheet.create({
  menuFilterContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
    height: 100,
    // backgroundColor: "red",
  },
  menuFilter: {
    // backgroundColor: "pink",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  filterText: {
    backgroundColor: "#EDEFEE",
    width: 70,
    height: 35,
    borderRadius: 8,
    textAlign: "center",
    lineHeight: 30,
    fontWeight: "bold",
    color: "#495E57",
  },
  menuItemContainer: {
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  menuItemImage: {
    width: "20%",
    height: 80,
    marginTop: "auto",
    marginBottom: "auto",
  },
});
