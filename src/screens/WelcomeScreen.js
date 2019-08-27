import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Slides from '../components/Slides';
import { PermissionsAndroid } from 'react-native';

const DATA_SLIDES=[
    {text:"welcome to PM",color:'#03A9F4'},
    {text:"Follow these guidelines",color:'#009688'},
    {text:"are you ready to logIn" ,color:'#03a9f4'}
]

class WelcomeScreen extends Component{

    requestLocationPermission() 
    {
        const granted =   PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Example App',
            message: 'Example App access to your location ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
    
          }
        )
      }

    onComplete=()=>{
        this.requestLocationPermission()
        this.props.navigation.navigate('Login')
       
    }


    render()
    {
        return(
           <Slides data={DATA_SLIDES} onComplete={()=>this.onComplete} />
        );
    }
}

const styles = StyleSheet.create({
   viewStyle:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
   }
});

export default WelcomeScreen;