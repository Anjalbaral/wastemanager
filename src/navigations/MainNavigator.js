import React,{Component} from 'react';
import {View,Text} from 'react-native';
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
import HistoryScreen from '../screens/HistoryScreen'
import AboutUsScreen from '../screens/AboutUsScreen';
import DrawerLabel from '../components/DrawerLabel';
import mainForm from '../screens/mainForm';
import Collector from '../screens/Collector';
import Customer from '../screens/Customer';
import LogOutScreen from '../screens/LogOutScreen';

const HeaderType =({navigation})=>{
    return(
        <View style={{width:'100%',flexDirection:'row',backgroundColor:'rgba(100,100,100,0)'}}>
            <NavigatorDrawerStructure navigationProps={navigation} />
            <Text style={{fontSize:20}}>History</Text>
        </View>
    );
}


const HomeScreenWithMaps_StackNavigator = createStackNavigator({
    First:{
        screen:MapScreen,
        navigationOptions:({navigation})=>({
            title:null,
            tabBarVisible:false,
            headerStyle:{
                zIndex:1,
                backgroundColor: 'transparent'
            },
            headerLeft:<NavigatorDrawerStructure navigationProps={navigation} />,
        }),
    },
})

const SettingScreen_StackNacigator = createStackNavigator({
    Second:{
        screen:SettingScreen,
        navigationOptions:({navigation})=>({
            title:null,
            tabBarVisible:false,
            headerStyle:{
                zIndex:1,
                backgroundColor: 'transparent'
            },
          headerLeft:<NavigatorDrawerStructure navigationProps={navigation} />
        }),
    },
});
const HistoryScreen_StackNavigator = createStackNavigator({
    Third:{
        screen:HistoryScreen,
        navigationOptions:({navigation})=>({
            title:null,
            tabBarVisible:false,
            headerStyle:{
                zIndex:1,
                backgroundColor: 'transparent'
            },
            headerLeft:<NavigatorDrawerStructure navigationProps={navigation} />
        })
    }
});

const AboutUsScreen_StackNavigator = createStackNavigator({
    fourth:{
        screen:AboutUsScreen,navigationOptions:({navigation})=>({
            title:null,
            tabBarVisible:false,
            headerStyle:{
                zIndex:1,
                backgroundColor: 'transparent'
            },
           headerLeft:<NavigatorDrawerStructure navigationProps={navigation} />
        })

    }
});

// const LogOutScreen_StackNavigator = createStackNavigator({
//     fifth:{
//         screen:LogOutScreen,navigationOptions:({navigation})=>({
//             tabBarVisible:false,
//             title:'LogoutError',
//            headerLeft:<NavigatorDrawerStructure navigationProps={navigation} />
//         })

//     }
// })


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
            header:null,
            tabBarVisible: false,
        })
        },
   main:{
       screen:createBottomTabNavigator({
           Map:{
                screen:createDrawerNavigator({
                   HomeScreenWithMaps:
                   {
                        screen:HomeScreenWithMaps_StackNavigator,navigationOptions:({
                          drawerLabel:<DrawerLabel img={require('../images/homeicon.png')} text="Home" />
                    })
                   },
                   HistoryScreen:{
                     screen:HistoryScreen_StackNavigator,navigationOptions:({
                         drawerLabel:<DrawerLabel img={require('../images/historyicon.png')} text="History" />,
                         tabBarVisible:false
                     })
                   },
                   settingScreen:
                   {
                       screen:SettingScreen_StackNacigator,navigationOptions:({
                       drawerLabel:<DrawerLabel img={require('../images/settingicon.png')} text="Setting" />
                       })
                   },
                   AboutUs:{
                      screen:AboutUsScreen_StackNavigator,navigationOptions:({
                          drawerLabel:<DrawerLabel img={require('../images/aboutus.png')} text="About" />
                      })
                   }
                //    LogOut:{
                //        screen:LogOutScreen_StackNavigator,navigationOptions:({
                //         drawerLabel:<DrawerLabel img={require('../images/logouticon.png')} text="Logout" />
                //        })
                //    }
                   },{
                       initialRouteName:'HomeScreenWithMaps',
                       contentComponent:DrawerHeader,
                       drawerOpenRoute:'DrawerOpen',
                       drawerCloseRoute:'DrawerClose',
                       drawerToggleRoute:'DrawerToggle'
                   }),navigationOptions:({
                       tabBarVisible:false
                   })
               },

           FormScreen:{
                screen:createBottomTabNavigator({
                    MainForm:{screen:mainForm,navigationOptions:({navigation})=>({
                        tabBarVisible:false
                    })
                    },
                    customerScreen:{screen:Customer,navigationOptions:({navigation})=>({
                        tabBarVisible:false
                    })},
                    collectorScreen:{screen:Collector,navigationOptions:({navigation})=>({
                        tabBarVisible:false
                    })}
                }),navigationOptions:({
                    tabBarVisible:false
                })
                    },
           Review:{
                     screen:createStackNavigator({
                        LocationScr:{screen:ReviewScreen},
                        LocDetails:{screen:LocationDetails},
                    }),navigationOptions:({
                        tabBarVisible:false
                    })
                  }
       }),navigationOptions:({
        tabBarVisible:false
           })
   }
});

export default createAppContainer(Tab);