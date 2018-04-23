import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

import SkillsList from './../core/SkillsList';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  title: {
    flexWrap: 'wrap',
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Skill = ({ skill }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ skill.title }</Text>
    <SkillsList skills={skill.skills} />
  </View>
);

Skill.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Skill;
