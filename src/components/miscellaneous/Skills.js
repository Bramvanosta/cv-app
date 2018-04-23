import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Svg } from 'expo';

import { COLOR_PINK } from './../../config/colors';

import Skill from './Skill';

const { Circle } = Svg;

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
    alignItems: 'flex-start',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingRight: 10,
    backgroundColor: COLOR_PINK,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },

  dot: {
    marginLeft: -9,
    marginRight: 10,
  },

  headerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  content: {
    width: Dimensions.get('window').width - 50,
    marginTop: 10,
    marginLeft: 10,
  },
});

const Skills = ({ skills }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Svg width={18} height={18} style={styles.dot}>
        <Circle
          cx={9}
          cy={9}
          r={7}
          fill="#FFFFFF"
          stroke={COLOR_PINK}
          strokeWidth={2}
        />
      </Svg>
      <Text style={styles.headerText}>Development skills</Text>
    </View>
    <View style={styles.content}>
      { skills.map(skill => <Skill key={skill.id} skill={skill} />) }
    </View>
  </View>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default Skills;
