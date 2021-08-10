import React, { useEffect } from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../config/colors';
import LightButton from '../components/reusable/Button/LightButton';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../redux/actions/auth/auth';
import LinearGradient from 'react-native-linear-gradient';
import {LandingLogo} from '../svgs/LandingLogo'
import "../../global"
import Web3 from 'web3'
import * as bitcoin from "bitcoinjs-lib"
import { createBTCWallet } from '../redux/actions/btc/btc';
import { createETHWallet } from '../redux/actions/eth/eth';


export default function ({ navigation }) {
  const { token } = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogout());
  }, []);



  // const createWallett = async () => {

  //   try {


  //     //GENERATE BITCOIN ADDRESS



  //     const keyPair = await bitcoin.ECPair.makeRandom();
  //     console.log("🚀 ~ file: App.js ~ line 28 ~ useEffect ~ keyPair", keyPair)
  //     const wallet = await bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
  //     console.log("🚀 ~ file: App.js ~ line 27 ~ useEffect ~ address", wallet)
  //     dispatch(createBTCWallet(wallet))



  //     // GET ETHERIUMM BALANCE BY PUBLIC KEY

  //     const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/a1bbc7b88cb54b16993c14bf231bbce9"))

  //     // web3.eth.getBalance("0x5455F4F3C807a09ab032e21a27B6A202B2f582D7", function (err, result) {
  //     //   if (err) {
  //     //     console.log(err)
  //     //   } else {
  //     //     console.log(web3.utils.fromWei(result, "ether") + " ETHHHHH")
  //     //   }
  //     // })


  //     let acc = web3.eth.accounts.create("00000000000000000000000000000000");
  //     console.log("🚀 ~ file: Landing.js ~ line 64 ~ createWallett ~ acc", acc)
  //     dispatch(createETHWallet(acc))

  //     navigation.navigate("walletHome")


  //   } catch (error) {
  //     console.log("🚀 ~ file: Landing.js ~ line 31 ~ createWallett ~ error", error)

  //   }
  // }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0B7F42', '#001A0A']}
        style={styles.linearGradient}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.main}
          translucent={true}
        />

        <View style={styles.svgWraper}>

          <LandingLogo></LandingLogo>
        
          {/* <Text   id='Yearn_Cash' data-name="Yearn Cash" transform="translate(121.5 511)" fill='#EEF0FF' font-size="39" font-family="Poppins-Semibold, Poppins" font-weight="600" >Yearn Cash</Text> */}

          <Text style={{ color: '#EEF0FF', fontSize: 29, fontFamily: 'Poppins' }}>
            YEARN CASH
          </Text>
        </View>

        <View style={styles.buttonsWrapper}>
          <View style={styles.referalWrapper}>
            <Text
              style={styles.referalCode}
              onPress={() => navigation.navigate('referralScreen')}>
              Invited? Add Referral Code
            </Text>
          </View>
          <LightButton
            name="Login"
            onPress={() => navigation.navigate("Signin")}
          />
          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.navigate('createPasscode')} >
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.main,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
  },
  svgWraper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
  referalWrapper: {
    width: 200,
  },
  signup: {
    marginTop: 10,
    width: 200,
    height: 40,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  signupText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  referalCode: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
