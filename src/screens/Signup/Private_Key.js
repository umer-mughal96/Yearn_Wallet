import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Picker,
} from 'react-native';
import {Yearn_logo} from '../../svgs/Yearn_logo';
import Ticksvgscreen from '../../svgs/ticksvg';
import { BitSvg, CopySvg, ShareSvg } from '../../svgs/Refferral';
import Footer from '../../components/reusable/Footer/Footer';

export default function Private_Key({navigation}) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Card
          style={{
            borderRadius: 15,
            width: wp('60%'),
            height: hp('30%'),

            elevation: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BitSvg/>
          <Text
            style={{
              fontSize: hp('2%'),
              fontFamily:"Poppins-Medium"
            }}>
            BTC
          </Text>
          <Text
            style={{
              fontSize: hp('3%'),
              color: '#0a7c40',
              fontFamily:"Poppins-Regular"
            }}>
            Private Key
          </Text>
          <Text
            style={{
              // fontSize: hp('1.5%'),
              fontFamily:"Poppins-Regular"
            }}>
            ASDF5S4F456FA
          </Text>
        </Card>

      </View>
      <View
        style={{
          flex: .5,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            width: hp('25%'),
          }}>
          <Card
            style={{
              backgroundColor: 'white',
              width: wp('25%'),
              // height: hp('11%'),
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily:"Poppins-Regular"
            }}>
            <CopySvg/>
            <Text>Copy</Text>
          </Card>
          <Card
            style={{
              backgroundColor: 'white',
              width: wp('25%'),
              height: hp('11%'),
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily:"Poppins-Regular"
            }}>
            <ShareSvg/>
            <Text>Share</Text>
          </Card>
        </View>

        <View
          style={{
            paddingTop: hp('1.8%'),
            width: wp('45'),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignItems: 'center',
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: hp('1.5'),
              fontFamily:"Poppins-Light"
            }}>
            Your country of residence is based on the Region setting of iPhone
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Footer navigation={navigation} />
        </View>
    </View>
  );
}
