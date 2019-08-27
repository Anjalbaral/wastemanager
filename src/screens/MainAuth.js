// import React,{Component} from 'react';
// import {View,Text} from 'react-native';
// import firebase from 'firebase';
// import LoginScreen from './LoginScreen';

// class Auth extends Component{
    
//   state={
//       userStatus:null
//   }

//     componentDidMount()
//     {
//      firebase.auth().onAuthStateChanged((user)=>{
//             this.setState({userStatus:user});
//                })
//     }

//     render()
//     {
//         if(!this.state.userStatus)
//         {
//             return <LoginScreen />
//         }

//         return(
//             this.props.navigation.navigate('main')
//         );
//     }
// }
// export default Auth;