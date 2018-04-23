import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Svg } from 'expo';

import { COLOR_PINK } from './../../config/colors';

import Language from './Language';

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
    marginTop: 10,
    marginLeft: 10,
  },
});

const Languages = ({ languages }) => (
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
      <Text style={styles.headerText}>Languages</Text>
    </View>
    <View style={styles.content}>
      { languages.map(language => <Language key={language.id} language={language} />) }
    </View>
  </View>
);

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    level: PropTypes.string,
  })).isRequired,
};

export default Languages;
