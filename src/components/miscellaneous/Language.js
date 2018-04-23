import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  title: {
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold',
  },

  level: {
    marginTop: 5,
    fontStyle: 'italic',
  },
});

const Language = ({ language }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ language.title }</Text>
    <Text style={styles.level}>Level { language.level }</Text>
  </View>
);

Language.propTypes = {
  language: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    level: PropTypes.string,
  }).isRequired,
};

export default Language;
