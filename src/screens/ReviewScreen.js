import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet} from 'react-native';

class ReviewScreen extends Component{
    render()
    {
        return(
            // <ImageBackground source={require('../images/AuthBack.png')} style={styles.viewStyle}>
            <View style={styles.headerTextStyle}> 
                <Text onPress={()=>this.props.navigation.navigate('LocDetails')} style={{color:'#BEE4E2',fontSize:30,fontWeight:'bold'}}>
                    Login!
                </Text>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
   viewStyle:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
   }
});

export default ReviewScreen;