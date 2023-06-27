import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';

const { height, width } = Dimensions.get('window');

const Overlay = ({ navigation }) => {

    return (
        <View style={styles.overlay} />
    );
};

const styles = StyleSheet.create({
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 200,
        backgroundColor: 'rgba(51, 51, 51, 0.54)',
    }
});

export default Overlay;
