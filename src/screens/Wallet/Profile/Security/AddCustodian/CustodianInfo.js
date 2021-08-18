import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import {Switch} from 'react-native-elements';
import DarkButton from '../../../../../components/reusable/Button/DarkButton';
import Footer from '../../../../../components/reusable/Footer/Footer';
// import DarkButton from '../../../../components/reusable/Button/DarkButton';
// import Footer from '../../../../components/reusable/Footer/Footer';

export default function CustodianInfo({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
        <View style={styles.view1}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: hp('2%'),
              textAlign: 'center',
              width: wp('70%'),
            }}>
            All Cutodian details to recover your account
          </Text>
        </View>
        <View style={styles.view2}>
          <TextInput
            style={
              Platform.OS === 'ios' ? styles.TextInput1 : styles.TextInput2
            }
            // onChangeText={text => validate(text)}
            //   value={email}
            placeholder="First name & Last name"
          />
          <TextInput
            style={
              Platform.OS === 'ios' ? styles.TextInput1 : styles.TextInput2
            }
            // onChangeText={text => validate(text)}
            //   value={email}
            placeholder="Custodian Phone number"
          />
          <TextInput
            style={
              Platform.OS === 'ios' ? styles.TextInput1 : styles.TextInput2
            }
            // onChangeText={text => validate(text)}
            //   value={email}
            placeholder="Custodian Email"
          />
        </View>

        <View style={styles.view3}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: hp('2%'),
              textAlign: 'center',
              width: wp('70%'),
              marginBottom: hp('5%'),
            }}>
            A verification code will be sent to email and phone number to verify
          </Text>
          <DarkButton
            name="Next"
            onPress={() => navigation.navigate('Confirmation')}
          />
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

    width: wp('100%'),
  },
  view1: {
    flex: 0.4,

    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    width: wp('100%'),
    color: 'black',
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
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput1: {
    width: 330,
    margin: 5,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    color: 'black',

    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    elevation: 5,
  },
  TextInput2: {
    width: wp('85%'),
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    color: 'black',

    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    marginBottom: hp('1%'),
    elevation: 5,
  },
});
