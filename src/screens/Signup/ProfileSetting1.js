import React from 'react';

import {View, Text, StyleSheet} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {Icon_ionic_ios_add_circle} from "../../svgs/Icon ionic-ios-add-circle"
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ProfileSetting({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
      

      <Icon_ionic_ios_add_circle/>
      <Text style={styles.textview1}>Add new contact</Text>
      
      

      </View>
      <View style={styles.cardview}>
      <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
            onPress={() => alert('asdasd')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="search1" color="#0B7F42" size={30} />
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>
        </Card>
         </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    
  },
  view1:{
   flex:.2,

   alignItems:"center",
   flexDirection:"row",
   width:wp("80")
  },
  textview1:{
      fontFamily:"Poppins-Medium",
      fontSize:hp("2.5%"),
      paddingLeft:wp("2"),  
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('80%'),
    height: hp('7%'),
  },
  cardview:{
      flex:1,
      justifyContent:"flex-start",
      
  },
  text:{
      fontFamily:"poppins-light",
      fontSize:20,
  },
});
