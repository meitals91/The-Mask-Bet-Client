import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Button,
    Alert
} from 'react-native';
import styles from "./styles"
import { Ionicons } from '@expo/vector-icons';
import {COLORS,FONTS,SIZES} from "../../constants/index"
import axios from 'axios';
import Button1 from '../../components/Buttons/Button1';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import BackButton from '../../components/Buttons/BackButton';
import Btn from '../../components/Btn';

const LoginHome = ({navigation}) =>{
  return (
        <Background>
        <BackButton goBack={navigation.goBack}/>
        <Logo />
        {/* <Button1 text="Login" backgroundColor={COLORS.primary}  width={0.8}  nextPage={ navigation.navigate('Signin')}
/>
        <Button1 text="Signup" backgroundColor={COLORS.white2} textColor={COLORS.primary}  width={0.8}  nextPage={ navigation.navigate('Signup')}
/> */}
{/* <Button1 text="SSS" nextPage={navigation.navigate('Home')}/> */}
      </Background>    )
}

export default LoginHome;