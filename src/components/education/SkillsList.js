import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Svg } from 'expo';

import { PRIMARY_COLOR } from './../../config/colors';

const { Circle } = Svg;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  skillsContainer: {
    height: 20,
  },

  skill: {
    marginRight: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    backgroundColor: '#2b2b29',
  },

  skillText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

class SkillsList extends React.PureComponent {
  renderSkill = ({ item }) => (
    <View style={styles.skill}>
      <Text style={styles.skillText}>{ item }</Text>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Skills</Text>
        <View style={styles.skillsContainer}>
          <FlatList
            data={this.props.skills}
            keyExtractor={item => item}
            renderItem={this.renderSkill}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    )
  }
}

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsList;
