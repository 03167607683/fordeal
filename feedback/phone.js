import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,useState ,Image, Touchable, TouchableOpacity, ScrollView, TextInput, TouchableHighlight} from 'react-native';

export default function App() {
  return (
   <ScrollView style={styles.container}>
    <View style={styles.container1}>
      <TouchableOpacity style={styles.tch1}>
        <Image style={{width:"60%",height:15}}source={require('./assets/fd.jpg')} ></Image>
      </TouchableOpacity>
    <Text style={styles.txt1}>Feedback</Text>
    </View>
    <View style={styles.container2}>
      <Text style={{marginLeft:20,color:"red"}}>* <Text style={{color:"black"}}>Feedback Type</Text>
      </Text>
      <View style={styles.container3}>
        <TouchableOpacity style={styles.tch2}>
          <Text style={{color:"rgb(153,153,153)"}}>App Issues</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tch3}>
          <Text style={{color:"rgb(153,153,153)"}}>Suggestion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tch4}>
          <Text style={{color:"rgb(153,153,153)"}}>Others</Text>
        </TouchableOpacity>

      </View>
    </View>
    <View style={styles.container4}>
      <Text style={{marginLeft:10,fontWeight:"bold"}}>* <Text>Describes your problems or opinions</Text>
      </Text>
      <TextInput style={styles.txi1} placeholder={"Please describes your problems or openions in detail."}></TextInput>
<TouchableOpacity style={styles.tch5}>
  <Image style={{width:"100%",height:90,}} source={require('./assets/cam.jpg')}></Image>
</TouchableOpacity>
    </View>
    <View style={styles.container5}>
      <View style={styles.v1}>
        <Text style={{marginLeft:10,color:"red"}}>* <Text style={{color:"black"}}>Contact information</Text>
        </Text>
        <TouchableOpacity style={{width:"15%",height:30,marginLeft:96,borderRightWidth:1}}>
          <Text style={{alignSelf:"center"}}>Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"15%",height:30,alignItems:"center",marginRight:10}}>
          <Text>Email</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.tch6}>
        <Text style={{marginLeft:10}}>Region</Text>
        <Image style={{width:"5%",height:10}} source={require('./assets/new.jpg')}></Image>
      </TouchableOpacity>
      <TextInput style={styles.txi2} placeholder={"Phone Number"}></TextInput>
<TouchableOpacity style={styles.tch7}>
  <Text style={{fontSize:16}}>Submit</Text>
</TouchableOpacity>

<View style={styles.container6}>
  <Text>Other questions? </Text>
  <TouchableOpacity style={{width:"50%",height:30,justifyContent:"center"}}>
    <Text style={{color:"blue"}}>Customer Service</Text>
  </TouchableOpacity>
</View>
    </View>
   </ScrollView>
    )}

    const styles = StyleSheet.create({
     container:{

       width:"100%",
      //  height:790,
      //  alignItems:"center",
  // backgroundColor:"rgb(245,245,245)",

        // backgroundColor:"gray",
     },
container1:{
  width:"100%",height:70,flexDirection:"row",borderBottomWidth:0.4
},
container2:{
  width:"100%",height:100,
},
container3:{width:"100%",height:50,flexDirection:"row",alignItems:"center",borderBottomWidth:0.5,marginTop:25},
container4:{
  width:"100%",height:280,borderBottomWidth:0.5
},
container5:{
  width:"100%",height:290,justifyContent:"space-around"
},
container6:{
  width:"70%",height:40,alignSelf:"center",flexDirection:"row",alignItems:"center",
},

tch1:{width:"8%",marginTop:25,marginLeft:10,justifyContent:"center",height:30,},
txt1:{alignSelf:"center",marginLeft:95,fontSize:20,fontWeight:"bold",marginTop:18},
tch2:{width:"25%",height:30,marginLeft:10,borderWidth:0.5,borderRadius:6,alignItems:"center",justifyContent:"center"},
tch3:{width:"25%",height:30,marginLeft:7,borderWidth:0.5,alignItems:"center",justifyContent:"center",borderRadius:6},
tch4:{width:"20%",height:30,marginLeft:7,borderWidth:0.5,alignItems:"center",justifyContent:"center",borderRadius:6},
tch5:{width:"25%",height:100,marginLeft:10,marginTop:40,alignItems:"center",justifyContent:"center"},
tch6:{width:"95%",height:40,backgroundColor:"rgb(245,245,245)",alignItems:"center",alignSelf:"center",justifyContent:"space-between",flexDirection:"row"},
tch7:{width:"95%",height:45,alignItems:"center",borderRadius:30,justifyContent:"center",alignSelf:"center",backgroundColor:"rgb(255,241,180)"},
txi:{width:"95%",height:90,backgroundColor:"rgb(245,245,245)",alignSelf:"center",fontSize:13.5,paddingLeft:3,borderRadius:5,marginTop:10},
txi2:{width:"95%",height:40,backgroundColor:"rgb(245,245,245)",paddingLeft:60,alignSelf:"center"},
v1:{width:"100%",height:50,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}


  })