import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class DataSubmissionScreen extends Component{
    render()
    {
        return(
            <View style={styles.viewStyle}>
                <Text>
                    DataSubmissionScreen
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

export default DataSubmissionScreen;