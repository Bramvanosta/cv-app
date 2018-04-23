import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import { COLOR_GREEN } from './../../config/colors';
import data from './../../data/work_experience.json';

import Title from './../../components/core/Title';
import WorkExperienceItem from './../../components/workExperience/WorkExperienceItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    marginLeft: 5,
    borderLeftWidth: 5,
    borderLeftColor: COLOR_GREEN,
  },
  
  scrollView: {
    paddingVertical: 35,
  },
});

const WorkExperience = () => (
  <View style={styles.container}>
    <Title text="Work Experience" color={COLOR_GREEN} />
    <View style={styles.content}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        {
          data.map(item => (
            <WorkExperienceItem key={item.id} item={item} />
          ))
        }
      </ScrollView>
    </View>
  </View>
);

export default WorkExperience;
