import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { Svg } from 'expo';

const { Line } = Svg;

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
  },
  
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

const Title = ({ text, color }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ text }</Text>
    <Svg width={125} height={6}>
      <Line
        x1="0"
        y1="0"
        x2="125"
        y2="0"
        stroke={color}
        strokeWidth="12"
      />
    </Svg>
  </View>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Title;
