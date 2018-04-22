import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Title from '../../components/Title';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const WorkExperience = () => (
  <View style={styles.container}>
    <Title text="Work Experience" />
  </View>
);

export default WorkExperience;
