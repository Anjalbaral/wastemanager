import React,{Components} from 'react';
import {Text,View,Button} from 'react-native';


const FetchLocation =props=>{
    return(
        <View>
           <Button title="Get Your Location" onPress={props.onBtnPress}></Button>
        </View>
    );
}

export default FetchLocation;