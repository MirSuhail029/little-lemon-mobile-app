import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import greekSalad from "../assets/greek-salad.jpg";
import brushetta from "../assets/brushetta.jpg";
import grilledFish from "../assets/grilled-fish.jpg";
import pasta from "../assets/pasta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import Colors from "../constants/Colors";
import { useState } from "react";

const OrderSection = function (props) {
  const filterDataArray = [
    "Lunch",
    "Mains",
    "Desserts",
    "A La Carte",
    "Special",
  ];
  const menuArrayData = [
    [
      greekSalad,
      "Greek Salad",
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      "12.99",
      { category: "lunch" },
    ],
    [
      brushetta,
      "Brushetta",
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      "7.99",
      { category: "lunch" },
    ],
    [
      grilledFish,
      "Grilled Fish",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
      "20.00",
      { category: "mains" },
    ],
    [
      pasta,
      "Pasta",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.",
      "18.99",
      { category: "lunch" },
    ],
    [
      lemonDessert,
      "Lemon Dessert",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "6.99",
      { category: "desserts" },
    ],
  ];
  const [menuArray, setMenuArray] = useState(menuArrayData);
  return (
    <>
      <View style={styles.menuFilterContainer}>
        <Text style={styles.menuFilterHeading}>Order For Delivery!</Text>
        <View style={styles.menuFilter}>
          {filterDataArray.map((arrayItem, index) => {
            return (
              <View key={index}>
                <Pressable
                  style={styles.filterTextPressable}
                  onPress={() => {
                    setMenuArray(
                      menuArrayData.filter((item) => {
                        return item[4].category === arrayItem.toLowerCase();
                      })
                    );
                  }}
                >
                  <Text style={styles.filterText}>{arrayItem}</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>

      <ScrollView style={{ paddingHorizontal: 10 }}>
        {menuArray.length === 0 && (
          <View style={styles.filterContainer}>
            <Text style={styles.noMatchStyle}>No match found!</Text>
          </View>
        )}
        <ScrollView>
          {menuArray.length > 0 &&
            menuArray.map((item, index) => {
              const [image, menuItem, description, price, none] = item;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    props.navigation.navigate("Dish", { dishInfo: item });
                  }}
                >
                  <View style={styles.menuItemContainer}>
                    <View style={styles.innerContainer}>
                      <Text style={styles.menuItemTitle}>{menuItem}</Text>
                      <Text style={styles.menuItemDescription}>
                        {description}
                      </Text>
                      <Text style={styles.menuItemPrice}>{price}</Text>
                    </View>
                    <Image source={image} style={styles.menuItemImage} />
                  </View>
                </Pressable>
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
    paddingHorizontal: 15,
    justifyContent: "center",
    height: 80,
  },
  menuFilterHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuFilter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 5,
  },
  filterTextPressable: {
    backgroundColor: Colors.lightGray,
    width: 70,
    height: 30,
    borderRadius: 8,
    elevation: 2,
    marginRight: 15,
  },
  filterText: {
    textAlign: "center",
    lineHeight: 30,
    fontWeight: "bold",
    color: Colors.primaryGray,
  },
  menuItemContainer: {
    flexDirection: "row",
  },
  innerContainer: {
    width: "80%",
    borderTopWidth: 1,
    borderTopColor: Colors.darkGray,
  },
  menuItemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  menuItemDescription: {
    fontSize: 14,
    color: Colors.primaryGray,
    height: 36,
    width: "95%",
    marginVertical: 10,
  },
  menuItemPrice: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.primaryGray,
    marginBottom: 10,
  },
  menuItemImage: {
    width: "20%",
    height: 70,
    marginTop: "auto",
    marginBottom: "auto",
  },
  filterContainer: {
    height: 100,
    justifyContent: "center",
  },
  noMatchStyle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "lightgray",
    textAlign: "center",
  },
});
