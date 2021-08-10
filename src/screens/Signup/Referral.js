import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import {Text, TouchableOpacity, View} from 'react-native';
import { DollerSvg, ReferralCodeSvg, UserSvg } from '../../svgs/Refferral';

export default function Referral() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: hp("3"),
            fontFamily: 'Poppins-Bold',
            color: 'green',
          }}>
          Invite a friend
        </Text>
        <Text
          style={{
            fontSize: hp(1.9),
            fontFamily: 'Poppins-Regular',
            
          }}>
          Invite your friend to get bonus
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
          width: wp(75),
        }}>
        <Card
          style={{
            backgroundColor: 'white',
            width: wp('30%'),
            height: hp('13%'),
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 25,
          }}>
          <DollerSvg/>
          <Text
            style={{
              color: 'green',
              fontFamily: 'Poppins-Bold',
              fontSize: hp(2.5),
            }}>
            $344.89
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
            }}>
            Earned
          </Text>
        </Card>
        <Card
          style={{
            backgroundColor: 'white',
            width: wp('30%'),
            height: hp('13%'),
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 25,
          }}>
          <UserSvg/>
          <Text
            style={{
              color: 'green',
              fontFamily: 'Poppins-Bold',
              fontSize: hp(2.5),
            }}>
            21 People
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
            }}>
            Referred
          </Text>
        </Card>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: hp(1.9),
            fontFamily: 'Poppins-Regular',
          }}>
          Referred Code
        </Text>

        <Card
          style={{
            borderColor: 'white',
            borderWidth: hp(0.2),
            borderRadius: hp(1.5),
            width: hp(30),
            elevation: 5,
            shadowColor: 'black',
            height: hp(7),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: hp(2),
            }}>
            asdhkasdka32113
          </Text>
        </Card>

        <View
          style={{
            height: hp(8),
            justifyContent: 'flex-end',
            height: hp(10),
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: hp(2),
              textAlign: 'center',
              width: wp(88),
            }}>
            Refer Unlimited friends & receive 20.0% commission on every fee
            transaction they make
          </Text>
        </View>
        <ReferralCodeSvg/>
        <View
          style={{
            height: hp(25),
            flexDirection: 'row',
            width: wp(80),
            alignSelf: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            top: hp(2),
          }}>
          <Card
            style={{
              borderColor: 'white',
              borderWidth: hp(0.2),
              borderRadius: hp(1.5),
              width: hp(30),
              elevation: 5,
              shadowColor: 'black',
              height: hp(7),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: hp(2),
                color: 'green',
              }}>
              Copy Referral Code
            </Text>
          </Card>

          <Card
            style={{
              borderColor: 'white',
              borderWidth: hp(0.2),
              borderRadius: hp(1.5),
              width: hp(7),
              elevation: 5,
              justifyContent: 'flex-end',
              shadowColor: 'black',
              height: hp(7),
              marginLeft: hp(1),
              alignItems: 'center',
              justifyContent: 'center',
            }}></Card>
        </View>
      </View>
    </View>
  );
}
