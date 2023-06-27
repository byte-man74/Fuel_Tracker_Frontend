import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Button from '../../components/button';
import Overlay from '../../components/overlay';
import LottieView from 'lottie-react-native';
import BottomSheet from '../../components/bottomSheet';




const { height, width } = Dimensions.get('window');

const PasswordReset = () => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [requirementsMet, setRequirementsMet] = useState({
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
        length: false,
    });

    useEffect(() => {
        const requirements = {
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            specialChar: /[!@#$%^&*]/.test(password),
            length: password.length >= 8,
        };

        setRequirementsMet(requirements);
    }, [password]);

    const handlePress = () => {
        // Navigate to the sign-in page
        openBottomSheet()
    };

    const openBottomSheet = () => {
        setBottomSheetVisible(true);
    };

    const closeBottomSheet = () => {
        setBottomSheetVisible(false);
    };


    const isButtonDisabled = password === '' || password !== confirmPassword;

    const renderRequirementItem = (text, isMet) => (
        <View style={styles.requirementItem}>
            {isMet ? (
                <Ionicons name="checkmark-circle" size={20} color="#00C72D" />
            ) : (
                <Ionicons name="close-circle" size={20} color="#FF1F1F" />
            )}
            <Text style={styles.requirementText}>{text}</Text>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {bottomSheetVisible && <Overlay />}
            <View>
                <ImageBackground
                    source={require('../../images/Background.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.formHeader}>
                        <Text style={styles.formHeaderTitle}>Create new password</Text>

                        <Text style={styles.formHeaderText}>
                            Your new password must be different from previously used password.
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.formContainerItem}>
                            <Text style={styles.formContainerText}>Password</Text>
                            <TextInput
                                style={styles.formInputBox}
                                placeholder="-- Enter --"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
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
                            <Text style={styles.formContainerText}>Confirm Password</Text>
                            <TextInput
                                style={styles.formInputBox}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholder="-- Enter --"
                                secureTextEntry={!showPassword}
                            />
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
                        <View style={styles.formCredentials}>
                            <Text style={styles.formCredentialsHeader}>
                                Password Requirements:
                            </Text>
                            {renderRequirementItem(
                                'At least 1 Upper Case',
                                requirementsMet.uppercase
                            )}
                            {renderRequirementItem(
                                'At least 1 Lower Case',
                                requirementsMet.lowercase
                            )}
                            {renderRequirementItem(
                                'At least 1 Number',
                                requirementsMet.number
                            )}
                            {renderRequirementItem(
                                'At least 1 Special Character/Symbol',
                                requirementsMet.specialChar
                            )}
                            {renderRequirementItem(
                                'At least 8 Characters',
                                requirementsMet.length
                            )}
                        </View>
                    </View>
                    <View style={styles.bottomCTA}>
                        <Button
                            title="Submit"
                            onPress={isButtonDisabled ? undefined : handlePress}
                            disabled={isButtonDisabled}
                            color={isButtonDisabled ? '#F6F6F6' : '#1E1E1E'} // Custom color
                            textColor={isButtonDisabled ? '#A9A9A9' : 'white'}
                            width={'100%'} // Custom width
                            height={55}
                        />
                    </View>
                </ImageBackground>
            </View>
            {/* bottom sheet box */}
            <BottomSheet
                isVisible={bottomSheetVisible}
                onDismiss={closeBottomSheet}
                snapPoints={['40%']}
            >
                <View style={styles.bottomSheetContent}>
                    <View style={styles.feedbackContainer}>
                        <LottieView
                            source={require('../../images/success.json')}
                            autoPlay
                            loop
                            style={styles.BottomSheetimage}
                        />
                        <Text style={styles.headFeedback}>
                            Password reset complete!
                        </Text>
                        <Text style={styles.bodyFeedback}>
                        Your have successfully changed your password!
                        </Text>
                        <Button
                            title="Proceed"
                            onPress={() => { console.log('me') }}
                            color="#1E1E1E"
                            width="100%"
                        />
                    </View>
                </View>
            </BottomSheet>
        </ScrollView>
    );
};

export default PasswordReset;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        minHeight: height,
    },
    BottomSheetimage: {
        width: '30%',
      },
    formHeader: {
        width: width,
        height: 90,
        justifyContent: 'space-between',
        marginTop: height * 0.11,
    },
    formHeaderTitle: {
        fontFamily: 'MulishBold',
        fontSize: 22,
        color: '#232323',
        paddingHorizontal: 30,
    },
    formHeaderText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',
        lineHeight: 25,
        paddingHorizontal: 30,
    },
    formContainer: {
        width: width,
        marginTop: 30,
        minHeight: height * 0.5,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    formContainerItem: {
        width: '100%',
        height: 90,
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    formContainerText: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#232323',
    },
    formInputBox: {
        width: '100%',
        height: '60%',
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
        top: '50%',
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
        width: '100%',
        height: 90,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
    },
    formCredentials: {
        width: '100%',
        height: 220,
        backgroundColor: '#F8F8F8',
        borderRadius: 6,
        paddingTop: 12,
        paddingLeft: 12,
    },
    formCredentialsHeader: {
        fontFamily: 'MulishBold',
        fontSize: 16,
        color: '#333333',
        marginBottom: 15,
    },
    requirementItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    requirementText: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#333333',
        marginLeft: 10,
    },
    headFeedback: {
        fontFamily: 'SemiBold',
        fontSize: 22,
        color: '#232323',
        marginBottom: 10,
        marginTop: 5,
        width: '85%',
        textAlign: 'center',
    },
    bodyFeedback: {
        fontFamily: 'Regular',
        fontSize: 16,
        width: '85%',
        color: '#232323',
        marginBottom: 60,
        lineHeight: 30,
        textAlign: 'center',
    },
    buttomsheetheader: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    feedbackContainer: {
        width: '100%',
        minHeight: 70,
        alignItems: 'center',
    },
    bottomSheetContent: {
        padding: 5,
        alignItems: 'center',
    },
});
