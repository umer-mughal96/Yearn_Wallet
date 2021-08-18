import React from 'react';
import {View, StyleSheet, Text, TextInput, Keyboard} from 'react-native';
// import DarkButton from '../src/components/reusable/Button/DarkButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Footer from '../../components/reusable/Footer/Footer';
import {Card} from 'react-native-shadow-cards';
import {Platform} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';

export default function GiftCardInfo({navigation}) {
  const [keyboardIsOpen, setKeyboardIsOpen] = React.useState(false);
  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardIsOpen(true);
  });
  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardIsOpen(false);
  });
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text
          style={{
            marginTop: 15,
            fontSize: 19,
            textAlign: 'center',
            fontFamily: 'Poppins-Medium',
          }}>
          Please enter your gift card details
        </Text>
      </View>

      <View style={Platform.OS === 'ios' ? styles.viewIos1 : styles.viewandr1}>
        <Card
          style={
            Platform.OS === 'ios'
              ? styles.CardViewMainIos
              : styles.CardViewMainAndr
          }>
          <Card
            style={
              Platform.OS === 'ios' ? styles.CardViewIos : styles.CardViewAndr
            }>
            <Text
              style={{
                // width: wp('60%'),
                marginLeft: '5%',
                fontSize: 18,
              }}>
              Card Number
            </Text>
            <TextInput
              style={styles.text1}
              placeholder="0000-0000-000"></TextInput>
          </Card>
          <Card
            style={
              Platform.OS === 'ios' ? styles.CardViewIos : styles.CardViewAndr
            }>
            <Text
              style={{
                width: wp('60%'),
                marginLeft: '5%',
                fontSize: 18,
              }}>
              Exp
            </Text>
            <TextInput style={styles.text1} placeholder="mm/yyyy"></TextInput>
          </Card>
          <Card
            style={
              Platform.OS === 'ios' ? styles.CardViewIos : styles.CardViewAndr
            }>
            <Text
              style={{
                width: wp('60%'),
                marginLeft: '5%',
                fontSize: 18,
              }}>
              CVC
            </Text>
            <TextInput style={styles.text1} placeholder="000"></TextInput>
          </Card>
        </Card>
        <Card
          style={
            Platform.OS === 'ios' ? styles.BottomCardios : styles.BottomCardAndr
          }>
          <Card
            style={
              Platform.OS === 'ios'
                ? styles.BotomCardViewIos
                : styles.CardViewAndr
            }>
            <Text
              style={{
                marginLeft: '5%',
                fontSize: 18,
              }}>
              Wallet Address
            </Text>
            <TextInput
              style={styles.text1}
              placeholder="fssafhks53523435h2352"></TextInput>
          </Card>
        </Card>
      </View>

      <View
        style={Platform.OS === 'ios' ? styles.BtnViewIos : styles.BtnViewAndr}>
        <DarkButton
          name="Next"
          onPress={() => navigation.navigate('capture')}
        />
      </View>
      {!keyboardIsOpen && (
        <View
          style={{
            flex: 0.5,
            justifyContent: 'flex-end',
          }}>
          <Footer navigation={navigation} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewandr1: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  viewIos1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  BtnViewAndr: {
    flex: 0.9,

    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnViewIos: {
    flex: 0.3,
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text1: {
    marginLeft: '5%',
    fontSize: 20,
  },
  CardViewAndr: {
    borderWidth: 0.4,
    borderColor: '#0B7F42',
    borderRadius: 10,
    margin: 5,
    width: '89%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
  },
  CardViewIos: {
    flex: 0.3,
    borderWidth: 0.4,
    borderColor: '#0B7F42',
    borderRadius: 10,
    margin: 5,
    width: '89%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
    // backgroundColor: 'red',
  },
  BotomCardViewIos: {
    flex: 0.5,
    borderWidth: 0.4,
    borderColor: '#0B7F42',
    borderRadius: 10,
    margin: 5,
    width: '89%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
    // backgroundColor: 'red',
  },
  CardViewMainAndr: {
    flex: 0.8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
    justifyContent: 'center',
  },
  CardViewMainIos: {
    flex: 0.6,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
    justifyContent: 'center',
  },
  BottomCardios: {
    flex: 0.3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
    justifyContent: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  BottomCardAndr: {
    // flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
    justifyContent: 'center',
    marginTop: 10,
  },
});
