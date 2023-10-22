import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const detail = ({route}) => {
  const {product} = route.params;
  useFonts({"Voltaire-Regular":require("../assets/fonts/Voltaire-Regular.ttf")})
  console.log(product);
  return (
    <View>
      <Text
              style={{
                color: "#00000099",
                fontFamily: "Voltaire-Regular",
                fontSize: 20,
                fontWeight: 400,
                textAlign:'center'
              }}
            >
              {product.description}
            </Text>
    </View>
  )
}

export default detail