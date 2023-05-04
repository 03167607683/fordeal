import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image, Touchable, TouchableOpacity, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:"90%",height:"5%",marginTop:90,justifyContent:"center",borderBottomWidth:1,borderBottomColor:"white"}}>
  <Text style={{fontSize:20,color:"white",paddingLeft:10}}>Account</Text>
    
     </View>
<TouchableOpacity style={{width:"90%",height:"10%",borderBottomWidth:1,borderBottomColor:"white",justifyContent:"center"}}>
  <Text style={{fontSize:17,color:"white",paddingLeft:10}}>Logout from app</Text>
  <Text style={{color:"white",paddingLeft:10}}>Dissconect your user account from this app</Text>
</TouchableOpacity>

<View style={{width:"90%",height:"8%",justifyContent:"center",borderBottomWidth:1,borderBottomColor:"white"}}>
  <Text style={{fontSize:20,marginTop:10,color:"white",fontWeight:"bold",paddingLeft:10}}>Afar Music</Text>
</View>

<View style={{width:"90%",height:"9%",borderBottomWidth:1,borderBottomColor:"white"}}>
<TouchableOpacity style={{width:"70%",height:"100%",justifyContent:"center"}}>
  <Text style={{fontSize:16,color:"white",paddingLeft:10}}>Version</Text>
  <Text style={{color:"white",paddingLeft:10}}>Afar Music AFAR96</Text>
</TouchableOpacity>
</View>


<TouchableOpacity style={{width:"90%",height:"10%",justifyContent:"center",borderBottomWidth:1,borderBottomColor:"white"}}>
  <Text style={{fontSize:17,color:"white",paddingLeft:10}}>Share this app</Text>
  <Text style={{color:"white",paddingLeft:10}}>Let your friends and family know about this app.</Text>
</TouchableOpacity>

<TouchableOpacity style={{width:"90%",height:"10%",justifyContent:"center",borderBottomWidth:1,borderBottomColor:"white"}}>
  <Text style={{fontSize:17,color:"white",paddingLeft:10}}>Rate this app</Text>
  <Text style={{color:"white",paddingLeft:10}}>Visit the playstore to leave a review about this app.</Text>
</TouchableOpacity>

<TouchableOpacity style={{width:"90%",height:"12%",justifyContent:"center",borderBottomWidth:1,borderBottomColor:"white"}}>
  <Text style={{fontSize:17,color:"white",paddingLeft:10}}>Feedback</Text>
  <Text style={{color:"white",paddingLeft:10}}> Please send us your feedbacks and</Text>
  <Text style={{color:"white",paddingLeft:10}}>recommendations for this app</Text>


</TouchableOpacity>
<TouchableOpacity style={{width:"90%",height:"11%",borderBottomWidth:1,borderBottomColor:"white",justifyContent:"center"}}>
  <Text style={{fontSize:17,color:"white",paddingLeft:10}}>Terms and Contditions</Text>
  <Text style={{color:"white",paddingLeft:10}}>Read end user license agreement for using this app</Text>
</TouchableOpacity>
  
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    // justifyContent: 'center',
  },

});
