import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Footer from '../../components/reusable/Footer/Footer';

export default function SendEth({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center', flex: 4
      }}>
        <View style={styles.view1}>
          <Text style={{ fontFamily: 'Poppins-Medium' }}>Availale Balance</Text>
          <Text
            style={{
              fontSize: hp('4'),
              color: '#0B7F42',
              fontFamily: 'Poppins-SemiBold',
            }}>
            0.7544 ETH
          </Text>
          <Text style={{ fontFamily: 'Poppins-medium' }}>$26,648.60</Text>
        </View>

        <View style={styles.view2}>
          <Card
            style={{
              width: wp('90%'),
              height: hp('60%'),
              alignSelf: 'center',
              borderRadius: 21,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              elevation: 5,
            }}>
            <Card
              style={{
                borderRadius: 8,
                borderWidth: 1,
                borderWidth: 0.5,
                borderColor: '#0B7F42',
                alignSelf: 'center',
                height: 74,
                width: wp('85%'),
                marginTop: 15,
              }}>
              <Text style={{ left: 13, top: 7, fontFamily: 'Poppins-Regular' }}>
                How much you want to send?
              </Text>
            </Card>
            <Card
              style={{
                borderRadius: 8,
                height: hp('10%'),
                marginTop: -40,

                borderWidth: 0.5,
                borderColor: '#0B7F42',
                width: wp('85%'),
                alignSelf: 'center',
              }}>
              <Text style={{ left: 13, top: 7, fontFamily: 'poppins-Regular' }}>
                Your Amount
              </Text>

              <View style={{ flexDirection: 'row', top: 3 }}>
                <TextInput
                  style={{
                    left: 13,
                    top: 7,
                    fontWeight: 'bold',
                    fontSize: 20,
                    textContentType: 'number',
                    width: wp('80%'),
                  }}
                  placeholder="$000.0"
                  keyboardType="decimal-pad"></TextInput>
                <Picker
                  // selectedValue={selectedValue}
                  style={{
                    height: 50,
                    width: 100,
                    fontSize: 18,
                    fontWeight: 'bold',
                    left: '256%',
                  }}
                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="USD" value="usd" />
                  <Picker.Item label="ETH" value="eth" />

                  <Picker.Item label="ETH" value="ETH" />
                </Picker>
              </View>
            </Card>

            <Text style={{ top: 10, left: 24 }}>=7424.898ETH</Text>

            {/* </LinearGradient> */}

            <Card
              style={{
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'red',

                borderWidth: 0.5,
                borderColor: '#0B7F42',
                alignSelf: 'center',
                height: 74,
                width: '95%',
                marginTop: 42,
              }}>
              <Text style={{ left: 13, top: 7 }}>Wallet Address to Send</Text>
            </Card>
            <Card
              style={{
                borderRadius: 8,
                height: 78,
                marginTop: -40,

                borderWidth: 0.5,
                borderColor: '#0B7F42',
                width: '95%',
                alignSelf: 'center',
              }}>
              <View style={{ flexDirection: 'row', top: 3 }}>
                <TextInput
                  style={{ left: 13, top: 7, fontWeight: 'bold', fontSize: 20 }}
                  placeholder="adasdn4531ads15a1d3w1aw1d"></TextInput>
                {/* <TextInputMask   placeholder='$00.00' onChangeText={(formatted, extracted) => {
    console.log(formatted) // +1 (123) 456-78-90
    console.log(extracted) // 1234567890
  }}
     
     textContentType="postalCode" 

     mask={"$"}
  >

  </TextInputMask> */}
              </View>

              <Card
                style={{
                  top: 75,
                  backgroundColor: '#0B7F42',
                  borderRadius: 16,
                  width: '95%',
                  alignSelf: 'center',
                  height: 54,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('walletHome')}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 18,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    NEXT
                  </Text>
                </TouchableOpacity>
              </Card>
            </Card>
          </Card>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  view1: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 3,

    width: wp('100'),
  },
});
