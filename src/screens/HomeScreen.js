import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Icon,Button,Container,Header,Content,Left} from 'native-base';

class HomeScreen extends Component{
    render()
    {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <Text>HomeScreen</Text>
            </View>
    );
  }
}

export default HomeScreen;