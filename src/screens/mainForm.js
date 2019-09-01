import React,{Component} from 'react';
import {Text,View,ImageBackground,TouchableOpacity,Image} from 'react-native';
import NewButton from '../components/NewButton';
import firebase from 'firebase';
import CollectorInput from '../components/CollectorInput';



class mainForm extends Component{

    state={
        collectorDialog:'notVisible',
        successmsg:''
    }
    onPressBack=()=>{
        this.props.navigation.navigate('Map')
        }
    
   

    displayDialog=(dumpinglocationsid2,dumpinglocation2)=>
    {
        if(this.state.collectorDialog==="visible")
        
       { return(
            <CollectorInput dumpingID={dumpinglocationsid2} dumpingLOC={dumpinglocation2} navigationProp={this.props.navigation} />
          );
       }
        else{
            return(
                <Text> </Text>
            );
        }
    }    

    displayCollectorIdDialog=()=>{
          this.setState({
              collectorDialog:"visible"
          })
    }    
    
   render(){
       
    const { state } = this.props.navigation;
    let dumpinglocationsid = state.params.dumpinglocationid
    let dumpinglocation = state.params.dumpinglocation
   
    return(
        <ImageBackground source={require('../images/final.png')} style={{flex:1,flexDirection:'column'}}>
        <View style={{flexDirection:'row',flex:0.2,paddingTop:20,paddingLeft:20}}>
        <TouchableOpacity onPress={()=>{this.onPressBack()}}>
            <Image style={{width:25,height:25}} source={require('../images/left-arrow.png')} />
         </TouchableOpacity>
         <View style={{justifyContent:'center',alignItems:'center',paddingLeft:30,borderWidth:1,borderColor:'white',marginLeft:10,width:330,height:35}}>
             <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>
              {dumpinglocation}
              </Text>
         </View>
        </View>
        <View style={{flex:0.8,alignItems:'center',paddingTop:50}}>
            <View style={{borderBottomWidth:2,borderColor:'white',marginBottom:10}}><Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>USE AS</Text></View>
            <View><NewButton onPress={()=>{this.props.navigation.navigate('customerScreen',{dumpinglocation:dumpinglocation,dumpinglocationsid:dumpinglocationsid})}}>As User</NewButton></View>
            <View><NewButton  onPress={()=>{this.displayCollectorIdDialog()}}>As Collector</NewButton></View>
            <View style={{height:50,width:'50%'}}>{this.displayDialog(dumpinglocationsid,dumpinglocation)}</View>
        </View> 
         
        </ImageBackground>
    );
  }
}

export default mainForm;