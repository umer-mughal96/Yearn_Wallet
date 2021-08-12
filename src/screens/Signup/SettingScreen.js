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
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
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
              width: wp('24%'),
              height: hp('12%'),
              backgroundColor: 'white',
              borderRadius: 20,
              shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.5,
            elevation: 5,
            }}> 
            <TouchableOpacity
              onPress={() => navigation.navigate('Private_Key')}
             
              >
            
              <BtcCircleSvg />
            
            <Text
              style={{
                paddingTop: 10,
                fontFamily: 'Poppins-Medium',
                fontSize: 17,
              }}>
              BTC
            </Text>
            </TouchableOpacity>
          </Card>
          

          <Card
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: wp('24%'),
              height: hp('12%'),
              backgroundColor: 'white',
              elevation: 5,
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
              }}>
              ETH
            </Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={styles.view3}>
          <Card cornerRadius={14} style={styles.card}>
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
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('asdasd')}>
              <Icon name="chevron-forward-sharp" color="#000000" size={18} />
            </TouchableOpacity>
          </Card>
          <Card cornerRadius={14} style={styles.card}>
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
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('asdasd')}>
              <Icon name="chevron-forward-sharp" color="#000000" size={18} />
            </TouchableOpacity>
          </Card>

          <Card cornerRadius={14} style={styles.card}>
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
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="chevron-forward-sharp" color="#000000" size={18} />
            </TouchableOpacity>
          </Card>
          <Card cornerRadius={14} style={styles.card}>
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
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('asdasd')}>
              <Icon name="chevron-forward-sharp" color="#000000" size={18} />
            </TouchableOpacity>
          </Card>
          <Card cornerRadius={14} style={styles.card}>
            <TouchableOpacity
              onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <HelpAndSupSvg />
              <View style={styles.TextView}>
                <Text style={styles.svgText}>Help & Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('asdasd')}>
              <Icon name="chevron-forward-sharp" color="#000000" size={18} />
            </TouchableOpacity>
          </Card>
          <Card cornerRadius={14} style={styles.card}>
            <TouchableOpacity
              onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ReportBugSvg />
              <View style={styles.TextView}>
                <Text style={styles.svgText}>Report a Bug</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('asdasd')}>
              <Icon name="chevron-forward-sharp" color="#000000" size={18} />
            </TouchableOpacity>
          </Card>
          <Card cornerRadius={14} style={styles.card}>
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
            </TouchableOpacity>
            <Icon name="chevron-forward-sharp" color="#000000" size={18} />
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

    // width: wp('100%'),
  },
  view1: {
    flex: 0.4,
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    // flex: 0.7,
    flexDirection: 'row',
    marginTop: hp('1%'),
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('100%'),
    // height: wp('20%'),
  },
  view3: {
    flex: 1.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // width: wp('80%'),
    // height: hp('10%'),
  },
  card: {
    padding: 8,
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: wp('90%'),
    // height: hp('6.5%'),
  },
  headerText: {
    fontFamily: 'Poppins-Medium',
  },
  cardText: {
    fontFamily: 'Poppins-Medium',
  },
  svgText12: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  svgText: {
    fontSize: 20,

    fontFamily: 'Poppins-Medium',
  },
  TextView: {
    marginLeft: 10,
  },
});
