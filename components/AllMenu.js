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

import { StyleSheet, FlatList, Text, View, Image } from "react-native";

const Item = function ({ dish }) {
  return (
    <>
      <View style={StyleSheet.menuItemContainer}>
        <View>
          <View>
            <Text>{dish.name}</Text>
          </View>
          <View>
            <Text>{dish.description}</Text>
          </View>
          <View>
            <Text>{dish.price}</Text>
          </View>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={dish.picture} />
        </View>
      </View>
    </>
  );
};

const AllMenu = function () {
  const menuArrayData = [
    {
      id: 101,
      picture: greekSalad,
      name: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "12.99",
      category: "lunch",
    },

    {
      id: 102,
      picture: brushetta,
      name: "Brushetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      price: "7.99",
      category: "lunch",
    },

    {
      id: 103,
      picture: grilledFish,
      name: "Grilled Fish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
      price: "20.00",
      category: "mains",
    },

    {
      id: 104,
      picture: pasta,
      name: "Pasta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.",
      price: "18.99",
      category: "lunch",
    },

    {
      id: 105,
      picture: lemonDessert,
      name: "Lemon Dessert",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      price: "6.99",
      category: "desserts",
    },

    {
      id: 106,
      picture: steak,
      name: "Steak",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      price: "65.00",
      category: "a la carte",
    },

    {
      id: 107,
      picture: grilledChicken,
      name: "Grilled Chicken",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      price: "35.00",
      category: "a la carte",
    },

    {
      id: 108,
      picture: hotDog,
      name: "Hot Dog",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      price: "5.50",
      category: "breakfast",
    },

    {
      id: 109,
      picture: cheeseBurger,
      name: "Cheese Burger",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      price: "9.99",
      category: "breakfast",
    },

    {
      id: 110,
      picture: brisket,
      name: "Beef Brisket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      price: "50.00",
      category: "a la carte",
    },

    {
      id: 111,
      picture: friedRice,
      name: "Fried Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      price: "15.00",
      category: "special",
    },

    {
      id: 112,
      picture: chickenBiryani,
      name: "Chicken Biryani",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      price: "20.00",
      category: "special",
    },

    {
      id: 113,
      picture: shwarma,
      name: "Shwarma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.",
      price: "8.00",
      category: "special",
    },
  ];

  return (
    <>
      <FlatList
        horizontal={true}
        data={menuArrayData}
        renderItem={({ item }) => {
          return <Item dish={item} />;
          //   return <Text>{item.price}</Text>;
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
export default AllMenu;

const styles = StyleSheet.create({
  menuItemContainer: {
    width: 100,
    flexDirection: "row",
    // backgroundColor: "green",
  },
  pictureContainer: {},
  picture: {
    width: 80,
    height: 80,
  },
});
