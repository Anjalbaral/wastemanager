import React,{Component} from 'react';
import {Text,View,ImageBackground,Image} from 'react-native';

class SettingScreen extends Component{
    render(){

    return(
      <ImageBackground source={require('../images/final.png')} style={{flexDirection:'column',flex:1,alignItems:'center',justifyContent:'center',padding:20,marginTop:-60}}>
        <Image source={require('../images/undercunstruction.png')} style={{width:'100%',height:400}} />
      </ImageBackground>
    );
  }
}

export default SettingScreen;