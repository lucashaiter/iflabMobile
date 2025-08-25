/*import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";*/

import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";


export default function App(){
  return(
    <NavigationContainer style={{ flex: 1 }}> 
      <Routes />
    </NavigationContainer>
  )
}
