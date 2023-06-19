import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const Button = ({ title, onPress, color, width, height, imageSource }) => {
    const buttonStyles = [
        styles.button,
        { backgroundColor: color, width, height }
    ];

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            {imageSource && <Image source={imageSource} style={styles.buttonImage} />}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonImage: {
        marginRight: 8,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'MulishBold',
        fontSize: 14,
    },
});

export default Button;
