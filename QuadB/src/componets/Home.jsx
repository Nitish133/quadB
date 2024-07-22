import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import Footer from "./Footer";
import axios, { all } from "axios";
const Home = ({ navigation }) => {
  const [alldata, setalldata] = useState();

  const apihandle = async () => {
    const data = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    setalldata(data.data);
  };
  useEffect(() => {
    apihandle();
  }, []);

  return (
    <View className=" bg-black flex-1">
      <Text className=" text-3xl text-red-700 mt-5 font-bold">QuadB Movies</Text>
      <ScrollView>
        <View className=" flex flex-row flex-wrap justify-center">
          {alldata != null &&
            alldata.map((data) => (
              <View key={data.show.id}>
                {data.show.image != null && (
                  <>
                    <View className="m-1 p-2 rounded-2xl border  mt-5 border-white">
                      <TouchableOpacity onPress={()=>navigation.navigate("Details",{data:data})}>
                        <Image
                          source={{ uri: data.show.image.medium }}
                          className=" h-56 w-36  rounded-2xl"
                        />
                      </TouchableOpacity>

                      <Text className=" mt-2 text-xl  text-white font-semibold">
                        {data.show.name}
                      </Text>

                      <ScrollView className=" w-36 h-20">
                        <Text className="  mt-1 text-white text-xs   font-semibold">
                          {" "}
                          {data.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}
                        </Text>
                      </ScrollView>

                      <Text className=" mt-1 text-white font-semibold">
                        {data.show.rating.average
                          ? data.show.rating.average
                          : "No rating"}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            ))}
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Home;
