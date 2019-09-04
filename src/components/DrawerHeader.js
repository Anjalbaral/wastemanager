import React from 'react';
import {Image,Text,View} from 'react-native';
import {DrawerItems} from 'react-navigation';
import NewButton from '../components/NewButton';
//import {Icon,Component,Content,Button} from 'native-base';
import firebase from 'firebase';

logout=(props)=>{
   firebase.auth().signOut()
   props.navigation.navigate('AuthScreens')
}

const DrawerHeader = (props) =>
{
   return(
    <View>
       <View style={{paddingTop:25,paddingBottom:25,alignItems:'center',justifyContent:'center'}}>
         <Image style={{width:150,height:150,borderRadius:75}} source={require('../images/saveEarth2.png')} ></Image>
         <Text style={{paddingTop:15,fontSize:18}}>{firebase.auth().currentUser.email}</Text>
       </View>
       <View style={{alignItems:'center',width:'100%'}}><NewButton onPress={()=>logout(props)}>Logout</NewButton></View>
       <DrawerItems {...props} />
    </View>
   ); 
}

export default DrawerHeader;