import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { COLORS, images, SIZES } from "../../../constants";
const bottomBar = () => {
  var wid = Dimensions.get("window").width;
  const [isSlected, setIsSlected] = useState(false);

  const selctItem = () => {
      if(isSlected){
        setIsSlected(false)
      }else{
        setIsSlected(true)
      }
  };


  return (
      <View  style={{
        shadowColor: COLORS.gray3,
        shadowOpacity: 0.5,
        shadowRadius: 25,
        width: Dimensions.get("window").width * 0.9,
        alignItems: "center",
        bottom: 10,
        top: 10,
        flex:1,
        flexDirection:'row'
      }}>
        <View style={{flex:1, flexDirection:'row',alignItems:'center', backgroundColor: COLORS.white4,borderRadius: 25, top:5, Button:10}}>
     <TouchableOpacity style={{flex:1,alignItems:'center'}}>
   
    <FontAwesome name="home" size={45} color={COLORS.primary} />
 
 </TouchableOpacity>
 <TouchableOpacity style={{flex:1,alignItems:'center'}}>
     <View    style={{
        width: wid * 0.3,
        height: wid * 0.10,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center'
        }}>
    <Text
      style={{
        color: COLORS.red,
        fontWeight:'bold',
        fontSize: SIZES.h1,
      }}
    >LIVE</Text>
 </View>
 </TouchableOpacity>
 <TouchableOpacity style={{flex:1,alignItems:'center'}}>

 <Ionicons name="ios-people-sharp" size={45} color={COLORS.primary} />
 </TouchableOpacity>
 </View>
      </View>
  

  );
};

export default bottomBar;
