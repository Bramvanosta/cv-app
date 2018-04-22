import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { Svg } from 'expo';

import { PRIMARY_COLOR } from './../../config/colors';

const { Circle } = Svg;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignItems: 'flex-start',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingRight: 10,
    backgroundColor: PRIMARY_COLOR,
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
  }
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
          stroke={PRIMARY_COLOR}
          strokeWidth={2}
        />
      </Svg>
      <Text style={styles.headerText}>{ item.date }</Text>
    </View>
    <View style={styles.content}>
      <Text>{ item.title }</Text>
    </View>
  </View>
);

EducationItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default EducationItem;
