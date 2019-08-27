import React,{Component} from 'react';
import {Text,View} from 'react-native';
import createAppContainer from './navigations/MainNavigator';
import firebase from 'firebase';

class App extends Component{
  

  componentDidMount()
  {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfg9oEPyVpdi5EH9bVALK01i_ORxc32LI',
      authDomain: 'wastemanager-2df45.firebaseapp.com',
      databaseURL: 'https://wastemanager-2df45.firebaseio.com',
      projectId: 'wastemanager-2df45',
      storageBucket: '',
      messagingSenderId: '813353729492',
      appId: '1:813353729492:web:4979485eb650ff70'  
    });
  }


  render()
  {
    const MainNavigator = createAppContainer
    return(
        <MainNavigator />
    );
  }
}

export default App;