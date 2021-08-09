import React, { PureComponent } from 'react';
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity, Alert, StyleSheet, SafeAreaView,Text } from 'react-native';

export default class Camera extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            takingPic: false,
            box: null,
            leftEyePosition: null,
            rightEyePosition: null,
        };
    }

    takePicture = async () => {
        if (this.camera && !this.state.takingPic) {
            let options = {
                quality: 0.85,
                fixOrientation: true,
                forceUpOrientation: true,
            };

            this.setState({ takingPic: true });

            try {
                const data = await this.camera.takePictureAsync(options);
                this.setState({ takingPic: false }, () => {
                    this.props.onPicture(data);
                });
            } catch (err) {
                this.setState({ takingPic: false });
                Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
                return;
            }
        }
    };



    render() {
        return (
            <SafeAreaView>

                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    captureAudio={false}
                    style={{ flex: 1 }}
                    type={RNCamera.Constants.Type.front}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.btnAlignment}
                        onPress={this.takePicture}>
                        <Text>CAPTURE</Text>
                    </TouchableOpacity>
                </RNCamera>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    btnAlignment: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
});