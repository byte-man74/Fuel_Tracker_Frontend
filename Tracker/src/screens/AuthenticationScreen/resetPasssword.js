import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Button from '../../components/button';

const { height, width } = Dimensions.get('window');

const PasswordReset = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignInPress = () => {
        // Navigate to the sign-in page
        navigation.navigate('Login');
    };
    const isButtonDisabled = password === '' || password !== confirmPassword;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <ImageBackground
                    source={require('../../images/Background.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.formHeader}>
                        <Text style={styles.formHeaderTitle}>
                            Create new password
                        </Text>

                        <Text style={styles.formHeaderText}>
                            Your new password must be different from previously used password.
                        </Text>

                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.formContainerItem}>
                            <Text style={styles.formContainerText} >
                                Password
                            </Text>
                            <TextInput
                                style={styles.formInputBox}
                                placeholder="-- Enter --"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword} />
                            <TouchableOpacity
                                style={styles.eyeIconContainer}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Ionicons
                                    name={showPassword ? 'eye' : 'eye-off'}
                                    size={24}
                                    color="#888"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.formContainerItem}>
                            <Text style={styles.formContainerText} >
                                Confirm Password
                            </Text>
                            <TextInput
                                style={styles.formInputBox}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholder="-- Enter --"
                                secureTextEntry={!showPassword} />
                            <TouchableOpacity
                                style={styles.eyeIconContainer}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Ionicons
                                    name={showPassword ? 'eye' : 'eye-off'}
                                    size={24}
                                    color="#888"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomCTA}>
                        <Button title="Submit"
                            onPress={() => { navigation.navigate('PasswordReset') }}
                            disabled={isButtonDisabled}
                            color={isButtonDisabled ? '#F6F6F6' : '#1E1E1E'} // Custom color
                            textColor={isButtonDisabled ? '#A9A9A9' : 'white'}
                            width={'100%'} // Custom width
                            height={55} />
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

export default PasswordReset


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        minHeight: height 
    },
    formHeader: {
        width: width,
        height: 90,
        justifyContent: 'space-between',
        marginTop: height * 0.11
    },
    formHeaderTitle: {
        fontFamily: 'MulishBold',
        fontSize: 22,
        color: '#232323',
        paddingHorizontal: 30
    },
    formHeaderText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',
        lineHeight: 25,
        paddingHorizontal: 30
    },
    formContainer: {
        width: width,
        marginTop: 30,
        minHeight: height * 0.5,
        paddingHorizontal: 30,
        alignItems: 'center'

    },
    formContainerItem: {
        width: "100%",
        height: 90,
        justifyContent: 'space-around',
        marginBottom: 20
    },
    formContainerText: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#232323',
    },
    formInputBox: {
        width: "100%",
        height: "60%",
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#AAAAAC',
        borderRadius: 12,
        paddingHorizontal: 10,
        fontFamily: 'Regular',
        fontSize: 16,
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 15,
        top: "50%"
    },
    otherCTA: {
        width: '100%',
        height: height * 0.4,
        paddingHorizontal: 30,


    },
    orContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 30,
        marginBottom: 10,
        alignItems: 'center',

    },
    bottomCTA: {
        width: "100%",
        height: 90,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
    },
});

