import React,{Component} from 'react';
import {TextInput,Text,View} from 'react-native';


const Input = ({placeholder,label,value,onChangeText,secureTextEntry,onSubmitEditing})=> {
    const {labelStyles,viewStyle,inputStyle} = styles;
    return(
       <View style={styles.viewStyle}>
         {/* <Text style={labelStyles}>{label}</Text> */}
         <TextInput onSubmitEditing={onSubmitEditing} secureTextEntry={secureTextEntry} placeholder={placeholder} autoCorrect={false} style={inputStyle} value={value} onChangeText={onChangeText} />
       </View>
   );
}

const styles = {
   
    inputStyle:
    {
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        borderBottomWidth:2,
        borderColor:'#8e8e8e',
    },
    // labelStyles:{
    //     justifyContent:'space-around',
    //     fontSize:20,
    //     paddingLeft:5,
    //     flex:0.5
    // },
    viewStyle:{
        width:400,
        height:100,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
    }
}

export default Input;