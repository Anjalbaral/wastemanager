import React,{Component} from 'react';
import {Text,View} from 'react-native';

const CardElement = (props) =>{
    return(
        <View style={{borderWidth:4}}>
            <Card>
              <Text>this is good</Text>  
            </Card>
        </View>
    );
}

const styles = {
//    cardStyle:{ 
//     width:400,
//     height:400,
//    }
}

export default CardElement;