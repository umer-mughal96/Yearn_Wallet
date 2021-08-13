import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  style,
  colors,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Yearn_logo} from '../../svgs/Yearn_logo';

import {Card} from 'react-native-shadow-cards';
import Footer from '../../components/reusable/Footer/Footer';

import LinearGradient from 'react-native-linear-gradient';
import {ButtonSendUpSvg, RecieveDownSvg, SendUpSvg} from '../../svgs/BtcDetail';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default function EtheriumDetail({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={{flex: 5, backgroundColor: 'white'}}>
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              marginTop: 42,
              marginBottom: 42,
              marginLeft: 32,
              marginRight: 32,
            }}>
            <Text>Total Balance</Text>
            <Text style={{fontSize: 34, color: '#0B7F42', fontWeight: 'bold'}}>
              0.7544 BTC
            </Text>
            <Text>$26,648.60</Text>
          </View>
          <View style={{flex: 2}}>
            <Card
              style={{
                alignContent: 'center',
                alignItems: 'center',
                width: '94%',
                height: 88,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 8,
                flexDirection: 'row',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: .5,
                elevation: 15,
              }}>
              {/* <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}> */}
              <View style={{marginLeft: 10}}>
                <SendUpSvg width={50} height={50} />
              </View>
              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Sent Ethereum
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>

              {/* </LinearGradient> */}
            </Card>
            
              <Card
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  width: '94%',
                  height: 88,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 8,
                  flexDirection: 'row',
                  borderRadius: 12,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: .5,
                  elevation: 15,
                }}>
                <View style={{marginLeft: 10}}>
                  <RecieveDownSvg width={50} height={50} />
                </View>

                <View
                  style={{
                    flex: 3,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#0A7C40',
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginLeft: 7,
                    }}>
                    Recieve Ethereum
                  </Text>
                  <Text style={{color: '#202020', marginLeft: 15}}>
                    0.7 BTC
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                    -0.75 BTC
                  </Text>
                  <Text style={{color: 'black', fontWeight: 'normal'}}>
                    13 June 2021
                  </Text>
                </View>
              </Card>
              <Card
              style={{
                alignContent: 'center',
                alignItems: 'center',
                width: '94%',
                height: 88,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 8,
                flexDirection: 'row',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: .5,
                elevation: 15,
              }}>
              {/* <LinearGradient colors={['#0B7F42', '#001A0A']} style={{ width: '100%', height: '100%', padding: 10, borderRadius: 12, flex: 1, flexDirection: 'row' }}> */}
              <View style={{marginLeft: 10}}>
                <SendUpSvg width={50} height={50} />
              </View>
              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Sent Ethereum
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>

              {/* </LinearGradient> */}
            </Card>
            <Card
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  width: '94%',
                  height: 88,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 8,
                  flexDirection: 'row',
                  borderRadius: 12,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: .5,
                  elevation: 15,
                }}>
                <View style={{marginLeft: 10}}>
                  <RecieveDownSvg width={50} height={50} />
                </View>

                <View
                  style={{
                    flex: 3,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#0A7C40',
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginLeft: 7,
                    }}>
                    Recieve Ethereum
                  </Text>
                  <Text style={{color: '#202020', marginLeft: 15}}>
                    0.7 BTC
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1.5,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                    -0.75 BTC
                  </Text>
                  <Text style={{color: 'black', fontWeight: 'normal'}}>
                    13 June 2021
                  </Text>
                </View>
              </Card>
              
         
          </View>
        </ScrollView>
       
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            // alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: ("25%"),
            
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('sendEth')}>
            <Card
              style={{
                width: heightPercentageToDP(20),
                height: 65,
                borderRadius: 12,
                backgroundColor: 'white',
                flexDirection: 'row',
                padding: 10,
                alignItems: 'center',
              }}>
              <ButtonSendUpSvg width={39} height={39} />
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 10}}>
                Send
              </Text>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('recieveEth')}>
            <Card
              style={{
                width: heightPercentageToDP(20),
                height: 65,
                borderRadius: 12,
                backgroundColor: 'white',
                marginLeft: 7,
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <LinearGradient
                colors={['#0B7F42', '#001A0A']}
                style={{
                  width: '100%',
                  height: '100%',
                  padding: 10,
                  borderRadius: 12,
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RecieveDownSvg width={39} height={39} />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginLeft: 10,
                    color: 'white',
                  }}>
                  Recieve
                </Text>
              </LinearGradient>
            </Card>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {},
  carousel: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    flexDirection: 'column',
  },
  balanceCard: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  information: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavigation: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'baseline',
    bottom: 0,
    position: 'absolute',
    zIndex: 5,
  },
  image: {
    flex: 2,
    margin: (1, 10, 1, 10),
  },
  svgText: {
    color: 'white',
    fontSize: 10,
    marginTop: 5,
  },
  cardText: {
    textAlignVertical: 'center',

    marginLeft: 15,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },

  totalBalance: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    // marginRight: 15.8
  },
});
