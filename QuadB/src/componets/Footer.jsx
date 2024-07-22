import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Footer = () => {
    const navigation = useNavigation()
  return (
    <View >
      <View className="  bg-gray-900  border-t-2  border-zinc-300 flex flex-row p-3 justify-around shadow-2xl">
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
              <Image className=" h-8 w-8" source={require("../utils/9427671.png")}/>
   
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Search")}  className=" ">
              <Image className=" h-8 rotate-90 w-8" source={require("../utils/search-1024.webp")}/>
     
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Footer