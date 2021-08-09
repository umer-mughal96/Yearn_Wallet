import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../screens/Landing';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup/Signup';
import CreatePasscode from '../screens/Signup/CreatePasscode';
import ConfirmPasscode from '../screens/Signup/ConfirmPasscode';
import CreateEmail from '../screens/Signup/CreateEmail';
import ConfirmEmail from '../screens/Signup/ConfirmEmail';
import EmailVerifyToken from '../screens/Signup/EmailVerifyToken';
import CreateMobile from '../screens/Signup/CreateMobile';
import ConfirmMobile from '../screens/Signup/ConfirmMobile';
import MobileVerifyToken from '../screens/Signup/MobileVerifyToken';
import AfterMobileVerify from '../screens/Signup/AfterMobileVerify';
import RecoverySeed from '../screens/Signup/RecoverySeed';
import WalletHome from '../screens/Wallet/WalletHome';
import DeFi from '../screens/Wallet/DeFi';
import ReferralScreen from '../screens/Signup/ReferralScreen';
import RestoreScreen from '../screens/Signup/RestoreScreen';
import RecoveryRestore from '../screens/Signup/RecoveryRestore';
import ProceedScreen from '../screens/Signup/ProceedScreen';
import PlasmaTopUp from '../screens/Signup/PlasmaTopUp5';
import PlasmaTopUp8 from '../screens/Signup/PlasaTopUp8';
import PlasmaPay1 from "../screens/Signup/PlasmaPay"
import PlasmaTopup2 from '../screens/Signup/PlasmaTopUp2';
import Camera from '../screens/Wallet/Capture';
import ProfileScreen from '../screens/Signup/SettingScreen';
import AppSetting from '../screens/Signup/AppSetting';
import AccountDetails from '../screens/Signup/AccountDetails';
import Home2 from '../screens/Signup/Home2';
import TopUP from '../screens/Signup/TopUp';
import AccountDetails2 from '../screens/Signup/AccountDetails2';
import Currency from '../screens/Signup/Currency';
import Security from '../screens/Signup/Security';
import CustodianInfo from '../screens/Signup/CustodianInfo';
import Confirmation from '../screens/Signup/Confirmation';
import Activity from '../screens/Signup/Activity';
import ProfileSetting from '../screens/Signup/ProfileSetting1';
import Sendbtc from '../screens/Signup/Sendbtc';



export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Landing"
        component={Landing}
      />
      <Stack.Screen
        options={{headerShown: true, title: ''}}
        name="restoreScreen"
        component={RestoreScreen}
      />
      <Stack.Screen
        options={{headerShown: true, title: ''}}
        name="proceedScreen"
        component={ProceedScreen}
      />
      <Stack.Screen
        options={{headerShown: true, title: ''}}
        name="recoveryRestore"
        component={RecoveryRestore}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="referralScreen"
        component={ReferralScreen}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        options={{headerShown: false}}
        name="Signin"
        component={Signin}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="createPasscode"
        component={CreatePasscode}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="confrimPasscode"
        component={ConfirmPasscode}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="createEmail"
        component={CreateEmail}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="confirmEmail"
        component={ConfirmEmail}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="verifyEmail"
        component={EmailVerifyToken}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="createMobile"
        component={CreateMobile}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="confirmMobile"
        component={ConfirmMobile}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="verifyMobile"
        component={MobileVerifyToken}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="afterMobileVerify"
        component={AfterMobileVerify}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="recoverySeed"
        component={RecoverySeed}
      />
      <Stack.Screen
        options={{
          title: 'Wallet',
          headerLeft: null,
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerBackTitleVisible: false,

          // headerTitleStyle: {
          //   fontFamily: 'Poppins-Medium',
          //   margin: 80,
          //   fontSize: 18,
          // },
        }}
        name="walletHome"
        component={WalletHome}
      />
      <Stack.Screen
        options={{
          title: 'De-Fi',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="defi"
        component={DeFi}
      />

      <Stack.Screen
        options={{
          title: 'Gift Card Topup',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="plasma5"
        component={PlasmaTopUp}
      />
      <Stack.Screen
        options={{
          title: 'Gift Card Topup',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="plasma8"
        component={PlasmaTopUp8}
      />
      <Stack.Screen
        options={{
          title: 'Topup',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="plasmaPay"
        component={PlasmaPay1}
      />
      <Stack.Screen
        options={{
          title: 'Topup',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="plasmaPay2"
        component={PlasmaTopup2}
      />
        <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          title: 'App settings',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="AppSetting"
        component={AppSetting} 
      />
     
      <Stack.Screen
        options={{
          title:'Account Details',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="accountDetails"
        component={AccountDetails}
      />
      <Stack.Screen
        options={{
          title:'Account Details',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="home2"
        component={Home2}
      />
      <Stack.Screen
        options={{
          title:'Account Details',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Topup"
        component={TopUP}
      />
      <Stack.Screen
        options={{
          title:'Account Details',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="AccountDetails2"
        component={AccountDetails2}
      />
      <Stack.Screen
        options={{
          title:'Currency',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Currency"
        component={Currency}
      />
      <Stack.Screen
        options={{
          title:'Currency',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Security"
        component={Security}
      />
      <Stack.Screen
        options={{
          title:'Custodian Information',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="CustodianInfo"
        component={CustodianInfo}
      />
      <Stack.Screen
        options={{
          title:'Custodian Information',
          title:'Custodian Information',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Confirmation"
        component={Confirmation}
      />
      <Stack.Screen
        options={{
          title:'Activity',
          
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Activity"
        component={Activity}
      />
      <Stack.Screen
        options={{
          title:'Activity',
          
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="ProfileSetting"
        component={ProfileSetting}
      />
      <Stack.Screen
        options={{
          title:'Activity',
          
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Sendbtc"
        component={Sendbtc}
      />
    </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({});
