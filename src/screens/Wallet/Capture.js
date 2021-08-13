import React, { PureComponent } from 'react';
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity, View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Footer from '../../components/reusable/Footer/Footer';
import DarkButton from '../../components/reusable/Button/DarkButton';
import Navigation from '../../navigation/Navigation';
import { connect, useDispatch } from 'react-redux';
import { captureImage } from '../../redux/actions/user/user';

class Capture extends PureComponent {
    constructor(props) {
        super(props);

    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            // const data = await this.camera.takePictureAsync(options);
            this.camera.takePictureAsync(options).then(response => {
                this.props.addItem(this.props.navigation, response.uri)
                console.log(response.uri);
            })

            // alert('Success')


        }
    };



    render() {

        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    playSoundOnCapture={true}
                    captureAudio={false}

                >
                    <View style={{ flex: 0.36, justifyContent: 'center' }}>
                        <DarkButton name="Capture" disabled={false} onPress={this.takePicture.bind(this)} />
                    </View>
                </RNCamera>
                <Footer navigation={this.props.navigation} />

            </View>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addItem: (navigation, data) => {
            console.log(dispatch)
            dispatch(captureImage(navigation, data));
        },
    };
};


export default connect(null, mapDispatchToProps)(Capture)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});