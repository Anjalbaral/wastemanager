import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,ImageBackground} from 'react-native';

class Collector extends Component{

    onPressBack=()=>{
        this.props.navigation.navigate('MainForm')
    }

    render(){
      const {state} = this.props.navigation;
      let address = state.params.collectingLocation
      // const { state } = this.props.navigation;
      // let dumpinglocationsid = state.params.dumpinglocationid
      // let dumpinglocation = state.params.dumpinglocation
  return(
    <ImageBackground style={styles.backStyle} source={require('../images/final.png')}>
         <View style={{flexDirection:'row',flex:0.2,paddingLeft:20,paddingTop:20}}>
         <TouchableOpacity onPress={()=>{this.onPressBack()}}>
            <Image style={{width:25,height:25}} source={require('../images/left-arrow.png')} />
         </TouchableOpacity>
         <View style={{justifyContent:'center',alignItems:'center',paddingLeft:30,borderWidth:1,borderColor:'white',marginLeft:10,width:330,height:35}}>
             <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>
              {address}
              </Text>
         </View>
         </View>
         <View style={styles.viewStyle}>
           <Text style={{color:'white'}}>
           Welcome Collector
           </Text>
         </View>
      </ImageBackground>
  );}
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
})

export default Collector;