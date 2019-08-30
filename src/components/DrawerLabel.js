import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

const DrawerLabel =(props)=>{
    const {img} = props 
    return(
        <View style={{flex:1,flexDirection:'row',width:'100%',height:'100%',paddingLeft:20,paddingTop:15,paddingBottom:15}}>
          <View>
            <Image source={img} style={{width:23,height:23}} />
          </View>  
          <View style={{marginLeft:50}} >
            <Text style={{fontSize:16}}>{props.text}</Text>
            </View>  
        </View>
    );
}

export default DrawerLabel;