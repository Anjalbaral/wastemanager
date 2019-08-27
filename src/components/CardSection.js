import React,{Component} from 'react';
import {Text,View} from 'react-native';

const CardSection = (props) =>{
    return (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle:{
        borderBottomWidth:1,
        backgroundColor:'#BEE4E2',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ddd',
        borderRadius:10.7,
        
    }
};

export  default CardSection;