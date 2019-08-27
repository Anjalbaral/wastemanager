import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';

class NavigatorDrawerStructure extends Component{

    displayDrawer=()=>
    {
      this.props.navigationProps.openDrawer();
    };

    render(){
    return(
        <View style={{flexDirection:'row',marginLeft:10,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor:'white',borderRadius:30,height:50,width:50,justifyContent:'center',alignItems:'center'}} onPress={this.displayDrawer}>
               <Image source={require('../images/options2.png')} style={{height:50,width:50,marginLeft:5}} />
            </TouchableOpacity>
        </View>
    );
  }
}

export default NavigatorDrawerStructure;