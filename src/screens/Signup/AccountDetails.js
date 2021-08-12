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
import Footer from '../../components/reusable/Footer/Footer';


export default function AccountDetails({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
        <View style={styles.view1}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: hp('3.5%'),
              color: '#0B7F42',
            }}>
            Username.YFIC.app
          </Text>
          <Text style={styles.svgText}>All details of your Account</Text>
        </View>
        <View style={styles.view2}>
          <Card cornerRadius={12} style={styles.card}>
           
              <Text style={styles.svgText}>+999-222-46433</Text>
            

            
              <Switch
              trackColor={{false: 'white', true: 'white'}}
              thumbColor={isEnabled ? '#0B7F42' : '#f4f3f4'}
              ios_backgroundColor="white"
              onValueChange={toggleSwitch}
              value={isEnabled}
              
              style={{borderWidth: 0.2, borderColor: '#0B7F42'}}
              backgroundInactive={'#f0f0f0'}
              circleSize={28}
            />
            
          </Card>
          <Card cornerRadius={12} style={styles.card}>
           
              <Text style={styles.svgText}>youremail@gmail.com</Text>
           
          
              <Switch
              trackColor={{false: 'white', true: 'white'}}
              thumbColor={isEnabled1 ? '#0B7F42' : '#f4f3f4'}
              ios_backgroundColor="white"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
              style={{borderWidth: 0.2, borderColor: '#0B7F42'}}
              backgroundInactive={'#f0f0f0'}
              circleSize={28}
            />
           
          </Card>
        </View>
      </View>

      <View style={styles.view3}>
        <DarkButton name="Change Details" 
        onPress={()=>navigation.navigate("AccountDetails2")} />
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
});
