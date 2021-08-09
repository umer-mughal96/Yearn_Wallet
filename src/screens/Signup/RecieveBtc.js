import React  from 'react';
import {
  StyleSheet,
  Text,
  View,
  style,
  colors,
  ScrollView,
  
  
  SafeAreaView,
  TextInput,
  Picker,
  Button
  
} from 'react-native';
import { Yearn_logo } from '../../svgs/Yearn_logo';
import TextInputMask from 'react-native-text-input-mask';
import { Card } from 'react-native-shadow-cards';
import { Send_logo } from '../../svgs/send';

import LinearGradient from 'react-native-linear-gradient';
import { QrcodeSvg } from '../../svgs/QrcodeSvg';

export default function RecieveBtc() {
    return (
<View style={{flex:1}}>

    
<Card style={{
borderRadius:25,
flex:1,
backgroundColor:'#0B7F42'
,
alignSelf:'center'
             ,
height:'100%',
width:'100%',
marginTop:5,




         }}>


<View style={
    {
        flex:1,
        
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
        

        
    }
}>
<Text style={{alignSelf:'center', textAlign:'center' , color:'white', fontSize:18, fontWeight:'bold'}}>
Send to you wallet
</Text>
<Text style={{alignSelf:'center', textAlign:'center', color:'white'}}>
Which cryptocurrencies can I use?
</Text>
</View>
<View style={
    {
        flex:2,
        justifyContent:'center'
        
        
    }
}>
{/* 
<QrcodeSvg></QrcodeSvg> */}

<Text style={{
    color:'white',
    fontSize:28
,
textAlign:'center'

}}>
    QR CODE NAHI THA LAG RHA component bnaya hya hy svg k dir ma hy qrcodek name se hy  
</Text>

</View>
<View style={
    {
        flex:3,
        justifyContent:'center'
        
    }
}>
    <Text style={{alignSelf:'center', textAlign:'center', fontSize:28,color:'white', fontWeight:'bold'}}>
    You Wallet address
</Text>

<Text style={
    {
        color:'#F5F5F5',
        textAlign:'center',
        fontSize:12
    }
}>
0x89564C3161894f64GSDG6
</Text>
<Text style={
    {
        color:'#F5F5F5',
        textAlign:'center',
        fontSize:12
    }
}>
0x89564C3161894f64GSDG6
</Text>


<Card  style={{top:20, backgroundColor:'white', borderRadius:16, width:'45%',alignSelf:'center', height:50, justifyContent:'center' }}>
<Text style={
    {
        color:'#0B7F42', fontSize:18, fontWeight:'bold', alignSelf:'center', justifyContent:'center'
    }
}>
   Share
</Text>
</Card>


<Text style={
    {
      top:25,  color:'white', fontSize:15, fontWeight:'normal', alignSelf:'center'
    }
}>
    Copy
</Text>
</View>



         </Card>
     
</View>

    )
}