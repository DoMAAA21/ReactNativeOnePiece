import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton =(props) => {
    
    const {color,content,textColor,onPress} = props;
    return(
        <View style ={styles.container}>
        <Pressable    style={[styles.button,{backgroundColor : color}]} onPress={()=>onPress()}>
        <Text style={[styles.text,{color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )  
}

export default StyledButton;
