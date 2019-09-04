import React,{Component} from 'react';
import {Text,View} from 'react-native';

const CollectorCardSection = (props) =>{
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
        padding:15
        
    }
};

export  default CollectorCardSection;