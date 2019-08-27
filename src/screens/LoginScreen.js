import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground} from 'react-native';
import Input from '../components/Input';
import NewButton from '../components/NewButton';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import firebase from 'firebase';
import LoaderBtn from '../components/LoaderBtn';
import Geolocation from 'react-native-geolocation-service';

class LoginScreen extends Component{
    constructor()
    {
        super()
        this.state = {
        emailLogin:'',
        passwordLogin:'',
        errorLogin:'',
        loadingLogin:false,
        LoginMsg:'',
        loggedIn:false,
        userStatus:null,
        userlocation:null,
    }}

    componentDidMount()
    {
         if(this.state.userStatus)
        {
          return this.props.navigation.navigate('main')
        }
    }
  
    renderButton()
    {
        if(this.state.loadingLogin)
        {
            return(
                <LoaderBtn size = 'small' />
            );
        }
        return(
            <NewButton onPress={this.onLoginReq} style={{ width:60,marginTop:30}}>LOGIN</NewButton>
        );
    }

    
    getUserPosition=()=>{
        Geolocation.getCurrentPosition((position)=>{
            this.setState({
                userlocation:{
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude,
                    latitudeDelta:0.0922,
                    longitudeDelta:0.0421
                  }
            })
            let userUid = firebase.auth().currentUser.uid
              firebase.database().ref('userlocation/'+userUid).update({
                  latitude:position.coords.latitude,
                  longitude:position.coords.longitude
              })
        },err=>{console.log(err)})
    }


    onSuccessSignIn()
    {
      this.setState({loadingLogin:false,LoginMsg:''})
      firebase.auth().onAuthStateChanged((user)=>{
          if(user)
          {
            this.setState({loggedIn:true,userStatus:user})
            this.getUserPosition()
            this.props.navigation.navigate('main')
          }
          else{
            this.setState({loggedIn:false,loadingLogin:false});
          }
       })
    }
    onFailSignIn()
    {
        this.setState({loadingLogin:false,LoginMsg:'Failed to Login',loggedIn:false})
    }

    onLoginReq = () =>
    {
        this.setState({loadingLogin:true})
        firebase.auth().signInWithEmailAndPassword(this.state.emailLogin,this.state.passwordLogin)
        .then(res=>
            this.onSuccessSignIn(res))
        .catch(err=>this.onFailSignIn(err)) 
    }
   
    render()
    {
        return(
        <ImageBackground source={require('../images/AuthBack.png')} style={styles.viewStyle}>
            <View style={styles.headerTextStyle}> 
                <Text style={{color:'#BEE4E2',fontSize:30,fontWeight:'bold'}}>
                    Login!
                </Text>
            </View> 
            <View style={styles.cardViewStyle}>
                 <View style={{width:'80%',borderRadius:10.7,height:'90%'}}>
                      <Card>
                        <CardSection>
                            <Input value={this.state.emailLogin} onChangeText={(emailLogin)=>this.setState({emailLogin})} secureTextEntry={false}  placeholder="Email" />
                        </CardSection>
                        <CardSection>
                             <Input value={this.state.passwordLogin} onChangeText={(passwordLogin)=>this.setState({passwordLogin})}  secureTextEntry={true} placeholder="Password" />
                        </CardSection>
                        <CardSection>
                          {this.renderButton()}
                        </CardSection> 
                        <CardSection>
                            <Text style={{color:'red',alignItems:'center'}}>
                            {this.state.LoginMsg}
                            </Text>
                        </CardSection>    
                        <CardSection> 
                            <Text style={{ backgroundColor:'#BEE4E2',marginTop:15,fontSize:20,marginBottom:40,color:'#8e8e8e'}}>Dont have account ?<Text style={{color:'#1282B0'}} onPress={()=>this.props.navigation.navigate('SignUp')}> Signup</Text></Text>
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
       flex:0.7,
       flexDirection:'row',
       justifyContent:'center',
    },
    headerTextStyle:{
        alignItems:'center',
        justifyContent:'flex-end',
        width:'100%',
        flex:0.3,
   },
    viewStyle:{    
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
   }
});

export default LoginScreen;