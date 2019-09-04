import React,{Component} from 'react';
import {Text,View} from 'react-native';
import firebase from 'firebase';

class LogOutScreen extends Component{

    logout=()=>{
        firebase.auth().signOut()
    }

    render()
    {
        return(
            <View>
          {this.logout()}
          { this.props.navigation.navigate('AuthScreens')}
          </View>
        );
    }
}

export default LogOutScreen;