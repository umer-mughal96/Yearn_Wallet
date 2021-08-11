import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import {Switch} from 'react-native-elements';
import DarkButton from '../../components/reusable/Button/DarkButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../../components/reusable/Footer/Footer';

export default function Currency({navigation}) {
  return (
    <View style={styles.container}>
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <View style={styles.view1}>
        <View style={{marginRight: wp('60%')}}>
          <Text style={{fontFamily: 'Poppins-Light'}}>Change Currency</Text>
        </View>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
            onPress={() => alert('asdasd')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.svgText}>$USD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Your Currency is $USD')}>
            <Icon name="chevron-forward-sharp" color="#000000" size={18} />
          </TouchableOpacity>
        </Card>
        <View style={{marginRight: wp('30%'), padding: 20}}>
          <Text style={{fontFamily: 'Poppins-Light'}}>
            Your Current Selected Currency is
          </Text>
        </View>
      </View>
</View>
      <View style={styles.view3}>
        <DarkButton
          name="Update"
          onPress={() => navigation.navigate('AppSetting')}
        />
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
    // justifyContent: 'center',
    // alignItems: 'center',
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
    fontFamily: 'Poppins-Regular',
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
