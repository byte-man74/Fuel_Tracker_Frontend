import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    return (
        <TouchableOpacity
            style={[styles.checkboxContainer, isChecked && styles.checkedCheckbox]}
            onPress={handleCheckboxPress}
        >
            {isChecked && <Ionicons name="checkmark-sharp" size={24} color="#FFFFFF" />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#AAAAAA',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedCheckbox: {
        backgroundColor: '#007AFF',
    },
});

export default Checkbox;
