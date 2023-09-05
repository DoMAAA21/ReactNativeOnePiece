import React from 'react';
import { View, Text,ImageBackground, Alert } from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';

const CarItem = (props) => {

    const {name, tagline, taglineCTA,image} = props.car;
    return (
        <View style={styles.appContainer}>
        <ImageBackground source={image} style ={styles.image}/>

         <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}
          
          </Text>
         </View>
         <View style={styles.buttonContainer}>
         <StyledButton color="#41658a" textColor= "white" content={"View"} onPress={() =>Alert.alert('Naol Pinpindot')}/>
         <StyledButton color="#444b6e" textColor= "white" content={"More"} onPress={() =>Alert.alert('I love you too')}/>
         </View>
      </View>
    );
}

export default CarItem;