import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Svg } from 'expo';

import { COLOR_GREEN } from './../../config/colors';

const { Circle } = Svg;

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
    alignItems: 'flex-start',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingRight: 10,
    backgroundColor: COLOR_GREEN,
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

  jobTitle: {
    marginLeft: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    backgroundColor: '#2b2b29',
  },

  jobTitleText: {
    color: '#FFFFFF',
    fontSize: 12,
  },

  content: {
    width: Dimensions.get('window').width - 50,
    marginTop: 10,
    marginLeft: 10,
  },

  title: {
    flexWrap: 'wrap',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },

  description: {
    flexWrap: 'wrap',
  },
});

const WorkExperienceItem = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.topRow}>
      <View style={styles.header}>
        <Svg width={14} height={14} style={styles.dot}>
          <Circle
            cx={7}
            cy={7}
            r={5}
            fill="#FFFFFF"
            stroke={COLOR_GREEN}
            strokeWidth={2}
          />
        </Svg>
        <Text style={styles.headerText}>{ item.date }</Text>
      </View>
      {
        item.jobTitle ?
          <View style={styles.jobTitle}>
            <Text style={styles.jobTitleText}>{ item.jobTitle }</Text>
          </View>
          : null
      }
    </View>
    <View style={styles.content}>
      {
        item.location ?
          <Text style={styles.location}>{ item.location }</Text>
          : null
      }
      <Text style={styles.title}>{ item.title }</Text>
      <Text style={styles.description}>{ item.description }</Text>
    </View>
  </View>
);

WorkExperienceItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default WorkExperienceItem;
