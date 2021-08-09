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

import { Card } from 'react-native-shadow-cards';
import { Send_logo } from '../../svgs/send';

import LinearGradient from 'react-native-linear-gradient';


export default function TopUP() {
    return (
<View style={{flex:1,
   alignContent:'center',
   alignItems:'center',
   

}}>

    <Card style={{
top:15,
height:60,
borderRadius:8,
justifyContent:'center'
, marginBottom:15
    }}>
<Text style={{textAlign:'center', color:'black', fontWeight:'bold', fontSize:18 }}>
Credit Card
</Text>

       
        

    </Card>

    <Card style={{
top:15,
height:60,
borderRadius:8,
justifyContent:'center'

    }}>
<Text style={{textAlign:'center', color:'black', fontWeight:'bold', fontSize:18 }}>
Gift Card
</Text>

       
        

    </Card>
    

</View>

    )
}