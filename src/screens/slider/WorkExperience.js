import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { COLOR_GREEN } from './../../config/colors';
import data from './../../data/work_experience.json';

import Title from './../../components/Title';
import WorkExperienceItem from './../../components/workExperience/WorkExperienceItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingVertical: 35,
    marginLeft: 5,
    borderLeftWidth: 5,
    borderLeftColor: COLOR_GREEN,
  },
});

const WorkExperience = () => (
  <View style={styles.container}>
    <Title text="Work Experience" color={COLOR_GREEN} />
    <ScrollView
      contentContainerStyle={styles.content}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
    >
      {
        data.items.map(item => (
          <WorkExperienceItem key={item.id} item={item} />
        ))
      }
    </ScrollView>
  </View>
);

export default WorkExperience;
