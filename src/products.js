import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";

const Products = () => {
  const productsData = require("../data/bikes.json");
  const [selectedButton, setSelectedButton] = useState("All");
  useFonts({
    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
    "Voltaire-Regular": require("../assets/fonts/Voltaire-Regular.ttf"),
  });

  const renderItems = ({ item }) => {
    return (
      <View style={styles.items}>
        <View>
          <Image
            style={styles.img}
            source={require("../img/" + item.image)}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={{color:'#00000099',fontFamily:'Voltaire-Regular',fontSize:20,fontWeight:400}}>{item.name}</Text>
          <Text style={{color:'#000000',fontFamily:'Voltaire-Regular',fontSize:20,fontWeight:400}}><Text style={{color:'#F7BA83'}}>&#36;</Text>{item.price}</Text>
        </View>
      </View>
    );
  };
  const getButtonStyle = (button) => {
    return {
      width: 99,
      height: 32,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#E9414187",
      color: button === selectedButton ? "#E9414187" : "#ccc",
      textAlign: "center",
      justifyContent: "center",
      fontFamily: "Voltaire-Regular",
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      <View style={styles.button}>
        <Pressable
          style={getButtonStyle("All")}
          onPress={() => setSelectedButton("All")}
        >
          All
        </Pressable>
        <Pressable
          style={getButtonStyle("Roadbike")}
          onPress={() => setSelectedButton("Roadbike")}
        >
          Roadbike
        </Pressable>
        <Pressable
          style={getButtonStyle("Mountain")}
          onPress={() => setSelectedButton("Mountain")}
        >
          Mountain
        </Pressable>
      </View>
      <SafeAreaView style={{width:"100vw"}}>
        <FlatList
          data={productsData}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  img: {
    width: 135,
    height: 127,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    color: "#E94141",
    fontSize: 27,
    lineHeight: 30,
    fontFamily: "Ubuntu-Regular",
    fontWeight: 700,
    marginTop: 50,
    marginLeft: 15,
  },
  items:{
    width: "45%",
    height: 200,
    backgroundColor :'#F7BA8326',
    justifyContent :'center',
    alignItems:'center',
    margin:10,
    borderRadius:10
  },
  
});

export default Products;
