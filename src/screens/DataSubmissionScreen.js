import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class DataSubmissionScreen extends Component{
    onPressBack=()=>
    {
      this.props.navigation.navigate('Map')
    }

    render()
    {
        const {dumpingLocID} = this.props.
        return(
            <ImageBackground style={styles.backStyle} source={require('../images/AuthBack.png')}>
                <View style={{flex:0.1,paddingLeft:20,justifyContent:'center',width:'100%',height:70}}>
                   <TouchableOpacity onPress={()=>{this.onPressBack()}}>
                    <Image style={{width:25,height:25}} source={require('../images/left-arrow.png')} />
                   </TouchableOpacity>
                </View>
              <View style={styles.viewStyle}>
               <Text>
                   
               </Text>
              </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
   backStyle:{
    width:'100%',
    height:'100%',
    flexDirection:'column',
    flex:1
   },
   viewStyle:{
     flex:0.9,  
    justifyContent:'center',
    alignItems:'center'
   }
});

export default DataSubmissionScreen;