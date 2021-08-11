import React from 'react';

import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Icon_ionic_ios_add_circle } from "../../svgs/Icon ionic-ios-add-circle"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/AntDesign';
import Footer from '../../components/reusable/Footer/Footer';

export default function ProfileSetting({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: "center",
    alignItems: "center",flex:1}}>
      <View style={styles.view1}>
        <Icon_ionic_ios_add_circle />
        <Text style={styles.textview1}>Add new contact</Text>
      </View>
      <View style={styles.cardview}>
        <Card cornerRadius={12} style={styles.card}>
          <Icon name="search1" color="#0B7F42" size={20} />
          <Text style={styles.text}>Search</Text>
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
    

  },
  view1: {
    flex: .2,

    alignItems: "center",
    flexDirection: "row",
    width: wp("80")
  },
  textview1: {
    fontFamily: "Poppins-Medium",
    fontSize: hp("2.5%"),
    paddingLeft: wp("2"),
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    width: wp('80%'),
    height: hp('5%'),
  },
  cardview: {
    flex: 1,
    justifyContent: "flex-start",

  },
  text: {
    fontFamily: "poppins-light",
    fontSize: 15,
    marginLeft: 10,
  },
});
