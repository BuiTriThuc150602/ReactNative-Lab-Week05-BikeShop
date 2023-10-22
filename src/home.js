import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Home = ({ navigation }) => {
  const [fontLoader] = useFonts({
    "VT323-Regular": require("../assets/fonts/VT323-Regular.ttf"),
    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
  });
  if (!fontLoader) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../img/bifour.png")}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.shopName}>POWER BIKE SHOP</Text>
      <Pressable
        style={styles.press}
        onPress={() => navigation.navigate("Products")}
      >
        Get Stated
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 30,
  },
  title: {
    textAlign: "center",
    fontFamily: "VT323-Regular",
    fontSize: 26,
    lineHeight: 26,
    fontWeight: 400,
  },
  imgContainer: {
    width: 360,
    height: 388,
    backgroundColor: "#E941411A",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 292,
    height: 270,
  },
  shopName: {
    fontSize: 26,
    fontWeight: 700,
    fontFamily:'Ubuntu-Regular',
    textAlign: "center",
    lineHeight: 30,
    width: 200,
  },
  press: {
    width: 340,
    height: 61,
    backgroundColor: "#E94141",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "VT323-Regular",
    fontSize: 27,
    fontWeight: 400,
    color: "#fff",
    borderRadius: 30,
  },
});

export default Home;
