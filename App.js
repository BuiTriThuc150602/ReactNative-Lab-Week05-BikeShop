import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/home";
import Products from "./src/products";
import Detail from "./src/detail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown : false
        }}
        />
        <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerShown : false
        }}
        />
        <Stack.Screen
        name="Detail"
        component={Detail}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
