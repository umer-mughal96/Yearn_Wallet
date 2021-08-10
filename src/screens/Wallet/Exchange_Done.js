import React from 'react';
import {View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ticksvgscreen from '../../svgs/ticksvg';
import DarkButton from '../../components/reusable/Button/DarkButton';

export default function Exhange_Done({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: wp('80%'),
          height: hp('40%'),
          backgroundColor: 'white',
          elevation:5,
          borderRadius:20,
        }}>
        <Ticksvgscreen />
        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center", marginTop:hp(1), marginBottom:hp(1)}}>Your transaction is processed Successfully!</Text>
        <DarkButton name="Go to home" onPress={() => navigation.navigate('walletHome')} />
        
        
      </View>
    </View>
  );
}
