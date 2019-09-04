import React from 'react';
import {Text,View,AppRegistry} from 'react-native';

const HistoryUsrCard =(props)=>
{
  return(
      <View style={styles.containerStyle}>
      {props.children}
      </View>
  );
};

const styles ={
    containerStyle:{
        width:'100%',
        height:'100%',
        backgroundColor:'#BEE4E2',
        borderWidth:1,
        borderRadius:10.7,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:10,height:10},
        shadowOpacity:1,
        shadowRadius:5,
        elevation:5,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:20,
    }
}

export default HistoryUsrCard;
