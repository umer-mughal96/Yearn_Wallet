import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import { CurrencySvg, NotificationsSvg, TokenVisibilitySvg } from '../../svgs/AppSetting';
import Navigation from '../../navigation/Navigation';



export default function AppSetting({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("Currency")}
            
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CurrencySvg/>

            <Text style={styles.TextView}>Currency</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Icon name="chevron-forward-sharp" color="#000000" size={18} />
          </TouchableOpacity>
        </Card>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
           onPress={() => navigation.navigate("Activity")}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NotificationsSvg/>
            <Text style={styles.TextView}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Activity")}>
            <Icon name="chevron-forward-sharp" color="#000000" size={18} />
          </TouchableOpacity>
        </Card>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
            
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TokenVisibilitySvg/>
            <Text style={styles.TextView}>Token visibility</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Token')}>
            <Icon name="chevron-forward-sharp" color="#000000" size={18} />
          </TouchableOpacity>
        </Card>
      </View>

      <View style={styles.view2}>
        <Text>Navigation</Text>
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
    flex: 1,

    width: wp('100%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  view2: {
    flex: 1,

    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('95%'),
    height: hp('7%'),
  },
  TextView: {
    fontSize: 18,
    marginLeft:5,
    fontFamily: 'Poppins-Medium',
  },
});
