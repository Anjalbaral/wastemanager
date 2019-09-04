import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground} from 'react-native';
import Input from '../components/Input';
import CollectorButton from '../components/CollectorButton';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import firebase from 'firebase';
import LoaderBtn from '../components/LoaderBtn';

class CollectorInput extends Component{
    
    state={
           loadingLogin:false,
           collectorID:'',
           collectorVerified:false,
           msg:''
         }

    getUserInfo=()=>{
        const currentUserID = firebase.auth().currentUser.uid
        const userRef = firebase.database().ref('allusersid/'+currentUserID)
        userRef.on('value',(snapshot)=>{
              this.verifyCollectorCode(snapshot.val().name)
        },err=>{alert(err)})
    }

    verifyCollectorCode=(collectorUID)=>{
        userRef = firebase.database().ref('collectorIDs/'+collectorUID)
        userRef.on('value',(snapshot)=>{
             this.matchCollectorCode(snapshot.val().id)
        },err=>{alert('not verified')})
    }

    matchCollectorCode=(collectorCode)=>{
        if(collectorCode === this.state.collectorID)
        {
           const collecingLocationAddress = this.props.dumpingLOC 
           this.props.navigationProp.navigate('collectorScreen',{collectingLocation:collecingLocationAddress})
        }
        else{
            alert('You are not Verified')
        }
    }

    // onVerifyClick=()=>{
    //     alert(this.state.msg)
    // }
    // onLoginReq=()=>{

    //     this.setState({loadingLogin:true})
        
    //     if(this.state.collectorVerified)
    //      {
    //          this.setState({
    //              loadingLogin:false
    //          })
    //          alert('you are verified')
    //      }
    //      else{
    //          this.setState({
    //              loadingLogin:false
    //          })
    //         alert('Not Verified')
    //      }
    
    // }

    renderButton()
    {
        if(this.state.loadingLogin)
        {
            return(
                <LoaderBtn size = 'small' />
            );
        }
        return(
            <CollectorButton onPress={()=>{this.getUserInfo()}} style={{ width:60,marginTop:30}}>Verify</CollectorButton>
        );
    }

render()
   {
    return( 
            <View style={{borderRadius:10.7}}>
                      <Card>
                        <CardSection>
                            <Input value={this.state.collectorID} onChangeText={(collectorID)=>{this.setState({collectorID})}} secureTextEntry={false}  placeholder="Collector ID" />
                        </CardSection>
                        <CardSection>
                           {this.renderButton()}
                        </CardSection> 
                        <CardSection>
                           <Text style={{color:'red',alignItems:'center'}}>
                            {/* {this.state.msg} */}
                            </Text>
                        </CardSection>     
                       </Card>
                  </View>     
       );
    }
}

export default CollectorInput;