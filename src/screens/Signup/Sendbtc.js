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

export default function Sendbtc() {
    return (
<View style={{flex:1, backgroundColor:'white'}}>

<View style={{marginTop:42, marginLeft:32, marginRight:32, flex:1}}>

<Text >
Total Balance
</Text>
<Text style={{fontSize:34 , color:'#0B7F42', fontWeight:'bold'   }}>
0.7544 BTC
</Text>
<Text>
$26,648.60
    </Text>

</View>
<View style={{flex:7, backgroundColor:'white'}}>



    <Card style={{ width: '90%', height: 415, alignSelf:'center', marginBottom: 8,marginTop:15, flexDirection: 'column', borderRadius: 21,shadowColor: '#000',
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 1,
               
                  elevation: 15,}}>
          {/* <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}> */}

         <Card style={{
borderRadius:8,
borderWidth:1,
borderColor:'red',

             borderWidth:0.5,borderColor:'#0B7F42',
alignSelf:'center'
             ,
height:74,
width:'95%',
marginTop:15,




         }}>
<Text style={{left:13, top:7}}>
How much you want to send?
</Text>
         </Card>
         <Card style={{
             borderRadius:8,
             height:78
             , marginTop:-40,
             
             borderWidth:0.5,borderColor:'#0B7F42',
             width:'95%',
             alignSelf:'center'
         }} >

<Text style={{left:13, top:7, fontWeight:'bold'}}>
Your Amount
</Text>

<View style={{flexDirection:'row', top:3}}>
    <TextInput style={{left:13, top:7, fontWeight:'bold', fontSize:20, textContentType:'number'}} placeholder='$000.0' keyboardType='decimal-pad'  >

    </TextInput>
    {/* <TextInputMask   placeholder='$00.00' onChangeText={(formatted, extracted) => {
    console.log(formatted) // +1 (123) 456-78-90
    console.log(extracted) // 1234567890
  }}
     
     textContentType="postalCode" 

     mask={"$"}
  >

  </TextInputMask> */}



<Picker
        // selectedValue={selectedValue}
        style={{ height: 50, width: 100 , fontSize:18, fontWeight:'bold' , left:'256%', }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="USD" value="usd" />
        <Picker.Item label="ETH" value="eth" />
        
        <Picker.Item label="BTC" value="btc" />
      </Picker>

</View>


         </Card>
          

          <Text style={{top:10, left:24}}>
          =7424.898BTC
          </Text>

          {/* </LinearGradient> */}


          <Card style={{
borderRadius:8,
borderWidth:1,
borderColor:'red',

             borderWidth:0.5,borderColor:'#0B7F42',
alignSelf:'center'
             ,
height:74,
width:'95%',
marginTop:42,




         }}>
<Text style={{left:13, top:7}}>
Wallet Address to Send
</Text>
         </Card>
         <Card style={{
             borderRadius:8,
             height:78
             , marginTop:-40,
             
             borderWidth:0.5,borderColor:'#0B7F42',
             width:'95%',
             alignSelf:'center'
         }} >



<View style={{flexDirection:'row', top:3}}>
    <TextInput style={{left:13, top:7, fontWeight:'bold', fontSize:20,}} placeholder='adasdn4531ads15a1d3w1aw1d'  >

    </TextInput>
    {/* <TextInputMask   placeholder='$00.00' onChangeText={(formatted, extracted) => {
    console.log(formatted) // +1 (123) 456-78-90
    console.log(extracted) // 1234567890
  }}
     
     textContentType="postalCode" 

     mask={"$"}
  >

  </TextInputMask> */}


</View>

<Card  style={{top:75, backgroundColor:'#0B7F42', borderRadius:16, width:'95%',alignSelf:'center', height:54, justifyContent:'center' }}>
<Text style={
    {
        color:'white', fontSize:18, fontWeight:'bold', alignSelf:'center', justifyContent:'center'
    }
}>
    NEXT
</Text>
</Card>
         </Card>
          
        </Card>
        </View>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    scrollView: {
      
    },
    carousel: {
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'row',
      flexDirection: 'column',
    },
    balanceCard: {
      flex: 3,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15
    },
    information: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomNavigation: {
      flex: 1,
      justifyContent: 'flex-end',
      alignSelf:'baseline',
      bottom:0,
      position:'absolute',
      zIndex: 5
  
    },
    image: {
      flex: 2,
      margin: (1, 10, 1, 10),
    },
    svgText: {
      color: 'white',
      fontSize: 10,
      marginTop: 5,
    },
    cardText: {
      textAlignVertical: 'center',
  
      marginLeft: 15,
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Poppins-Bold',
  
    },
   
    totalBalance: {
      color: "black",
      fontFamily: "Poppins-Medium",
      // marginRight: 15.8
    }
  });
