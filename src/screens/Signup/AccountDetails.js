import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import {Switch} from 'react-native-elements';
import DarkButton from '../../components/reusable/Button/DarkButton';
export default function AccountDetails({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
    <View style={styles.view1}>
    <Text style={{fontFamily:"Poppins-Bold",fontSize:hp("3.5%"),color:"#0B7F42"}}>Username.YFIC.app</Text>
    <Text style={styles.svgText}>All details of your Account</Text>

    </View>
      <View style={styles.view2}>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
            onPress={() => alert('asdasd')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.svgText}>+999-222-46433</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => alert('asdasd')}>
            <Switch
              trackColor={{false: 'white', true: 'white'}}
              thumbColor={isEnabled ? '#0B7F42' : '#f4f3f4'}
              ios_backgroundColor="white"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{borderWidth:.2,borderColor:"#0B7F42"}}
            />
          </TouchableOpacity>
        </Card>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
            onPress={() => alert('asdasd')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.svgText}>youremail@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('asdasd')}>
            <Switch
              trackColor={{false: '#767577', true: 'white'}}
              thumbColor={isEnabled ? '#0B7F42' : '#f4f3f4'}
              ios_backgroundColor="white"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{borderWidth:.2,borderColor:"#0B7F42"}}
            />
          </TouchableOpacity>
        </Card>
      </View>
   
   <View style={styles.view3}>
   
   <DarkButton name="Change Details"/>
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
    flex: .4,

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
    fontSize: hp("2%"),
    fontFamily: 'Poppins-Regular',
  },
  view3:{
      flex:1,
     justifyContent:"center",
     alignItems:"center",
  },
});
