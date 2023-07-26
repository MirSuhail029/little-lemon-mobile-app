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
import steak from "../assets/steak.jpg";
import grilledChicken from "../assets/grilled-chicken.jpg";
import hotDog from "../assets/hot-dog.jpg";
import cheeseBurger from "../assets/cheese-burger.jpg";
import brisket from "../assets/brisket.jpg";
import friedRice from "../assets/fried-rice.jpg";
import chickenBiryani from "../assets/chicken-biryani.jpg";
import shwarma from "../assets/shwarma.jpg";
import Colors from "../constants/Colors";
import { useState } from "react";

const OrderSection = function (props) {
  const filterDataArray = [
    "All",
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
    [
      steak,
      "Steak",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "65.00",
      { category: "a la carte" },
    ],
    [
      grilledChicken,
      "Grilled Chicken",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "35.00",
      { category: "a la carte" },
    ],
    [
      hotDog,
      "Hot Dog",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "5.50",
      { category: "breakfast" },
    ],
    [
      cheeseBurger,
      "Cheese Burger",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "9.99",
      { category: "breakfast" },
    ],
    [
      brisket,
      "Beef Brisket",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "50.00",
      { category: "a la carte" },
    ],
    [
      friedRice,
      "Fried Rice",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "15.00",
      { category: "special" },
    ],
    [
      chickenBiryani,
      "Chicken Biryani",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "20.00",
      { category: "special" },
    ],
    [
      shwarma,
      "Shwarma",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      "8.00",
      { category: "special" },
    ],
  ];
  const [menuArray, setMenuArray] = useState(menuArrayData);
  return (
    <>
      <View style={styles.menuFilterContainer}>
        <Text style={styles.menuFilterHeading}>Order For Delivery!</Text>
        <ScrollView
          style={styles.menuFilter}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {filterDataArray.map((arrayItem, index) => {
            return (
              <View key={index} style={styles.filterPressableContainer}>
                <Pressable
                  android_ripple={{ color: Colors.rippleDark }}
                  style={styles.filterTextPressable}
                  onPress={() => {
                    setMenuArray(
                      menuArrayData.filter((item) => {
                        return arrayItem.toLowerCase() !== "all"
                          ? item[4].category === arrayItem.toLowerCase()
                          : item[4].category !== true;
                      })
                    );
                  }}
                >
                  <Text style={styles.filterText}>{arrayItem}</Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
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
                      <Text style={styles.menuItemPrice}>${price}</Text>
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
  },
  menuFilterHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  // menuFilter: {
  //   // marginTop: 8,
  // },
  filterPressableContainer: {
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 15,
    backgroundColor: "green",
    marginBottom: 20,
    marginTop: 10,
  },
  filterTextPressable: {
    // borderRadius: 8,
    backgroundColor: Colors.lightGray,
    width: 70,
    height: 30,
    elevation: 2,
  },
  filterText: {
    textAlign: "center",
    lineHeight: 30,
    fontWeight: "bold",
    color: Colors.primaryGray,
  },
  menuItemContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: Colors.darkGray,
  },
  innerContainer: {
    width: "80%",
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
    borderRadius: 8,
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
