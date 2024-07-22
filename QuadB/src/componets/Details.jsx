import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Footer from "./Footer";

const Details = ({ route }) => {
  const data = route.params.data;
  return (
    <View className=" flex-1 bg-black">
      <ScrollView>
        <Image
          source={{ uri: data.show.image.original }}
          className=" h-96 w-screen  rounded-2xl"
        />
        <Text className=" mt-5 text-4xl  text-white font-semibold">
          {data.show.name}
        </Text>
        <Text className=" mt-1  text-white ">
        {data.show.language}
        </Text>
        <View className=" flex mt-2 flex-row">
           {
          data.show.genres.map((data)=><Text className=" text-white">{data}  </Text>)
        }
        </View>
       
        <Text className=" mt-1 text-xl  text-white ">
          Rating - {data.show.rating.average}
        </Text>


        <Text className="  mt-1 text-white text-xs  ">
          {data.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}
        </Text>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default Details;
