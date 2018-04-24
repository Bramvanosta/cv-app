import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
});

const WorkExperienceItem = ({ project }) => (
  <View style={styles.container}>
    <Text>{ project.title }</Text>
  </View>
);

WorkExperienceItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default WorkExperienceItem;
