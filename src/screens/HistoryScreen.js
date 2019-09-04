import React,{Component} from 'react';
import {Text,View,Card,ImageBackground} from 'react-native';
import firebase from 'firebase';
import NewButton from '../components/NewButton';
import HistoryUsrCard from '../components/HistoryUsrCard';



class HistoryScreen extends Component{
  
state={
  boranum:'',
  date:'',
  location:'',
  type:'',
}
  
  getUserHistory=()=>{
    let userid = firebase.auth().currentUser.uid
     firebase.database().ref('recentuserhistory/'+userid).on('value',(snapshot)=>{
       this.setState({
          boranum:snapshot.val().bora,
          date:snapshot.val().date,
          location:snapshot.val().location,
          type:snapshot.val().type
       })
     })
      }
    
      renderDate=()=>{
        if(this.state.date)
        {
          return(
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Date and Time: </Text><Text style={{fontSize:20}}>{this.state.date}</Text>
            </View>
          );
        }
        else{
          return(
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>Date and Time: </Text><Text style={{fontSize:20}}>00/00/00 00:00:00</Text>
            </View>
          );
        }
      }

      renderLocationName=()=>{
        if(this.state.location)
        {
          return(
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Location: </Text><Text style={{fontSize:20}}>{this.state.location}</Text>
            </View>
          );
        }
        else{
          return(
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>Location: </Text><Text style={{fontSize:20}}> Dump Location Name </Text>
            </View>
          );
        }
      }

      renderWasteType=()=>{
        if(this.state.type)
        {
          return(
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Waste Type: </Text><Text style={{fontSize:20}}>{this.state.type}</Text>
            </View>
          );
        }
        else{
          return(
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>Waste Type: </Text><Text style={{fontSize:20}}> Waste Type </Text>
            </View>
          );
        }
      }

      renderBoraNum=()=>{
        if(this.state.boranum)
        {
          return(
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Bora Number: </Text><Text style={{fontSize:20}}>{this.state.boranum}</Text>
            </View>
          );
        }
        else{
          return(
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>Bora Number: </Text><Text style={{fontSize:20}}>Bora Number </Text>
            </View>
          );
        }
      }

  // renderThings=()=>{
  //   if(typeOf(this.state.boranum)!=='undefined')
  //   {
  //     alert('worked')
  //   }
  // }   
  
  render(){
      return(
        <ImageBackground source={require('../images/final.png')} style={{flex:1,alignItems:'center',padding:20,marginTop:-60}}>
          <NewButton onPress={()=>{this.getUserHistory()}}>refresh</NewButton>
          <View style={{width:'100%',height:'80%',width:'100%',padding:10,borderRadius:20}}>
            <HistoryUsrCard>
              <View style={{padding:20}}><Text style={{fontSize:25}}>Your Previous History</Text></View>
             <View style={{paddingTop:7,paddingBottom:7}}>{this.renderDate()}</View>
             <View style={{paddingTop:7,paddingBottom:7}}>{this.renderLocationName()}</View>
             <View style={{paddingTop:7,paddingBottom:7}}>{this.renderWasteType()}</View>
             <View style={{paddingTop:7,paddingBottom:7}}>{this.renderBoraNum()}</View>

            </HistoryUsrCard>
          </View>
        </ImageBackground>
            );
}
}

export default HistoryScreen;