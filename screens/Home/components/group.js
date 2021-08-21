import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Button,
    Dimensions
} from 'react-native';
import { images, SIZES } from '../../../constants';
import styles from '../styles';
import ButtonInside from '../../../components/Buttons/ButtonInside';
const group = (props) =>{
    let {item} = props
    return (
        <TouchableOpacity style={styles.item} >
                <Image 
                    source={images.CupFifa}
                    style={{
                        width: Dimensions.get('window').width*0.15,
                        height:Dimensions.get('window').width*0.15,
                        top:-20
                      }}
                />
                    <Text style={{fontSize: SIZES.h1 , top:-10}} >{item.name}</Text>
                    {/* <View style={styles.btn}>
                    <Text style={{fontSize: SIZES.h3,padding:5}}>Check Group</Text>
                    </View> */}
                    <ButtonInside text="Place Bet"/>
                </TouchableOpacity>
    )
}

export default group;