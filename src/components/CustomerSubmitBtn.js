import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const CustomerSubmitBtn = ({ onPress,children }) => {
    const {buttonStyles,textStyle}=styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
           <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
} 


const styles ={

    textStyle:{
        alignSelf:'center',
        color:'white',
        fontSize:20,
        fontWeight:'600'
              },
    buttonStyles:{
             width:230,
             height:40,
             justifyContent:'center',
             alignItems:'center',
             borderRadius:10,
             borderWidth:2,
             borderColor:"white"
          }
}

export default CustomerSubmitBtn;
