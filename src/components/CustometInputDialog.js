import React,{Component} from 'react';
import {TextInput,Text,View} from 'react-native';


const CustomerInputDialog = ({placeholder,label,value,onChangeText,secureTextEntry,onSubmitEditing})=> {
    const {labelStyles,viewStyle,inputStyle} = styles;
    return(
       <View>
         <TextInput keyboardType={'numeric'} onSubmitEditing={onSubmitEditing} secureTextEntry={secureTextEntry} placeholder={placeholder} autoCorrect={false} style={inputStyle} value={value} onChangeText={onChangeText} />
       </View>
   );
}

const styles = {
   
    inputStyle:
    {
       
        width:200,
        color:'white',
        paddingRight:5,
        fontSize:18,
        lineHeight:18,
        backgroundColor:'rgba(221,221,221,0.2)',
       
    },
}

export default CustomerInputDialog;