import React ,{useState} from 'react';
import { TextInput, View ,Text,TouchableOpacity} from 'react-native';
import Background from './Background';




function Login({navigation}) {
  const [inputText, setInputText] = useState('');
  const [showHello, setShowHello] = useState(false);
  const [showPass, setShowpass] = useState(false);


    return (
        <Background>
        <Text style={{marginTop:-80,fontSize:45,width:300,marginLeft:-60,color:'#FF9800',fontWeight:200}}>DJunicode</Text>
            <Text style={{fontSize:45,width:300,marginLeft:-60,color:'#FF9800',fontWeight:200,opacity:0.7}}>DJunicode</Text>
            <Text style={{fontSize:45,width:300,marginLeft:-60,color:'#FF9800',fontWeight:200 ,opacity:0.4}}>DJunicode</Text>
            <Text style={{fontSize:45,width:300,marginLeft:-60,color:'#FF9800',fontWeight:200 ,opacity:0.1}}>DJunicode</Text>
           
            <Text style={{marginBottom:30,fontSize:45,width:300,marginLeft:-20,color:'#F1F3C2',fontWeight:200, opacity:1,marginTop:20}}>LOGIN</Text>
            
        <TextInput 
        style={{height:'15%',width:'310%',backgroundColor:'rgba(255, 255, 255, 0.3)' ,marginLeft:-95,borderRadius:24,paddingLeft:20,fontSize:20,marginBottom:30}} 
        placeholder='Em@il'
        keyboardType='email-address'
        
        onChangeText={(text) => {
          setInputText(text);
          if (text.includes('@')) {
            setShowHello(false);
          } else {
           setShowHello(true);
          }
        }}
        value={inputText}
        />
    
      {showHello && (
        <Text 
        style={{marginTop:-30,marginBottom:20,color:'red',fontSize:18,fontWeight:500,width:200,marginLeft:-80}}>
        Email should consist '@'
        </Text>)}
   
        
        <TextInput 
        secureTextEntry={true} 
        style={{height:'15%',width:'310%',backgroundColor:'rgba(255, 255, 255, 0.3)' ,marginLeft:-95,borderRadius:24,paddingLeft:20,fontSize:20}} 
        placeholder='P@ssword'
        onChangeText={(text)=>{
        
          if(text.length>=6){
            setShowpass(false);
          
          }
          else{
            setShowpass(true)
          }
        }}/>
        {showPass && (
          <Text 
          style={{marginBottom:0,color:'red',fontSize:18,fontWeight:500,width:400,marginLeft:-80}}>
           Minimum 6 Characters long
            </Text>)}

        
       
      <TouchableOpacity 
      style={{height:55,width:180,backgroundColor:'#F1F3C2',marginTop:30,marginLeft:-45,borderRadius:24}} 
      onPress={()=>{
      alert('Successfull Login');
      navigation.navigate('Main')}}>
        <Text style={{fontSize:35,textAlign:'center',textAlignVertical:'center',color:'#674636',fontWeight:200}}>
          Login
          </Text>
          </TouchableOpacity>
          <Text style={{width:300,marginLeft:-85,marginTop:105,fontSize:17,fontWeight:300}}>Do not have an account?<Text style={{fontSize:21,fontWeight:500,color:'#F1F3C2'}} onPress={()=>{navigation.navigate('Signup')}}>Sign Up</Text></Text>
        </Background>
    );
}

export default Login;