import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const StateModal = ({ setModal, navigation }) => {
  const [lga, setLGA] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);

  const sections = [
    { title: 'Dropdown List', data: items }, // Add more sections if needed
  ];

  return (
    <View style={styles.overlay}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <DropDownPicker
            open={open}
            value={value}
            items={item.data}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={(itemValue) => setLGA(itemValue)}
            style={styles.picker}
            dropDownContainerStyle={styles.dropDownContainer}
            containerStyle={styles.pickerContainer}
            labelStyle={styles.labelStyle}
            placeholder="Enter your current state"
          />
        )}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
      />
      {lga !== '' && <Text>You selected: {lga}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    zIndex: 200,
    backgroundColor: 'rgba(51, 51, 51, 0.54)',
  },
  warning: {
    fontFamily: 'Regular',
    fontSize: 16,
  },
  loading: {
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
  },
  dropDownContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  pickerContainer: {
    width: 200,
  },
  labelStyle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default StateModal;
