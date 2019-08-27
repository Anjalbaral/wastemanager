import React,{Component} from 'react';
import {Text,View,Image} from 'react-native';

const SwipeView = (props) =>{
    return(
        <View style={styles.viewStyle}>
            <Text style={{color:'white',fontSize:20}}>{props.info}</Text>
            <Image source={require('../images/swipe.png')} style={{width:20,height:30,marginLeft:10}} />
        </View>
    );
}

const styles={
  viewStyle:{
      flexDirection:'row',
      width:250,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      backgroundColor:'#5EBE78'
  }
}
//<Text style={{fontSize:20,color:'white',borderTopWidth:3,paddingTop:10,borderColor:'white'}}>'Keep It Clean'</Text>
//<Text style={{fontSize:25,color:'white',borderBottomWidth:3,paddingBottom:10,borderColor:'white'}}>Welcome To</Text>
export default SwipeView