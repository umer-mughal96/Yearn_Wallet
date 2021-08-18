import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import Footer from '../../components/reusable/Footer/Footer';

import LinearGradient from 'react-native-linear-gradient';
import {Yearn_logo, BitcoinSvg, EthSvg} from '../../svgs/YearnSvg';
import {colors} from '../../config/colors';
import PathSvg from '../../svgs/PathSvg';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import Web3 from 'web3';
import BalanceCarousel from '../../components/reusable/Carousel/Carousel';
import {EyeSvg, UpSvg} from '../../svgs/WalletHomeSvgs';

export default function WalletHome({navigation}) {
  const {btc} = useSelector(s => s.Btc);
  const {eth} = useSelector(s => s.Eth);

  const [ethBalance, setEthereumBalance] = useState('');
  const [yficBalance, setYficBalance] = useState('');
  console.log(
    '🚀 ~ file: WalletHome.js ~ line 292 ~ WalletHome ~ yficBalance',
    yficBalance,
  );
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      'https://mainnet.infura.io/v3/a1bbc7b88cb54b16993c14bf231bbce9',
    ),
  );

  // useEffect(async () => {

  //   if (eth) {
  //     // console.log("🚀 ~ file: WalletHome.js ~ line 297 ~ WalletHome ~ eth", eth)
  //     // console.log("🚀 ~ file: WalletHome.js ~ line 297 ~ WalletHome ~ btc", btc)
  //     web3.eth.getBalance(eth.address, function (err, result) {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         console.log(web3.utils.fromWei(result, "ether") + " E")
  //         setEthereumBalance(result)
  //       }
  //     })
  //   }

  //   const abi = [
  //     {
  //       constant: true,
  //       inputs: [{ name: "_owner", type: "address" }],
  //       name: "balanceOf",
  //       outputs: [{ name: "balance", type: "uint256" }],
  //       type: "function",
  //     }
  //   ]
  //   const contractAddress = "0x9CF4679c67BEE8dA2D6F58c64592fFf6beE79330"
  //   const contract = new web3.eth.Contract(abi, contractAddress);
  //   async function getBalance() {
  //     const result = await contract.methods.balanceOf(eth.address).call(); // 29803630997051883414242659
  //     const format = web3.utils.fromWei(result); // 29803630.997051883414242659
  //     setYficBalance(format)

  //   }
  //   const b = await getBalance();

  // }, [eth])

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: wp('40%'),
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text style={styles.totalBalance}>Total Balance</Text>
            <EyeSvg />
          </View>
          <View style={{flex: 3}}>
            <BalanceCarousel yficBalance={yficBalance} />
          </View>

          {/* <Text style={styles.blurryText1}>Currency USD</Text>
          <Text style={styles.blurryText2}>$ {yficBalance}</Text>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
            <View>
              <Yearn_logo width={hp("3%")} height={wp("5%")} />
            </View>
            <Text style={styles.blurryText3}>YFIC</Text>
          </View> */}
        </View>
      </View>
      <View style={styles.information}>
        <TouchableOpacity onPress={() => navigation.navigate('Topup')}>
          <UpSvg />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Topup')}>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 3,
              fontFamily: 'Poppins-Medium',
            }}>
            Top up your Account now
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.balanceCard}>
        <ScrollView style={{width: wp('100%')}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('WalletSats')}>
              <Card style={styles.card}>
                <LinearGradient
                  colors={['#0B7F42', '#001A0A']}
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: 10,
                    borderRadius: 12,
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <Yearn_logo width={63} height={63} />
                  <View
                    style={{
                      flex: 3,
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.cardText}>Yearn Cash</Text>
                    <Text style={{color: 'white', marginLeft: 15}}>YFIC</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      $1000
                    </Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      +14.22%
                    </Text>
                  </View>
                </LinearGradient>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ethDetail')}>
              <Card style={styles.card}>
                <LinearGradient
                  colors={['#0B7F42', '#001A0A']}
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: 10,
                    borderRadius: 12,
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <EthSvg width={63} height={63} />
                  <View
                    style={{
                      flex: 3,
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.cardText}>Ethereum</Text>
                    <Text style={{color: 'white', marginLeft: 15}}>ETH</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      $100
                    </Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      -8.22%
                    </Text>
                  </View>
                </LinearGradient>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('BitCoin')}>
              <Card style={styles.card}>
                <LinearGradient
                  colors={['#0B7F42', '#001A0A']}
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: 10,
                    borderRadius: 12,
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <BitcoinSvg width={63} height={63} />
                  <View
                    style={{
                      flex: 3,
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.cardText}>Bitcoin</Text>
                    <Text style={{color: 'white', marginLeft: 15}}>BTC</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      $1100
                    </Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      +5.22%
                    </Text>
                  </View>
                </LinearGradient>
              </Card>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: wp('100%'),
    height: hp('100%'),
  },
  carousel: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    flexDirection: 'column',
  },
  balanceCard: {
    flex: 4,
    alignItems: 'center',
  },
  card: {borderRadius: 12, marginBottom: 9},
  information: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    flex: 2,
    margin: (1, 10, 1, 10),
  },
  svgText: {
    color: 'white',
    fontSize: 10,
  },
  cardText: {
    textAlignVertical: 'center',

    marginLeft: 15,
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  blurryText1: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: colors.main,
    height: hp('2.5%'),
  },
  blurryText2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: colors.main,
  },
  blurryText3: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.main,
  },
  totalBalance: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    // marginRight: 15.8,
  },
  bottomNavText: {textAlign: 'center', color: 'white'},
});
