import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { images } from '../constants'
export default function Logo() {
  return <Image source={images.Logoo} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
      marginTop:10,
    width: Dimensions.get('window').width*0.2,
    height: Dimensions.get('window').width*0.2,
  },
})
