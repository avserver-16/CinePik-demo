import React from 'react';
import {View, ImageBackground,TouchableOpacity,Text} from 'react-native';

const Background = ({ children }) => {
  return ( 
   
    <View style={{ backgroundColor:'green', height:'100%',width:'100%' }}>  
 
    

      <View style={{ position: "absolute", backgroundColor:'#A1D6B2',height:'100%',width:'100%',padding:150}}>
         <ImageBackground source={require('./bgImg.jpg')} style={{height:'142%',position:'absolute',width:'210%',marginLeft:0}}/>
       

       
        
        {children}
     
      </View>
    </View>
    
  );
}

export default Background;