import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

const Main = () => (
  <View style={styles.container}>
    <Text>Main</Text>
  </View>
);

export default Main;
