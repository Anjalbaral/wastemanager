import React,{Component} from 'react';
import {Image,Text,View,Dimensions,ScrollView,ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import SwipeView from '../components/SwipeView';
import NewButton from '../components/NewButton';

const SCREEN_WIDTH=Dimensions.get('window').width

class Slides extends Component{

   renderFirstSlide(index){
       if(index === this.props.data.length-3)
       {
           return(
            <View style={styles.welcome1Style}>
                <View style={{width:'100%',height:'50%',justifyContent:'center',alignItems:'center',flex:1}}><Image source={require('../images/truckIcon.png')} style={{width:200,height:100,top:50}} /></View>
                <View style={{paddingTop:10,flex:0.7,alignItems:'center',width:'100%'}}><Text style={{fontSize:40,color:'white',fontFamily:"Library 3 am soft",paddingTop:10,paddingBottom:10}}> WELCOME </Text></View>
                <View style={{flex:0.5,justifyContent:'center',alignItems:'center',width:'100%'}}><SwipeView info="Swipe" /></View>
            </View>
           );
       }
       else if(index===this.props.data.length-2)
       {
           return(
        <View style={styles.welcome1Style}>
            <View style={{width:'100%',height:'50%',justifyContent:'center',alignItems:'center',flex:1}}><Image source={require('../images/mobilemaps.png')} style={{width:260,height:280}} /><Text style={{marginTop:20,color:'white',fontSize:20}}>Set Your Location</Text><Text style={{color:'white',fontSize:20}}>Then find closest Dumpind yeard</Text><Text style={{color:'white',fontSize:20}}>Give your Waste Details and Review </Text></View>
            <View style={{flex:0.5,justifyContent:'center',alignItems:'center',width:'100%'}}><SwipeView info="Swipe" /></View>
        </View>
           );
       }
       else if(index===this.props.data.length-1)
       {
          return(
        <View style={styles.welcome1Style}>
        <View style={{width:'100%',height:'50%',justifyContent:'center',alignItems:'center',flex:1}}><Image source={require('../images/saveEarth.png')} style={{width:250,height:240,marginTop:-80}} /><Text style={{marginTop:20,color:'white',fontSize:20}}>Make your place clean,</Text><Text style={{color:'white',fontSize:20}}>Make your Environment Green,</Text><Text style={{color:'white',fontSize:20}}>And make the world better place to live</Text></View>
        <NewButton onPress={this.props.onComplete()}>Let's go</NewButton>
        </View>
          );
       }
   }


    renderSlides()
    {
     return this.props.data.map((slide,index)=>{
         return(
            
               <ImageBackground source={require('../images/final.png')} style={[styles.slideView,{flex:1}]} key={slide.text}>
                <View style={styles.mainViewStyle}>
                    {this.renderFirstSlide(index)}
                </View>
             </ImageBackground>
            
         );
     })    
    }

    render()
    {
        return(
            <ScrollView horizontal={true} pagingEnabled={true}>
                  {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles ={
    mainViewStyle:{
        width:'100%',
        height:'100%',
        justifyContent:'center'
    },
    welcome1Style:{
       width:'100%',
       height:500,
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center',
       
    },
    slideView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:SCREEN_WIDTH,
    },
    slideText:{
        fontSize:20,
        color:'white'
    },
    lastBtn:{
        backgroundColor:'#0288D1',
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        width:100,
    }
}

export default Slides;