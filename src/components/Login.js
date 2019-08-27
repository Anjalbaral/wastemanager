import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground} from 'react-native';
//import CardElement from '../components/CardElement';
import Input from '../components/Input';
import NewButton from '../components/NewButton';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import firebase from 'firebase';
import LoaderBtn from '../components/LoaderBtn';

const Login =({renderButton,onSuccessSignIn,onFailSignIn,onLoginReq})=> {
   return(
       <View>
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
       </View>
   );
}

export default Login;