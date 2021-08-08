import React from 'react';
import {View, Text, Input} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DarkButton from '../../components/reusable/Button/DarkButton';
export default function PlasmaTopup2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}> plasmaPay</Text>
      </View>
      <View
        style={{
          flex: 1.5, 
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: hp('45%'),
            width: wp('80%'),
            borderRadius: 20,
            backgroundColor: 'white',
            elevation: 8,
          }}>
       <Text style={{color:"#0B7F42" ,fontSize:20}}> You will receive </Text>
       <Text style={{fontSize:26,fontWeight:"bold"}}>0.000005168 BTC</Text>
       <Text style={{fontSize:18}}>     Best Rate at the moment</Text>
       <Text style={{fontSize:22,fontWeight:"bold"}}>1 BTC = 45,826EUR</Text>

          </View>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <DarkButton name="Next" />
      </View>
    </View>
  );
}
