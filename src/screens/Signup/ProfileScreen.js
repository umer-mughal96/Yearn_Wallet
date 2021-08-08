import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={{fontSize: 25, color: '#0B7F42', fontWeight: 'bold'}}>
          Private Key
        </Text>
        <Text>Tap any to show key</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'blue'}}></View>
      <View style={{flex: 2, backgroundColor: 'red'}}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
  },
  view1: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: wp('20%'),
    backgroundColor: 'red',
  },
});
