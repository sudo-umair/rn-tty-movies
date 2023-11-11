import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Pill from './pill';
import { randomBGColorGenerator } from '@/utils/common';
import { PillContainerProps } from '@/interfaces/components';
import { FontFamily, FontSize } from '@/constants/fonts';

const PillContainer = ({ data, section }: PillContainerProps) => {
  const values = data?.length > 0 ? data : ['N/A'];
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{section}</Text>
      <View style={styles.pillContainer}>
        {values.map((item, index) => (
          <Pill key={index} style={{ backgroundColor: randomBGColorGenerator(item) }} title={item} />
        ))}
      </View>
    </View>
  );
};

export default PillContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  sectionTitle: {
    fontSize: FontSize.H5,
    fontFamily: FontFamily.BOLD,
  },
});
