import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  style,
  colors,
  ScrollView,
  SafeAreaView,
  TextInput,
  Picker,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Switch} from 'react-native-elements';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import {TopUpGiftSvg} from '../../svgs/Refferral';
import {patchWebProps} from 'react-native-elements/dist/helpers';
import Footer from '../../components/reusable/Footer/Footer';

export default function TopUP({navigation}) {
  return (
    <View style={{flex: 1, }}>
      <View style={{flex: 1 ,  alignItems: 'center'}}>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate("plasma5")}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TopUpGiftSvg />
            <Text style={styles.svgText}>Gift Card</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Your Currency is $USD')}>
            <Icon name="chevron-forward-sharp" color="#000000" size={18} />
          </TouchableOpacity>
        </Card>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
  },
  view1: {
    flex: 0.4,

    width: wp('100%'),
    justifyContent: 'center',
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
  svgText: {
    fontSize: hp('2%'),
    marginLeft: wp('2'),
    fontFamily: 'Poppins-Medium',
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 320,
    margin: 5,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    elevation: 5,
  },
});
