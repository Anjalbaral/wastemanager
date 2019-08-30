import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

const RoundedButtonForUserLocation = ({onPress}) =>{
    return(
        <View style={{marginTop:7,position:'absolute',zIndex:1,alignItems:'center',backgroundColor:'white',borderRadius:30}}>
          <TouchableOpacity onPress={onPress} onPress={onPress}>
             <Image style={{width:55,height:55}} source={require('../images/currentlocationicon.png')} />
          </TouchableOpacity>
         </View> 
    );
}

export default RoundedButtonForUserLocation;