import React from 'react';
import {Image,Text,View} from 'react-native';
import {DrawerItems} from 'react-navigation';
//import {Icon,Component,Content,Button} from 'native-base';
import firebase from 'firebase';
const DrawerHeader = (props) =>
{
   return(
    <View>
       <View style={{paddingTop:25,paddingBottom:25,alignItems:'center',justifyContent:'center'}}>
         <Image style={{width:150,height:150,borderRadius:75}} source={require('../images/saveEarth.png')} ></Image>
         <Text>{firebase.auth().currentUser.email}</Text>
       </View>
       {/* <Button onPress={{}}></Button> */}
       <DrawerItems {...props} />
    </View>
   ); 
}

export default DrawerHeader;