import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function PlasmaTopUp() {
  return (
    <View style={styles.container}>
      <View style={styles.view3}>
        <Text style={{ fontSize:hp("2.5%"),
    fontWeight:"bold",}}>Please enter your gift card details</Text>
      </View>
      <View style={styles.view1}>
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
          <TextInput
            style={styles.text1}
            placeholder="0000-0000-000"></TextInput>
          <TextInput style={styles.text1} placeholder="mm/yyyy"></TextInput>
          <TextInput style={styles.text1} placeholder="000"></TextInput>
        </View>
      </View>
      {/* <View style={styles.view3}>
      <TextInput placeholder="Email"></TextInput>
      </View> */}

      <View style={styles.view2}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // height: hp('45%'),
            width: wp('80%'),
            borderRadius: 20,
            backgroundColor: 'white',
            elevation: 8,
          }}>
          <TextInput
            style={styles.text1}
            placeholder="ecbuebcubeucb"></TextInput>
        </View>

        <DarkButton name="Next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: wp('80%'),
  },
  view2: {
    flex: 2.5,
    justifyContent: 'space-around',
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
    height: 80,
    width: 280,
    margin: 12,
    borderWidth: 0.25,
    borderRadius: 15,
    padding: 10,
    borderBottomColor: '#0B7F42',
  },
});
