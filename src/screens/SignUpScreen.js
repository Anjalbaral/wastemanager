import React,{Component} from 'react';
import {TouchableHighlight,View,Text,StyleSheet,ImageBackground,Image} from 'react-native';
import Input from '../components/Input';
import NewButton from '../components/NewButton';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import axios from 'axios';
import LoaderBtn from '../components/LoaderBtn';
import firebase from 'firebase';


class SignUpScreen extends Component{
   
    state={
        email:'',
        password:'',
        fullname:'',
        error:'',
        loading:false,
        SignUpMsg:''
    }
     
    renderButton()
    {
        if(this.state.loading)
        {
            return(
                <LoaderBtn size = 'small' />
            );
        }
        return(
            <NewButton onPress={this.onSubmit}>Create</NewButton>
        );
    }

       onFail(err)
       {
        this.setState({loading:false,SignUpMsg:'Failed to create your account ! try another email'})
       }

      onSuccess=(response)=>
      {
        this.setState({loading:false,SignUpMsg:'Account created successfully! Go back and Login'})
      }
    
      onSubmit = () =>
     {
        this.setState({loading:true})
        // axios.post('https://us-central1-wastemanager-2df45.cloudfunctions.net/createUser',{
        //     email:this.state.email,
        //     password:this.state.password
        // })
        const details = "Details"
        let email=this.state.email
        let name = this.state.fullname 
        let userRef2 = firebase.database().ref('allusersid/')
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(res=>
            {
            const userUid = firebase.auth().currentUser.uid    
            let userRef = firebase.database().ref('userlocation/' + userUid)
            userRef.set({    
            email:email,
            name:name,       
            latitude:'',
            longitude:''
                   })
            userRef2.child(userUid).set({email:email,name:name})       
        this.onSuccess(res)})
        .catch(err=>this.onFail(err))
     }

    render()
    {
        return(
            <ImageBackground source={require('../images/AuthBack.png')} style={styles.viewStyle}>
            <View style={styles.headerTextStyle}> 
               <View style={{flex:0.5,width:'100%',justifyContent:'center',paddingLeft:20}}>
                  <TouchableHighlight underlayColor={'transparent'} style={{width:40,height:40,alignItems:'center',justifyContent:'center',borderRadius:20}} onPress={() => this.props.navigation.navigate('Login')}>
                     <Image style={{width:25,height:25}} source={require('../images/left-arrow.png')} />
                  </TouchableHighlight>
               </View>
               <View style={{flex:0.5,width:'100%',justifyContent:'flex-end',alignItems:'center'}}>
                <Text style={{color:'#BEE4E2',fontSize:30,fontWeight:'bold'}}>
                   Sign up
                </Text>
                </View>
            </View>
            <View style={styles.cardViewStyle}>
            <View style={{width:'80%',borderRadius:10.7,height:'90%'}}>
                      <Card>
                        <CardSection>
                             <Input  secureTextEntry={false} value={this.state.email} onChangeText={(email)=>this.setState({email})}   placeholder="Email" />
                        </CardSection>
                        <CardSection>
                             <Input  secureTextEntry={true} onChangeText={(password)=>this.setState({password})} value={this.state.password} placeholder="Password" />
                       </CardSection>
                       <CardSection>
                             <Input  secureTextEntry={false} onChangeText={(fullname)=>this.setState({fullname})} value={this.state.fullname} placeholder="Unique User Name" />
                       </CardSection>
                       <CardSection>
                           {this.renderButton()}
                        </CardSection> 
                        <CardSection>
                            <Text style={{paddingBottom:30,color:'red',alignItems:'center'}}>
                            {this.state.SignUpMsg}
                            </Text>
                        </CardSection>    
                       </Card>
                  </View>     
            </View> 
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    cardViewStyle:{
        width:'100%',
        flex:0.8,
        flexDirection:'row',
        justifyContent:'center',
     },
    viewStyle:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
   },
   headerTextStyle:{
    alignItems:'center',
    justifyContent:'flex-end',
    width:'100%',
    flex:0.2,
    flexDirection:'column',
},
});

export default SignUpScreen;