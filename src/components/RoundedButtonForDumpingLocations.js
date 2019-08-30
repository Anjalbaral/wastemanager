import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

const RoundedButtonForDumpingLocations = ({onPress}) =>{
    return(
        <View style={{marginTop:7,position:'absolute',zIndex:1,alignItems:'center',backgroundColor:'white',borderRadius:30}}>
          <TouchableOpacity onPress={onPress} onPress={onPress}>
             <Image style={{width:50,height:50}} source={require('../images/dumpingloc.png')} />
          </TouchableOpacity>
         </View> 
    );
}

export default RoundedButtonForDumpingLocations;