import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View,Image, ImageBackground } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';
export default function App()
{

  return(

    <View style={styles.container}>
      <Header/>
     <CarsList/>
      <StatusBar style='auto'/>
    </View>
  );

}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor:'#268FF8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
 
})
