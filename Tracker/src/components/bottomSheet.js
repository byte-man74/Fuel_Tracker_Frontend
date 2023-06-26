import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const BottomSheet = ({ isVisible, onDismiss, snapPoints, children }) => {
  const bottomSheetModalRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isVisible]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={BottomSheetBackdrop}
      onDismiss={onDismiss}
    >
      <View style={styles.container}>
        <View style={styles.sheet}>
          <View style={styles.curve} />
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheet;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    sheet: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      overflow: 'hidden',
      backgroundColor: 'white',
    },
    curve: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 16,
      backgroundColor: 'white',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    },
    content: {
      paddingTop: 16,
      paddingHorizontal: 16,
    },
  });

  
  
  
  
  