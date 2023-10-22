import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/home";
import Products from "./src/products";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown : false
        }}
        /> */}
        <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerShown : false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
