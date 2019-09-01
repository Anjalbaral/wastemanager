import React,{Component} from 'react';
import {Modal,Text,View,TouchableOpacity,Image,StyleSheet,ImageBackground} from 'react-native';
import CollectorButton from '../components/CollectorButton';
import CustomerInputDialog from '../components/CustometInputDialog';
import CustomerSubmitBtn from '../components/CustomerSubmitBtn';
import firebase from 'firebase';

class Customer extends Component{
 
     state={
       WasteType:'',
       pickerDisplayed:false,
       boraNO:'',
       totalboranumber:'',
      //  oldboranum:''
         }

  setPickerValue=(pickedValue)=>{
      this.setState({
        WasteType:pickedValue
      })
      this.WasteTogglePicker()
    } 
    WasteTogglePicker=()=>{
      this.setState({
        pickerDisplayed:!this.state.pickerDisplayed
      })
    }

    // setTotalBoraNum=(boraNum)=>{
    //   alert(boraNum)
    //                   } 
    // updateUserWasteDetails=(prevtime,prevcount,prevtype,locationName,locationID)=>{
    // }

  updateWasteMaterialsData=(loc,id,borano,type,dateandtime)=>{
    firebase.database().ref('wastematerialsdata/'+loc+'/'+id).update({
      wastetype:type,
      numberofbora:borano,
      recentdateandtime:dateandtime,
     })
  }

  updateUserHistory=(id,dateid,borano,loc,type)=>{
    firebase.database().ref('userwastehistory/'+id).child(dateid).set({
      numberofbora:borano,
      wastetype:type,
      submittedlocation:loc
    })
  }

  updateWholeDumpLocation=(total,name,type)=>{

    if(total){
      firebase.database().ref('dumpingwasestatus/'+name+'/'+type).set({
        totalbora:total
     })
    }
  }

    onSubmitBtn=(dumpinglocation,locationID)=>{
       const curUsrID = firebase.auth().currentUser.uid
      
       var date = new Date().getDate();
       var month = new Date().getMonth();
       var year = new Date().getFullYear();
       var hours = new Date().getHours();
       var min = new Date().getMinutes();
       var sec = new Date().getSeconds();
       var dateandtimecombined = date+'/'+month+'/'+year+' '+hours+':'+min+':'+sec;
       let numberOfBora = this.state.boraNO
       
       let wasteType = this.state.WasteType
       this.updateWasteMaterialsData(dumpinglocation,curUsrID,numberOfBora,wasteType,dateandtimecombined)
        
       var currentDateId =year.toString()+month.toString()+date.toString()+hours.toString()+min.toString()+sec.toString()
       this.updateUserHistory(curUsrID,currentDateId,numberOfBora,dumpinglocation,wasteType)
       
       var newborano = this.state.boraNO
       firebase.database().ref('dumpingwasestatus/'+dumpinglocation+'/'+wasteType).once('value',(snapshot)=>{

       let totalbora = parseInt(snapshot.val().totalbora)+parseInt(newborano)
        this.updateWholeDumpLocation(totalbora,dumpinglocation,wasteType)
          })
        
        //  firebase.database().ref('dumpingwasestatus/'+dumpinglocation+'/'+wasteType).set({
        //    totalbora:3
        //  })
        // this.updateWholeDumpLocation(dumpinglocation,this.state.WasteType)
       
      //  this.updateDumpingWasteStatus(dumpinglocation,wasteType,numberOfBora)
      //firebase.database().ref('wastematerialsdata/'+dumpinglocation+'/'+curUsrID).on('value',(snapshot)=>{this.updateUserWasteDetails(snapshot.val().recentdateandtime,snapshot.val().numberofbora,snapshot.val().wastetype,dumpinglocation,locationID)})
      }

    onPressBack=()=>{
        this.props.navigation.navigate('MainForm')
        }

