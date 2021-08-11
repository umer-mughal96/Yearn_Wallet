import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import {Switch} from 'react-native-switch';
import DarkButton from '../../components/reusable/Button/DarkButton';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  AddCustodianSvg,
  ChangePassSvg,
  ChangeRevSeedSvg,
  LoginFaceIdSvg,
  LoginFingerPrintSvg,
} from '../../svgs/Security';
import Footer from '../../components/reusable/Footer/Footer';


export default function Security({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 9}}>
        <View style={styles.view1}>
          <Card cornerRadius={12} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('recoverySeed')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ChangeRevSeedSvg />
              <Text style={styles.textview}>Change Recovery Seed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Your Currency is $USD')}>
              <Icon name="chevron-forward-sharp" color="#0b7f42" size={18} />
            </TouchableOpacity>
          </Card>
          <Card cornerRadius={12} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SecurityChangePass')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ChangePassSvg />
              <Text style={styles.textview}>Change Passcode</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Your Currency is $USD')}>
              <Icon name="chevron-forward-sharp" color="#0b7f42" size={18} />
            </TouchableOpacity>
          </Card>
          <Card cornerRadius={12} style={styles.card}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LoginFaceIdSvg />
              <Text style={styles.textview}>Login with Face ID</Text>
            </TouchableOpacity>

            <Switch
              trackColor={{false: 'white', true: 'white'}}
              thumbColor={isEnabled ? '#0B7F42' : '#f4f3f4'}
              ios_backgroundColor="white"
              onValueChange={toggleSwitch}
              value={isEnabled}
              
              style={{borderWidth: 0.2, borderColor: '#0B7F42'}}
              backgroundInactive={'#f0f0f0'}
              circleSize={28}
            />
          </Card>
          <Card cornerRadius={12} style={styles.card}>
            <TouchableOpacity
              // onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LoginFingerPrintSvg />
              <Text style={styles.textview}>Login With Fingerprint</Text>
            </TouchableOpacity>

            <Switch
              trackColor={{false: 'white', true: 'white'}}
              thumbColor={isEnabled1 ? '#0B7F42' : '#f4f3f4'}
              ios_backgroundColor="white"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
              style={{borderWidth: 0.2, borderColor: '#0B7F42'}}
              backgroundInactive={'#f0f0f0'}
              circleSize={28}
            />
          </Card>
          <Card cornerRadius={12} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CustodianInfo')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AddCustodianSvg />
              <Text style={styles.textview}>Add Custodian</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Your Currency is $USD')}>
              <Icon name="chevron-forward-sharp" color="#0b7f42" size={18} />
            </TouchableOpacity>
          </Card>
        </View>

        <View style={styles.view3}>
          <DarkButton name="Update" />
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
    justifyContent: 'center',
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
  textview: {
    fontSize: hp('2.0%'),
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
  },
  view3: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 320,
    margin: 5,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    elevation: 5,
  },
});
