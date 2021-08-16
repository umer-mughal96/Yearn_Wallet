import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AccountSvg,
  AppSettingSvg,
  BtcCircleSvg,
  EthCircleSvg,
  HelpAndSupSvg,
  LogOutSvg,
  ReportBugSvg,
  RerferralSvg,
  SecuritySvg,
  YficCircleSvg,
} from '../../svgs/Profile';
import Footer from '../../components/reusable/Footer/Footer';

export default function SettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 0.6}}>
        <View style={styles.view1}>
          <Text
            style={{
              fontSize: 29,
              color: '#0B7F42',
              fontFamily: 'Poppins-Bold',
            }}>
            Private Key
          </Text>
          <Text style={{fontFamily: 'Poppins-Regular'}}>
            Tap any to show key
          </Text>
        </View>

        <View style={styles.view2}>
          <Card
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: wp('27%'),
              height: hp('11.5%'),
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.5,
              elevation: 5,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Private_Key')}>
              <BtcCircleSvg />

              <Text
                style={{
                  paddingTop: 10,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 17,
                  marginLeft: 5,
                }}>
                BTC
              </Text>
            </TouchableOpacity>
          </Card>

          <Card
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: wp('27%'),
              height: hp('11.5%'),

              shadowColor: '#000',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.5,
              elevation: 15,
              borderRadius: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ETH_Private_Key')}>
              <EthCircleSvg />

              <Text
                style={{
                  paddingTop: 10,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 17,
                  marginLeft: 5,
                }}>
                ETH
              </Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={styles.view3}>
          <Card
            cornerRadius={14}
            style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
            <TouchableOpacity
              onPress={() => navigation.navigate('accountDetails')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AccountSvg />
              <View style={styles.TextView}>
                <Text style={styles.svgText}>Account Details</Text>
                <Text style={styles.svgText12}>Token exchange</Text>
              </View>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '33%'}}
              />
            </TouchableOpacity>
          </Card>
          <Card
            cornerRadius={14}
            style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Security')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SecuritySvg />
              <View style={styles.TextView}>
                <Text style={styles.svgText}>Security</Text>
                <Text style={styles.svgText12}>
                  Daily limit, Passcode, Fingerprint/FaceID
                </Text>
              </View>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '12%'}}
              />
            </TouchableOpacity>
          </Card>

          <Card
            cornerRadius={14}
            style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AppSetting')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AppSettingSvg />
              <View style={styles.TextView}>
                <Text style={styles.svgText}>App Settings</Text>
                <Text style={styles.svgText12}>
                  Tokens, currency, notifications
                </Text>
              </View>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '28%'}}
              />
            </TouchableOpacity>
          </Card>
          <Card
            cornerRadius={14}
            style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Referral')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RerferralSvg />
              <View style={styles.TextView}>
                <Text style={styles.svgText}>Referrals Earnings</Text>
                <Text style={styles.svgText12}>you all referral earnings</Text>
              </View>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '27%'}}
              />
            </TouchableOpacity>
          </Card>
          <Card
            cornerRadius={14}
            style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
            <TouchableOpacity
              onPress={() => alert('Help & Support')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <HelpAndSupSvg />
              <View style={styles.TextView}>
                <Text style={styles.svgText}>Help & Support</Text>
              </View>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '35%'}}
              />
            </TouchableOpacity>
          </Card>
          <Card
            cornerRadius={14}
            style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
            <TouchableOpacity
              onPress={() => alert('Bug reported')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ReportBugSvg />
              <View style={styles.TextView}>
                <Text style={styles.svgText}>Report a Bug</Text>
              </View>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '41%'}}
              />
            </TouchableOpacity>
          </Card>
          <Card
            cornerRadius={14}
            style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Landing')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LogOutSvg />
              <View style={styles.TextView}>
                <Text style={styles.svgText}>Log Out</Text>
              </View>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '56%'}}
              />
            </TouchableOpacity>
          </Card>
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
    backgroundColor: '#FFFFFF',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  view2: {
    flex: 1.7,
    flexDirection: 'row',
    marginTop: hp('1%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp('100%'),
  },
  view3: {
    flex: 1.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  card: {
    padding: 7,
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    elevation: 10,
    // backgroundColor:"red"
  },
  Andrcard: {
    padding: 3.5,
    flexDirection: 'row',
    marginTop: 4.5,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    elevation: 10,
  },
  svgText12: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
  },
  svgText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  TextView: {
    marginLeft: 10,
  },
});
