import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Footer from '../../components/reusable/Footer/Footer';

export default function PlasmaTopUp({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 5}}>
        <View style={styles.view3}>
          <Text
            style={{
              fontSize: hp('2.0%'),
              textAlign: 'center',
              fontFamily: 'Poppins-Medium',
             
            }}>
            Please enter your gift card details
          </Text>
        </View>

        <View style={styles.view1}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: hp('35%'),
              width: wp('65%'),
              borderRadius: 20,
              backgroundColor: 'white',
              elevation: 8,
            }}>
            
            <TextInput
              style={styles.text1}
              placeholder="0000-0000-000"></TextInput>
            <TextInput style={styles.text1} placeholder="mm/yyyy"></TextInput>
            <TextInput style={styles.text1} placeholder="000"></TextInput>
          </View>
        </View>
        

        <View style={styles.view2}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: hp('10%'),
              width: wp('65%'),
              borderRadius: 20,
              backgroundColor: 'white',
              elevation: 8,
              marginBottom: hp('5%'),
            }}>
            <TextInput
              style={styles.text1}
              placeholder="ecbuebcubeucb"></TextInput>
          </View>

          <DarkButton name="Next"  onPress={()=> navigation.navigate("plasma8")}/>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: wp('80%'),
    height: hp('50%'),
  },
  view2: {
    flex: 3.5,

    justifyContent: 'flex-start',
    alignItems: 'center',

    width: wp('100%'),
  },
  view3: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
  },
  text1: {
    height: hp('8%'),
    width: wp('60%'),
    margin: 12,
    borderWidth: 0.50,
    borderRadius: 15,
    padding: 10,
    borderColor:"#0B7F42",
    },
});
