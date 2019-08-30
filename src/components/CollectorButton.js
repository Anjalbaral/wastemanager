import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const CollectorButton = ({ onPress,children }) => {
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
            backgroundColor:"#5EBE78",
             width:80,
             height:40,
             marginBottom:30,
             justifyContent:'center',
             alignItems:'center',
             borderRadius:5,
          }
}

export default CollectorButton;
