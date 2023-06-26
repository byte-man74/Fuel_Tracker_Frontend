import React from 'react';
import { StyleSheet, Modal, View, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const BottomSheet = ({ isVisible, onDismiss, snapPoints, children }) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      onRequestClose={onDismiss}
      animationType="slide"
    >
      <View style={[styles.container, { height }]}>
        <View style={[styles.sheet, { height }]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  sheet: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
    paddingTop: 16,
  },
});
