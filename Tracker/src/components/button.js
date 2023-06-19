import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const Button = ({
    title,
    onPress,
    color,
    width,
    height,
    imageSource,
    textColor = 'white',
}) => {
    const buttonStyles = [
        styles.button,
        { backgroundColor: color, width, height },
    ];
    const textStyles = [styles.buttonText, { color: textColor }];

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            {imageSource && <Image source={imageSource} style={styles.buttonImage} />}
            <Text style={textStyles}>{title}</Text>
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
        fontFamily: 'MulishBold',
        fontSize: 14,
    },
});

export default Button;
