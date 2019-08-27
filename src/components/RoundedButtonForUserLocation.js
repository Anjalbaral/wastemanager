import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

const RoundedButtonForUserLocation = ({onPress}) =>{
    return(
        <View style={{position:'absolute',zIndex:1,alignItems:'flex-end'}}>
          <TouchableOpacity onPress={onPress} style={{marginTop:10,marginRight:10}} onPress={onPress}>
             <Image style={{width:50,height:50}} source={require('../images/findMe.png')} />
          </TouchableOpacity>
         </View> 
    );
}

export default RoundedButtonForUserLocation;