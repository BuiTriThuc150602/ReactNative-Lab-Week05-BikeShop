import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const detail = ({ route }) => {
  const {product} = route.params;
  const price = product.price
  const discount = product.discount
  const saleoff = (price*discount)
  useFonts({
    "Voltaire-Regular": require("../assets/fonts/Voltaire-Regular.ttf"),
  });
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../img/" + product.image)}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.pName}>product.name</Text>
      <Text style={styles.pDiscount}>
        {discount *100} % Off {price} &#36; <Text style={styles.pDiscountChild}>{saleoff}&#36;</Text>
      </Text>
      <Text style={styles.pDesc}>Description</Text>
      <Text style={styles.pDescContent}>
        {product.description}
      </Text>
      <View style={styles.btn}>
        <Pressable>
          <Image
            style={styles.icon}
            source={require("../img/icons_heart.png")}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable style = {styles.btnPress}>Add to cart</Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "100vw",
  },
  imgContainer: {
    height: 390,
    backgroundColor: "#E941411A",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 290,
    height: 340,
  },
  pName: {
    margin: 10,
    fontSize: 35,
    fontFamily: "Voltaire-Regular",
    fontWeight: 400,
  },
  pDiscount: {
    fontFamily: "Voltaire-Regular",
    fontSize: 25,
    fontWeight: 400,
    color: "#00000096",
    margin: 10,
  },
  pDiscountChild: {
    color: "#000",
    marginLeft: 60,
    textDecorationLine: "line-through",
  },
  pDesc: {
    margin: 10,
    fontSize: 25,
    fontFamily: "Voltaire-Regular",
    fontWeight: 400,
  },
  pDescContent: {
    lineHeigth: 28,
    fontFamily: "Voltaire-Regular",
    fontSize: 22,
    fontWeight: 400,
    color: "#00000096",
    margin: 10,
  },
  btn :{
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 30

  },
  icon:{
    width: 35,
    height: 35,
    marginLeft: 20
  },
  btnPress :{
    backgroundColor : "#E94141",
    width: 270,
    height: 60,
    borderRadius: 30,
    textAlign: "center",
    justifyContent: "center",
    color: "#FFFAFA",
    fontFamily: "Voltaire-Regular",
    fontSize: 25,
    fontWeight: 400,
    marginLeft: 30
  }
});

export default detail;
