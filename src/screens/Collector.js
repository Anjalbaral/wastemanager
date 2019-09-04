import React,{Component} from 'react';
import {Card,Text,View,TouchableOpacity,Image,StyleSheet,ImageBackground} from 'react-native';
import CollectorCard from '../components/CollectorCard';
import CollectorCardSection from '../components/CollectorCardSection';
import CardSection from '../components/CardSection';
import NewButton from '../components/NewButton';
import firebase from 'firebase';

class Collector extends Component{
   
  state={
    organicboranum:'',
    recycleboranum:'',
    unrecycleboranum:'',
    othersboranum:''
  }

    onPressBack=()=>{
        this.props.navigation.navigate('MainForm')
    }
   
    getAccessToDatabase=(address)=>{
     //organic
      firebase.database().ref('dumpingwasestatus/'+address+'/organic').update({
        totalbora:0
      })
      //recycle
      firebase.database().ref('dumpingwasestatus/'+address+'/recycle').update({
        totalbora:0
      })
      
      //unrecycle
      firebase.database().ref('dumpingwasestatus/'+address+'/unrecycle').update({
        totalbora:0
      })

      //others
      firebase.database().ref('dumpingwasestatus/'+address+'/others').update({
        totalbora:0
      })

       }


    // setOrganicBoraNum=(orgboranum)=>{
    //   return(
    //     <Text style={{fontSize:30,color:'#808080'}}>{orgboranum}</Text>
    //   );
    // }


    getLocationData=(address)=>{

      //organic data
      firebase.database().ref('dumpingwasestatus/'+address+'/organic').on('value',(snapshot)=>{
       let organic = snapshot.val().totalbora
       this.setState({
         organicboranum:organic
       }) 
      })

      //recycledata
      firebase.database().ref('dumpingwasestatus/'+address+'/recycle').on('value',(snapshot)=>{
        let recycle = snapshot.val().totalbora
        this.setState({
          recycleboranum:recycle
        }) 
       })

       //unrecycle
       firebase.database().ref('dumpingwasestatus/'+address+'/unrecycle').on('value',(snapshot)=>{
        let unrecycle = snapshot.val().totalbora
        this.setState({
          unrecycleboranum:unrecycle
        }) 
       })

       //others
       firebase.database().ref('dumpingwasestatus/'+address+'/others').on('value',(snapshot)=>{
        let others = snapshot.val().totalbora
        this.setState({
          othersboranum:others
        }) 
       })
      }   

    render(){
      const {state} = this.props.navigation;
      let address = state.params.collectingLocation
  return(
    <ImageBackground style={styles.backStyle} source={require('../images/final.png')}>
         <View style={{flexDirection:'row',flex:0.2,paddingLeft:20,paddingTop:20}}>
         <TouchableOpacity onPress={()=>{this.onPressBack()}}>
            <Image style={{width:25,height:25}} source={require('../images/left-arrow.png')} />
         </TouchableOpacity>
         <View style={{justifyContent:'center',alignItems:'center',paddingLeft:30,borderWidth:1,borderColor:'white',marginLeft:10,width:330,height:35}}>
             <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>
              {address}
              </Text>
         </View>
         </View>
         <View style={styles.viewStyle}>
          <CollectorCard>
           <CollectorCardSection>
            <View style={{width:'90%'}}>
              <View style={{flexDirection:'row'}}>
              <View style={{height:120,alignItems:'center',justifyContent:'center',flex:0.5}}>
                <Text style={{fontSize:20}}>Recycle</Text>
                <Text style={{fontSize:30,color:'#808080'}} >0{this.state.recycleboranum}</Text>
                <Text>Bora</Text>
              </View>
              <View style={{height:120,alignItems:'center',justifyContent:'center',flex:0.5}}>
                <Text style={{fontSize:20}}>Organic</Text>
                <Text  style={{fontSize:30,color:'#808080'}}>0{this.state.organicboranum}</Text>
                <Text>Bora</Text>
              </View>
              </View>
            </View> 
           </CollectorCardSection>
           <CollectorCardSection>
            <View style={{width:'90%'}}>
              <View style={{flexDirection:'row'}}>
              <View style={{height:120,alignItems:'center',justifyContent:'center',flex:0.5}}>
                <Text style={{fontSize:20}}>Unrecycle</Text>
                <Text style={{fontSize:30,color:'#808080'}} >0{this.state.unrecycleboranum}</Text>
                <Text>Bora</Text>
              </View>
              <View style={{height:120,alignItems:'center',justifyContent:'center',flex:0.5}}>
                <Text style={{fontSize:20}}>Other</Text>
                <Text style={{fontSize:30,color:'#808080'}}>0{this.state.othersboranum}</Text>
                <Text>Bora</Text>
              </View>
              </View>
            </View> 
           </CollectorCardSection>
           <CollectorCardSection>
           <View style={{flexDirection:'column'}}>
             <NewButton onPress={()=>this.getLocationData(address)}>Refresh</NewButton>
             <NewButton onPress={()=>this. getAccessToDatabase(address)}>Collect</NewButton>
             </View>  
           </CollectorCardSection>
          </CollectorCard>
         </View>
      </ImageBackground>
  );}
}

const styles = StyleSheet.create({
    backStyle:{
     width:'100%',
     height:'100%',
     flexDirection:'column',
     flex:1
    },
    viewStyle:{
        flex:0.9,
        borderWidth:1,
        borderColor:'white',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,  
       justifyContent:'center',
       alignItems:'center'
      }
})

export default Collector;