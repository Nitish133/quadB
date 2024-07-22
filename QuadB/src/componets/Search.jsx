import { View, Text, ScrollView,TouchableOpacity,Image, TextInput } from 'react-native'
import React from 'react'
import Footer from './Footer'
import axios, { all } from 'axios'
import { useState,useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
const Search = ({navigation}) => {
    const [alldata,setalldata] = useState(null)
    console.log(alldata)
    const [text,settext] = useState()
    const [ind,showind] = useState(false)
    console.log(text)

    const handleapi = async ()=>{
showind(true)
   const data = await axios.get(`https://api.tvmaze.com/search/shows?q=${text}`)
   console.log(data.data)
   setalldata(data.data)
   showind(false)
    }


    
    const handlechange = (data)=>{
       
        settext(data)
    }

    useEffect(()=>{
        handleapi()
    },[text])
  return (
    <View className=" flex-1 bg-black">
        
        <ScrollView >
<TextInput onChangeText={handlechange}   placeholder='Search movies'
                    placeholderTextColor='#f0f0f0' className="  text-white border border-white mx-5 mt-10 rounded-full pl-5 py-3 text-lg font-bold" />
<ScrollView>
        <View className=" flex flex-row flex-wrap justify-center">
        
            {
                ind && <ActivityIndicator size="big" color="white"/>
            }
          {alldata != null &&
          (  alldata.map((data) => (
              <View>
                {data.show.image != null && (
                  <>
                    <View className="m-1 p-2 rounded-2xl border  mt-5 border-white">
                      <TouchableOpacity onPress={()=>navigation.navigate("Details",{data:data})}>
                        <Image
                          source={{ uri: data.show.image.medium }}
                          className=" h-56 w-36  rounded-2xl"
                        />
                      </TouchableOpacity>

                      <Text className=" mt-2 text-xl w-32  text-white font-semibold">
                        {data.show.name}
                      </Text>

                      <ScrollView className=" w-36 h-20">
                        {data.show.summary &&
                         <Text className="  mt-1 text-white text-xs   font-semibold">
                          {" "}
                          {data.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}
                        </Text>    
                        }
                       
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
            )))}
        </View>
      </ScrollView>
        </ScrollView>
        <Footer/>
    </View>
  )
}

export default Search