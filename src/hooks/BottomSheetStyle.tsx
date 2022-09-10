import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

interface Props {
  DescriptionText: string;
  ProductName: string;
  ProductPrice: number;
}

const BottomSheetStyle: React.FC<Props> = ({ DescriptionText, ProductName, ProductPrice }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['80%', '90%'], []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>{ProductName}</Text>
          <Text style={styles.headerText}>$ {ProductPrice}</Text>
        </View>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          style={styles.sheetContainer}
          testID='BottomSheetScroll'
        >
          <Text>{DescriptionText}</Text>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  sheetContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default BottomSheetStyle;
