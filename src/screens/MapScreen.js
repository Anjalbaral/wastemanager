import React,{Component} from 'react';
import {View,StyleSheet,Button,ActivityIndicator} from 'react-native';
import UserMaps from '../components/UserMaps';
import Geolocation from 'react-native-geolocation-service';
import firebase from 'firebase';
import RoundedButtonForUserLocation from '../components/RoundedButtonForUserLocation';
import RoundedButtonForDumpingLocations from '../components/RoundedButtonForDumpingLocations';

class MapScreen extends Component {

    state = {

        mapLoaded:false,
        userLocation:null,
        dumpingPlaces:[],
        currentUser:null,
    }

   componentDidMount(){
     this.setState({mapLoaded:true})  
    //  this.getUserLocation()
    // this.getUserPlacesAPI()
    }

    getUserLocation=()=>{

        let currentUser = firebase.auth().currentUser.uid
        let refUser = firebase.database().ref('userlocation/'+currentUser)
        // refUser.once('value',(snapshot)=>{
        //     const latitudeMap = snapshot.val().latitude
        //     const longitudeMap = snapshot.val().longitude
        // },err=>console.log(err))
       
       Geolocation.getCurrentPosition(position=>{
          
        this.setState({userLocation:{
               latitude:position.coords.latitude,
               longitude:position.coords.longitude,
               latitudeDelta:0.0322,
               longitudeDelta:0.0421
           }})
           
                refUser.update({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
            })
           
        })
        
    }

    getUserPlacesAPI = () =>{
      fetch('https://wastemanager-2df45.firebaseio.com/dumpinglocations.json')
      .then(res=>res.json())
      .then(parsedRes=>{
          const placesArray = [];
          for(const key in parsedRes)
          {
              placesArray.push({
                  latitude:parsedRes[key].latitude,
                  longitude:parsedRes[key].longitude,
                  id:key
              });
          }
          this.setState({
            dumpingPlaces:placesArray
          });
      })
      .catch(err=>console.log(err));
      
  }

  onRegionChangeComplete=(region)=>{
      this.setState({region})
      console.log(region)
  }
  
 
    render()
    {
        // if(!this.state.mapLoaded)
        // {
        //     return(
        //         <View style={{flex:1,JustifyContent:'center'}}>
        //            <ActivityIndicator size="large" />
        //         </View>
        //     );
        // }
        return(
            <View style={styles.viewStyle}>
             <View>
                <View style={{marginLeft:360}}><RoundedButtonForUserLocation onPress={this.getUserLocation} /></View>
                <View style={{marginLeft:180}}><RoundedButtonForDumpingLocations onPress={this.getUserPlacesAPI} /></View>
            </View> 
             <UserMaps  userLocation={this.state.userLocation} dumpingPlaces={this.state.dumpingPlaces} />
            
            </View>
        );
    }
}



const styles = StyleSheet.create({
   viewStyle:{
    marginTop:-60,   
    width:'100%',
    height:'120%',
   }
});

export default MapScreen;

// import  React, {Component} from 'react';
// import { View, Text } from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       latitude: null,
//       longitude: null,
//       timestamp: null
//     }
//   }
  
//   componentDidMount() {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({ 
//           latitude: position.coords.latitude ,
//           longitude: position.coords.longitude,
//           timestamp:  position.timestamp
//         })
//       },
//       (error) => { console.log(error); },
//       { enableHighAccuracy: true, timeout: 30000 }
//     )
//   }
  
//   render() {
//     return  (
//       <View>
//         <Text>latitude:{this.state.latitude}</Text>
//         <Text> longitude:{this.state.longitude}</Text>
//         <Text>timestamp:{this.state.timestamp}</Text>
//       </View>
//     )
//   }
// }