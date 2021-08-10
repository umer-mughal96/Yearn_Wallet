import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ticksvgscreen from '../../svgs/ticksvg';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {Card} from 'react-native-shadow-cards';
import Color from 'color';
// import { Picker } from '@react-native-picker/picker';

export default function Exchange({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Text style={styles.text1}>to</Text>
            <TextInput
              style={styles.inputtext1}
              placeholder="00.00"
              placeholderTextColor="grey"
              keyboardType="decimal-pad"></TextInput>
          </View>
          {/* <View style={{
        color:'black'
    }} > */}
          <Picker
            // selectedValue={selectedValue}
            style={styles.picker1}
            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="USD" value="usd" />
            <Picker.Item label="ETH" value="eth" />

            <Picker.Item label="BTC" value="btc" />
          </Picker>

          {/* </View> */}
        </View>

        <View style={styles.view2}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Text style={styles.text1}>to</Text>
            <TextInput
              style={styles.inputtext1}
              placeholder="00.00"
              placeholderTextColor="grey"
              keyboardType="decimal-pad"></TextInput>
          </View>
          {/* <View style={{
        color:'black'
    }} > */}
          <Picker
            // selectedValue={selectedValue}
            style={styles.picker1}
            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="USD" value="usd" />
            <Picker.Item label="ETH" value="eth" />

            <Picker.Item label="BTC" value="btc" />
          </Picker>

          {/* </View> */}
        </View>

        <TouchableOpacity
          style={styles.signup}
          onPress={() => navigation.navigate('exchangeverify')}>
          {/* <DarkButton name="Next" /> */}

          <Card style={styles.card1}>
            <Text style={styles.text5}>Next</Text>
          </Card>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
    height: hp('35%'),
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20,
  },
  view2: {
    borderRadius: hp(1),
    borderWidth: hp(0.05),
    borderColor: 'black',
    height: hp(9),
    width: hp(30),
    paddingLeft: hp(1),
    marginBottom: hp(2),
    flexDirection: 'row',
  },
  text1: {
    color: 'grey',
    marginTop: hp(1),
    textDecorationColor: 'grey',
    fontFamily: 'Poppins-Bold',
    marginLeft: hp(0.4),
  },
  inputtext1: {
    color: 'black',
    height: hp(7),
    width: hp(20),
    marginTop: hp(-1.6),
    textDecorationColor: 'black',
    fontFamily: 'Poppins-Bold',
  },
  picker1: {
    height: hp(10),
    width: hp(45),
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: 'green',
  },
  card1: {
    width: wp(60),
    height: hp(6),
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: hp(2),
  },
  text5: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
    fontSize: hp(2),
  },
  signup: {
    marginTop: 10,
    width: 200,
    height: 40,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
