import React from 'react';
import {View,Image} from 'react-native';
import MapView from 'react-native-maps';
import firebase from 'firebase';



const UserMaps = (props) =>{

   markerClicked = (DumpingLocation,DumpingLocationID) => {
     props.formNavigation.navigate('MainForm',{dumpinglocation:DumpingLocation,dumpinglocationid:DumpingLocationID})
   }

   getDumpingAddress=(dumpaddress,dumpinglocid)=>{
       this.markerClicked(dumpaddress,dumpinglocid)
   }
 
   onMarkerClick=(locationID)=>{
    const refUser = firebase.database().ref('dumpinglocations/'+locationID)
    refUser.on('value',(snapshot)=>{
      this.getDumpingAddress(snapshot.val().address,locationID)
   },err=>{console.log(err)})
     }
   
    let userLocationMarker = null;

    if(props.userLocation)
    {
      userLocationMarker= <MapView.Marker coordinate={props.userLocation}  />
    }
    const dumpingMarkers = props.dumpingPlaces.map(userPlace=>(
    <MapView.Marker onPress={(navigation)=>{onMarkerClick(userPlace.id)}} pinColor='orange' coordinate={userPlace} key={userPlace.id} >
    <Image source={require('../images/wasteloc.png')} style={{height: 33, width:22}} />
    </MapView.Marker>
    ));

   

   return(
    <View style={styles.mapContainer}>
    <MapView
     initialRegion={{
         latitude:37.78825,
         longitude:-122.4324,
         latitudeDelta:0.0922,
         longitudeDelta:0.0421,
     }}
     region={props.userLocation}
    //  onRegionChange={props.onRegionChange}
     style={styles.mapStyles} >
     {userLocationMarker}
     {dumpingMarkers}
     </MapView>
</View>
   );
}

const styles = {
    mapContainer:{
        width:'100%',
        height:'100%'
    },
    mapStyles:{
       width:'100%',
       height:'100%'
    }
}

export default UserMaps;