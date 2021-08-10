import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Style,
  A,
  Circle,
} from 'react-native-svg';
import { AccountSvg, AppSettingSvg, BtcCircleSvg, EthCircleSvg, HelpAndSupSvg, LogOutSvg, ReportBugSvg, RerferralSvg, SecuritySvg, YficCircleSvg } from '../../svgs/Profile';



export default function SettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text
          style={{
            fontSize: 29,
            color: '#0B7F42',
            paddingTop: 5,
            fontFamily: 'Poppins-Bold',
          }}>
          Private Key
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular'}}>Tap any to show key</Text>
      </View>

      <View style={styles.view2}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: wp('27%'),
            height: hp('15%'),
            backgroundColor: 'white',
            elevation: 10,
            borderRadius: 20,
          }}>
          <YficCircleSvg />
          <Text style={{paddingTop: 10, fontFamily: 'Poppins-Medium',fontSize:17}}>
            YFIC
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: wp('27%'),
            height: hp('15%'),
            backgroundColor: 'white',
            elevation: 10,
            borderRadius: 20,
          }}>
          <BtcCircleSvg/>
          <Text style={{paddingTop: 10, fontFamily: 'Poppins-Medium',fontSize:17}}>
            BTC
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: wp('27%'),
            height: hp('15%'),
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 20,
          }}>
          <EthCircleSvg/>
          <Text style={{paddingTop: 10, fontFamily: 'Poppins-Medium',fontSize:17}}>
            ETH
          </Text>
        </View>
      </View>

      <View style={styles.view3}>
        <Card cornerRadius={14} style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AccountDetails2")}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AccountSvg/>
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
            <SecuritySvg/>
            <View style={styles.TextView}>
              <Text style={styles.svgText}>Security</Text>
              <Text style={styles.svgText12}>Daily limit, Passcode, Fingerprint/FaceID</Text>
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
            <AppSettingSvg/>
            <View style={styles.TextView}>
              <Text style={styles.svgText}>App Settings</Text>
              <Text style={styles.svgText12}>Tokens, currency, notifications</Text>
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
            <RerferralSvg/>
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
            <HelpAndSupSvg/>
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
            <ReportBugSvg/>
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
            onPress={() => alert('asdasd')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LogOutSvg/>
            <View style={styles.TextView} >
              <Text style={styles.svgText}>Log Out</Text>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('asdasd')}>
            <Icon name="chevron-forward-sharp" color="#000000" size={18} />
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
  },
  view1: {
    flex: 0.7,
    marginTop:hp("1%"),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: wp('20%'),
  },
  view2: {
    flex: 1.9,
    flexDirection: 'row',
    marginTop:hp("1%"),
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('100%'),
    height: wp('20%'),
  },
  view3: {
    flex: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('80%'),
    height: hp('10%'),
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('90%'),
    height: hp('6.5%'),
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
  TextView:{
    marginLeft:10,
    
    
    
  },
});
