import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TextLink = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.linkText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    linkText: {
        fontFamily: 'Regular',
        fontSize: 14
    },
});

export default TextLink;
