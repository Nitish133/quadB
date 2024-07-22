import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
const Splash = () => {
  const navigation = useNavigation()
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("Home")
    }, 5000);
  })
  return (
    <View className=" flex-1 flex justify-center items-center bg-black">

      <Animatable.Image duration={2000} animation="fadeInUpBig" className=" h-96 w-screen " source={require("../utils/avengers-neon-black-panther-desktop-s4bjpzaj7yflded1.webp")}/>
      <Animatable.Text delay={2000} animation="zoomIn"  className="  text-red-500 font-medium text-3xl">Welcome to QuadB Movies</Animatable.Text>

    </View>
  )
}

export default Splash