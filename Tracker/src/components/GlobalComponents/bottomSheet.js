import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

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
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          enableTouchThrough={true}
          pressBehavior="none"
          appearsOnIndex={0}
          opacity={0.6}
          backdropStyle={styles.backdrop}
        />
      )}
      onDismiss={onDismiss}
      handleComponent={() => null}
    >
      <View style={styles.container}>
        <View style={styles.sheet}>
          <View style={styles.topLine} />
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </BottomSheetModal>
  );
};

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
  topLine: {
    height: 6,
    width: 120,
    alignSelf: 'center',
    marginTop: 8,
    borderRadius: 6,
    backgroundColor: '#DCDCDC', // Change the color here
  },
  content: {
    paddingTop: 0,
    paddingHorizontal: 10,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Change the color and opacity here
  },
});

export default BottomSheet;
