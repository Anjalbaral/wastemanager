import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

const RoundedButtonForDumpingLocations = ({onPress}) =>{
    return(
        <View style={{position:'absolute',zIndex:1,alignItems:'center',}}>
          <TouchableOpacity onPress={onPress} style={{marginTop:10,marginRight:10}} onPress={onPress}>
             <Image style={{width:60,height:60}} source={require('../images/dumping.png')} />
          </TouchableOpacity>
         </View> 
    );
}

export default RoundedButtonForDumpingLocations;