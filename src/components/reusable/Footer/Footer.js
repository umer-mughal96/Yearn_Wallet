import { StyleSheet, Text, View } from 'react-native'
import React from "react"
import PathSvg from '../../../svgs/Path'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { DefiSvg, WalletSvg, MenuSvg, UsersSvg, ProfileSvg } from '../../../screens/Wallet/WalletHome'

export default function Footer({ navigation }) {
    return (
        <View style={styles.bottomNavigation}>
            <PathSvg />
            <DefiSvg />
            <View style={{ flexDirection: "row", position: "absolute", height: hp("8.5") }} >
                <WalletSvg />
                <MenuSvg navigation={navigation} />
                <Text style={{ width: wp("20%"), textAlign: "center", fontSize: hp("1.5"), color: "white", marginTop: hp("3") }}
                >
                    DEX
                </Text>
                <UsersSvg navigation={navigation} />
                <ProfileSvg navigation={navigation} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bottomNavigation: {
        // backgroundColor: 'red'
        justifyContent: "flex-end",


    },
})

