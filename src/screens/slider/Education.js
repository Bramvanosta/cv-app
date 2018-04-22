import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { PRIMARY_COLOR } from './../../config/colors';
import data from './../../data/education.json';

import Title from '../../components/Title';
import EducationItem from '../../components/education/EducationItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingVertical: 15,
    marginLeft: 5,
    borderLeftWidth: 5,
    borderLeftColor: PRIMARY_COLOR,
  }
});

const Education = () => (
  <View style={styles.container}>
    <Title text="Education" />
    <ScrollView
      contentContainerStyle={styles.content}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
    >
      {
        data.items.map(item => (
          <EducationItem key={item.id} item={item} />
        ))
      }
    </ScrollView>
  </View>
);

export default Education;
