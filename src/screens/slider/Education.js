import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { COLOR_BLUE } from './../../config/colors';
import data from './../../data/education.json';

import Title from '../../components/Title';
import EducationItem from '../../components/education/EducationItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    marginLeft: 5,
    borderLeftWidth: 5,
    borderLeftColor: COLOR_BLUE,
  },
  
  scrollView: {
    paddingVertical: 35,
  }
});

const Education = () => (
  <View style={styles.container}>
    <Title text="Education" color={COLOR_BLUE} />
    <View style={styles.content}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
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
  </View>
);

export default Education;
