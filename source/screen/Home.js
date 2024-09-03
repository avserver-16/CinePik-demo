import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background'; // Adjust the path if necessary

const Home = ({navigation}) => {
  return (
    <Background >
         <Text style={{color:'#F1F3C2',fontSize:20,marginLeft:-90,fontWeight:200}}>Welcome to{'\n'}</Text>
         <Text style={{color:'#FF9800',fontSize:61,marginLeft:-90,width:350,fontWeight:300}}>DJUnicode</Text>
       
    <TouchableOpacity style={{height:'13%',width:300,backgroundColor:'#674636',alignContent:'center',justifyContent:'center',margin:10,marginTop:250,marginLeft:-105,borderRadius:16}}  
    onPress={()=>{navigation.navigate('Login')}}><Text style={{fontSize:30,textAlign:'center',color:'#F1F3C2',fontWeight:200}}>Login</Text></TouchableOpacity>
    <TouchableOpacity style={{height:'13%',width:300,backgroundColor:'#F1F3C2',alignContent:'center',justifyContent:'center',margin:10,marginLeft:-105,borderRadius:16}}  
    onPress={()=>navigation.navigate('Signup')}>
      <Text style={{fontSize:30,textAlign:'center',color:'#674636',fontWeight:200}}>Signup</Text></TouchableOpacity>
    </Background>
  );
};

export default Home;