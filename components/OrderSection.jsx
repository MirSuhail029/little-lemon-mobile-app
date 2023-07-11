import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import greekSalad from "../assets/greek-salad.jpg";
import brushetta from "../assets/brushetta.jpg";
import grilledFish from "../assets/grilled-fish.jpg";
import pasta from "../assets/pasta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import Colors from "../global/Colors";
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
  const [isNoFilterResult, setIsNoFilterResult] = useState(false);
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
              // console.log(menuArray);
              menuArray.length === 0
                ? setIsNoFilterResult(true)
                : setIsNoFilterResult(false);
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
              // console.log(menuArray);
              menuArray.length === 0
                ? setIsNoFilterResult(true)
                : setIsNoFilterResult(false);
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
              // console.log(menuArray);
              menuArray.length === 0
                ? setIsNoFilterResult(true)
                : setIsNoFilterResult(false);
            }}
          >
            Desserts
          </Text>
          <Text
            style={styles.filterText}
            onPress={() => {
              setMenuArray(
                menuArray.filter((item) => {
                  return item[3].category === "a la carte";
                })
              );
              // console.log(menuArray);
              menuArray.length === 0
                ? setIsNoFilterResult(true)
                : setIsNoFilterResult(false);
            }}
          >
            A La Carte
          </Text>
          <Text
            style={styles.filterText}
            onPress={() => {
              setMenuArray(
                menuArray.filter((item) => {
                  return item[3].category === "special";
                })
              );
              // console.log(menuArray.length);
              menuArray.length === 0
                ? setIsNoFilterResult(true)
                : setIsNoFilterResult(false);
            }}
          >
            Special
          </Text>
        </View>
      </View>

      <ScrollView style={{ paddingHorizontal: 10 }}>
        {isNoFilterResult && (
          <View style={{ height: 100, justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                backgroundColor: "lightgray",
                textAlign: "center",
              }}
            >
              No match found!
            </Text>
          </View>
        )}
        <ScrollView>
          {menuArray.map((item, index) => {
            const [menuItem, description, price, none, image] = item;
            return (
              <View key={index} style={styles.menuItemContainer}>
                <View
                  style={{
                    width: "80%",
                    borderTopWidth: 1,
                    borderTopColor: Colors.lightGray,
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
                      color: Colors.primaryGray,
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
                      color: Colors.primaryGray,
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
    backgroundColor: Colors.lightGray,
    width: 70,
    height: 35,
    borderRadius: 8,
    textAlign: "center",
    lineHeight: 30,
    fontWeight: "bold",
    color: Colors.primaryGray,
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
