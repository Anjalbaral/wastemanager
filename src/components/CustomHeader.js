import React,{Component} from 'react';
import {Text,View} from 'react-native';

const CustomHeader = (props) => {
    return(
            <Text style={{backgroundColor:'red'}}>{props.header}</Text>
    );
}
const styles={
    customHeaderStyle:{
        backgroundColor:"red"
    }
}
export default CustomHeader;