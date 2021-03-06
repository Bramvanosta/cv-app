import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Svg } from 'expo';

import { COLOR_BLUE } from './../../config/colors';

import SkillsList from './../core/SkillsList';

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
    backgroundColor: COLOR_BLUE,
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

  title: {
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: 5,
    fontStyle: 'italic',
  },

  skillsContainer: {
    marginTop: 10,
  },

  skillsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

const EducationItem = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Svg width={18} height={18} style={styles.dot}>
        <Circle
          cx={9}
          cy={9}
          r={7}
          fill="#FFFFFF"
          stroke={COLOR_BLUE}
          strokeWidth={2}
        />
      </Svg>
      <Text style={styles.headerText}>{ item.date }</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.location}>{ item.location }</Text>
      <Text style={styles.title}>{ item.title }</Text>
      {
        item.subtitle ?
          <Text style={styles.subtitle}>{ item.subtitle }</Text>
          : null
      }
      {
        item.skills.length > 0 ?
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsTitle}>Skills</Text>
            <SkillsList skills={item.skills} />
          </View>
          : null
      }
    </View>
  </View>
);

EducationItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default EducationItem;
