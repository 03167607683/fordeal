import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,useState ,Image, Touchable, TouchableOpacity, ScrollView, TextInput, TouchableHighlight} from 'react-native';

export default function App() {
  return (
   <View style={styles.container}>
     <Image style={styles.img1} source={require('./assets/shop.jpg')}></Image>
 <Text style={styles.txt1}>You Don't Follow Any Shop</Text>
 <View style={styles.v1}>
   <Image style={styles.img2} source={require('./assets/SH.jpg')}></Image>
   <Text style={styles.txt2}>You might like</Text>
     

 </View>
   </View>
    )}

    const styles = StyleSheet.create({
     container:{
       width:"100%",
       height:720,
       alignItems:"center",
  backgroundColor:"rgb(245,245,245)",

        // backgroundColor:"gray",
     },

img1:{width:"45%",height:"25%",marginTop:140},
img2:{width:"18%",height:"58%",},
txt1:{marginTop:30,color:"rgb(162,162,162)"},
txt2:{color:"rgb(162,162,162)"},
v1:{width:"35%",height:"5%",marginTop:80,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}

  })