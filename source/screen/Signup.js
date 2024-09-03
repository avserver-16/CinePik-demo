import React,{useState} from 'react';
import { TextInput, View ,Text,KeyboardAvoidingView,Platform,ScrollView,TouchableOpacity} from 'react-native';
import Background from './Background';

function Signup({navigation}) {
const [inputText, setInputText] = useState('');
const [showHello, setShowHello] = useState(false);
const [showPass, setShowpass] = useState(false);
const [wPass,setwPass]=useState('');
const [cPass,setcPass]=useState('');
const equalPass=wPass===cPass;
return (
<Background>
        <Text style={{marginTop:-80,fontSize:45,width:300,marginLeft:-60,color:'#FF9800',fontWeight:200}}>DJunicode</Text>
            <Text style={{fontSize:45,width:300,marginLeft:-60,color:'#FF9800',fontWeight:200,opacity:0.6}}>DJunicode</Text>
            <Text style={{fontSize:45,width:300,marginLeft:-60,color:'#FF9800',fontWeight:200 ,opacity:0.3,marginBottom:17}}>DJunicode</Text>
            
            
            
        <TextInput 
        style={{
            backgroundColor:'rgba(255, 255, 255, 0.3)' ,
            height:'15%',width:'310%',
            marginLeft:-95,borderRadius:24,
            paddingLeft:20,fontSize:20,
            marginBottom:30}} 
            placeholder='Name'
            >

            </TextInput>

<TextInput 
        style={{backgroundColor:'rgba(255, 255, 255, 0.3)' ,height:'15%',width:'310%',marginLeft:-95,borderRadius:24,paddingLeft:20,fontSize:20,marginBottom:30}}
         placeholder='Em@il'
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
      
        {showHello && ( <Text 
        style={{marginTop:-30,marginBottom:20,color:'red',fontSize:18,fontWeight:500,width:200,marginLeft:-80}}>
        Email should consist '@'
        </Text>)}

        <TextInput 
        style={{backgroundColor:'rgba(255, 255, 255, 0.3)' ,height:'15%',width:'310%',marginLeft:-95,borderRadius:24,paddingLeft:20,fontSize:20,marginBottom:30}} 
        placeholder='P@ssword' 
        secureTextEntry={true}
        value={wPass}
        onChangeText={(text)=>{
          setwPass(text);
        
            if(text.length>=6){
              setShowpass(false);
            
            }
            else{
              setShowpass(true)
            }
          }}/>
          {showPass && (<Text 
          style={{marginTop:-30,marginBottom:20,color:'red',fontSize:18,fontWeight:500,width:400,marginLeft:-80}}>
           Minimum 6 Characters long
            </Text>)}
        <TextInput 
        style={{backgroundColor:'rgba(255, 255, 255, 0.3)' ,height:'15%',width:'310%',marginLeft:-95,borderRadius:24,paddingLeft:20,fontSize:20}} 
        placeholder='Confirm Password' 
        secureTextEntry={true}
        value={cPass}
        onChangeText={setcPass}>

        </TextInput>
        <TouchableOpacity style={equalPass?{height:55,width:180,backgroundColor:'#F1F3C2',marginTop:30,marginLeft:-45,borderRadius:24}:{height:55,width:180,backgroundColor:'red',marginTop:30,marginLeft:-45,borderRadius:24}} onPress={()=>{alert('Now Login with this details');navigation.navigate('Login')}}><Text style={{fontWeight:200,fontSize:35,textAlign:'center',textAlignVertical:'center',color:'#674636'}}>Signup</Text></TouchableOpacity>
      
        </Background>
    );
}

export default Signup;