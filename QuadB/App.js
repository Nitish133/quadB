import { StatusBar } from "expo-status-bar";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/componets/Home";
import Splash from "./src/componets/Splash";
import Details from "./src/componets/Details";
import Search from "./src/componets/Search";
const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    
       <NavigationContainer>
        <StatusBar hidden={true}/>
      <Stack.Navigator 
 screenOptions={ {headerShown:false}}
 >
  
   <Stack.Screen name="Splash" component={Splash} />
      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
         <Stack.Screen name="Search" component={Search} />
      
      
        </Stack.Navigator>
     
    </NavigationContainer>
    
   
  );
}
