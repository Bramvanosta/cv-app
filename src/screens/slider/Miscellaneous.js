import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { COLOR_PINK } from './../../config/colors';

import Title from '../../components/Title';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Miscellaneous = () => (
  <View style={styles.container}>
    <Title text="Miscellaneous" color={COLOR_PINK} />
  </View>
);

export default Miscellaneous;
