import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';

import Ticksvgscreen from '../../svgs/ticksvg';
import Footer from '../../components/reusable/Footer/Footer';

export default function Activity({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Card cornerRadius={12} style={styles.card}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              // onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.svgText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.svgText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.svgText}>Recevied</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
     <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <View style={styles.view3}>
        <Ticksvgscreen />

        <Text style={styles.svgText1}>
          Integrations with other contacts, apps and devices will appear here!
        </Text>
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
    // justifyContent: 'center',
    // alignItems: 'center',
    width: wp('100%'),
  },
  view1: {
    flex: 1,

    width: wp('100%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('95%'),
    height: hp('7%'),
  },
  svgText: {
    fontSize: hp('2%'),
    textAlign: 'center',
    width: wp('30%'),
    fontFamily: 'Poppins-Medium',
  },
  view3: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: wp('80%'),
  },
  svgText1: {
    paddingTop: hp('2'),
    fontSize: hp('2.0%'),
    textAlign: 'center',
    width: wp('70%'),
    fontFamily: 'Poppins-Light',
  },
});
