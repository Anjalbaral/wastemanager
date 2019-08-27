import React,{Component} from 'react';
import {createStackNavigator,createBottomTabNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation';
import DataSubmissionScreen from '../screens/DataSubmissionScreen';
import LocationDetails from '../screens/LocationDetails';
import LoginScreen from '../screens/LoginScreen';
import MapScreen from '../screens/MapScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SettingScreen from '../screens/SettingScreen';
import NavigatorDrawerStructure from '../components/NavigatorDrawerStructure';
import DrawerHeader from '../components/DrawerHeader';
//import SetMyLocation from '../components/SetMyLocation';
//import Geolocation from 'react-native-geolocation-service';


const HomeScreenWithMaps_StackNavigator = createStackNavigator({
    First:{
        screen:MapScreen,
        navigationOptions:({navigation})=>({
            title:null,
            headerStyle:{
                zIndex:1,
                backgroundColor: 'transparent'
            },
            headerLeft:<NavigatorDrawerStructure navigationProps={navigation} />,
        }),
    },
});

const SettingScreen_StackNacigator = createStackNavigator({
    Second:{
        screen:SettingScreen,
        navigationOptions:({navigation})=>({
          title:'settingScreen',
          headerLeft:<NavigatorDrawerStructure navigationProps={navigation} />
        }),
    },
});

const Tab = createBottomTabNavigator({
   Welcome:{screen:WelcomeScreen,
   navigationOptions:({ navigation }) =>({
       header:null,
       tabBarVisible: false,
   })
   },
    AuthScreens:{
        screen:createStackNavigator({
            Login:{screen:LoginScreen,navigationOptions:({navigation})=>({
              header:null,
            })},
            SignUp:{screen:SignUpScreen,navigationOptions:({navigation})=>({
                header:null,
            })},
        }),navigationOptions:({navigation})=>({
            // header:null,
            // tabBarVisible: false,
        })
    },
   main:{
       screen:createBottomTabNavigator({
           Map:{
                screen:createDrawerNavigator({
                   HomeScreenWithMaps:
                   {
                    screen:HomeScreenWithMaps_StackNavigator,navigationOptions:({
                          drawerLabel:'Home',

                    })
                   },
                   settingScreen:
                   {
                       screen:SettingScreen_StackNacigator,navigationOptions:({
                       drawerLabel:'settings'
                       })
                   }
                   },{
                       initialRouteName:'HomeScreenWithMaps',
                       contentComponent:DrawerHeader,
                       drawerOpenRoute:'DrawerOpen',
                       drawerCloseRoute:'DrawerClose',
                       drawerToggleRoute:'DrawerToggle'
                   }
                   ),
            
                      navigationOptions:({navigation})=>({
                      // headerLeft:<NavigationPreloadManager navigationProps={navigation} />,
                       tabBarVisible: false,
                     })
               },
           Form:{
               screen:DataSubmissionScreen
                },
           Review:{
                     screen:createStackNavigator({
                        LocationScr:{screen:ReviewScreen},
                        LocDetails:{screen:LocationDetails},
                    })
                }
       }),navigationOptions:({navigation})=>({
        header:null,
        tabBarVisible: false,
       })
   }
});

export default createAppContainer(Tab);