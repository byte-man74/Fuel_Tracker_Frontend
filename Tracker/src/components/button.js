import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, color, width, height }) => {
    const buttonStyle = {
        ...styles.button,
        backgroundColor: color || styles.button.backgroundColor,
        width: width || styles.button.width,
        height: height || styles.button.height,
    };

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1E1E1E',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200, // Default width if not specified
        height: 50, // Default height if not specified
    },
    buttonText: {
        color: 'white',
        fontFamily: 'MulishBold',
        fontSize: 14,
    },
});

export default Button;
