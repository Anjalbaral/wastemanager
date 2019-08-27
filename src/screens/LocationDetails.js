import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class LocationDetails extends Component{
    render()
    {
        return(
            <View style={styles.viewStyle}>
                <Text>
                    LocationDetailsScreen
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

export default LocationDetails;