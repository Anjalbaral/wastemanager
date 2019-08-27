import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';

const LoaderBtn = ({size}) =>
{
    const {ViewStyle} = styles;
    return(
    <View style={ViewStyle}>
          <ActivityIndicator color="white" size={size} />
    </View>
      );
}

const styles = {
    ViewStyle:{
        backgroundColor:"#5EBE78",
        flex:1,
        width:250,
        height:40,
        marginBottom:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    }
}
export default LoaderBtn;