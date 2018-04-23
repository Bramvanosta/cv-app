import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Svg } from 'expo';

import { COLOR_BLUE } from './../../config/colors';

import SkillsList from './SkillsList';

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
    marginLeft: -10,
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
});

const EducationItem = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Svg width={14} height={14} style={styles.dot}>
        <Circle
          cx={7}
          cy={7}
          r={5}
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
          <SkillsList skills={item.skills} />
          : null
      }
    </View>
  </View>
);

EducationItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default EducationItem;
