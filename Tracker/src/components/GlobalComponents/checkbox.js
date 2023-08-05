import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

/**
 * A customizable checkbox component.
 * 
 * @param {function} onCheckboxClick - Callback function when the checkbox is clicked.
 */
const Checkbox = ({ onCheckboxClick }) => {
    // State to track whether the checkbox is checked
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle checkbox press
    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
        // Call the optional prop function if provided
        if (onCheckboxClick) {
            onCheckboxClick(!isChecked);
        }
    };

    return (
        <TouchableOpacity
            style={[styles.checkboxContainer, isChecked && styles.checkedCheckbox]}
            onPress={handleCheckboxPress}
        >
            {/* Display checkmark icon if the checkbox is checked */}
            {isChecked && <Ionicons name="checkmark-sharp" size={16} color="#FFFFFF" />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#D2D2D2',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedCheckbox: {
        backgroundColor: 'black',
    },
});

export default Checkbox;