    render(){

      const wasteTypes = [
        {
          title:'organic',
          value:'organic'
        },
        {
          title:'recycle',
          value:'recycle'
        },
        {
          title:'unrecycle',
          value:'unrecycle'
        },
        {
          title:'others',
          value:'others'
        }

      ]

      const { state } = this.props.navigation;
      let dumpinglocationsid = state.params.dumpinglocationid
      let dumpinglocation = state.params.dumpinglocation
      // let curwastetype = this.state.WasteType
      // var newboracount = this.state.boraNO

  return(
    <ImageBackground style={styles.backStyle} source={require('../images/final.png')}>
         <View style={{flexDirection:'row',flex:0.2,paddingLeft:20,paddingTop:20}}>
          <TouchableOpacity onPress={()=>{this.onPressBack()}}>
            <Image style={{width:25,height:25}} source={require('../images/left-arrow.png')} />
         </TouchableOpacity>
         <View style={{justifyContent:'center',alignItems:'center',paddingLeft:30,borderWidth:1,borderColor:'white',marginLeft:10,width:330,height:35}}>
             <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>
              {dumpinglocation}
              </Text>
         </View>
         </View>
         <View style={styles.viewStyle}>
                <View style={{width:'100%',height:'100%',padding:20,borderWidth:1,borderTopLeftRadius:20,borderTopRightRadius:20,borderColor:'white'}}>
                <View style={{width:'100%',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:23,color:'white'}}>Fill Your Waste details</Text>
                </View>
                 <View style={{flexDirection:'row',paddingTop:20}}>
                   <Text style={{fontSize:20,color:'white',padding:5}}>Waste type : <Text style={{fontWeight:'bold',padding:5}}>{this.state.WasteType}</Text></Text>
                   <CollectorButton onPress={()=>{this.WasteTogglePicker()}}>Select</CollectorButton>
                 </View>
                 <View style={{flexDirection:'row'}}>
                   <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize:20,color:'white',padding:5}}>No of boras : <Text style={{fontWeight:'bold',padding:5}}>{this.state.BoraValues}</Text></Text>
                    </View>
                    <View>
                       <CustomerInputDialog value={this.state.boraNO} onChangeText={(boraNO)=>{this.setState({boraNO})}} />
                     </View>
                 </View>
                 <View style={{flexDirection:'row',paddingTop:20}}>
                   <Text style={{fontSize:20,color:'white',padding:5}}>Location : <Text style={{fontWeight:'bold',padding:5}}>{dumpinglocation}</Text></Text>
                 </View>
                 <View style={{paddingTop:50,width:'100%',alignItems:'center'}}>
                   <CustomerSubmitBtn onPress={()=>{this.onSubmitBtn(dumpinglocation,dumpinglocationsid)}}>Submit</CustomerSubmitBtn>
                 </View>
                 {/* <View>{this.updateDumpingDate(this.state.oldboranum,this.state.boraNO)}</View> */}
                 {/* <View>{this.updateWholeDumpLocation(dumpinglocation,this.state.WasteType)}</View> */}
                 </View>
                 <View>
             <Modal animationType={"slide"} visible={this.state.pickerDisplayed} transparent={true} onRequestClose={()=>{console.log('request for close')}} >
               <View style={{
                shadowColor:'#0000',
                shadowOffset:{width:5,height:5},
                shadowOpacity:1, 
                padding:20,
                bottom:0,
                left:0,
                right:0,
                borderRadius:40,
                backgroundColor: 'rgba(0,153,204,1)',
                alignItems:'center',
                position:'absolute',
                borderRadius:15,
                borderTopWidth:1,
                borderColor:'white'
              }}>

              <View style={{width:'100%',alignItems:'center'}}><Text style={{fontWeight:'bold',alignItems:'center',color:'white',fontSize:19,paddingBottom:5,paddingTop:5}}>Pick waste material types:</Text></View>
                
                {wasteTypes.map((value,index)=>{
                  return(
                      <TouchableOpacity key={index} onPress={()=>{this.setPickerValue(value.value)}} style={{paddingTop:5,paddingBottom:5,alignItems:'center',width:'100%',backgroundColor:'rgba(221,221,221,0.2)'}}>
                         <Text style={{fontSize:20,color:'white'}}>{value.title}</Text>
                       </TouchableOpacity>
                        );
                })}
                <TouchableOpacity onPress={()=>this.WasteTogglePicker()}><Text style={{fontSize:20,color:'white'}}>cancel</Text></TouchableOpacity>
                
              </View>
           </Modal>
           </View>
          </View>
      </ImageBackground>
  );}
}

const styles = StyleSheet.create({
    backStyle:{
    width:'100%',
    height:'100%',
    flex:1,
    flexDirection:'column',   
    },
    viewStyle:{
        flex:0.9,  
       justifyContent:'center',
       alignItems:'center'
      }
})

export default Customer;