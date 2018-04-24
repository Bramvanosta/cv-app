import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import { COLOR_PINK } from './../../config/colors';
import data from './../../data/miscellaneous';

import Title from '../../components/core/Title';
import Languages from '../../components/miscellaneous/Languages';
import Skills from '../../components/miscellaneous/Skills';
import Core from '../../components/miscellaneous/Core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    marginLeft: 5,
    borderLeftWidth: 5,
    borderLeftColor: COLOR_PINK,
  },
  
  scrollView: {
    paddingVertical: 35,
  }
});

const Miscellaneous = () => (
  <View style={styles.container}>
    <Title text="Miscellaneous" color={COLOR_PINK} />
    <View style={styles.content}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <Languages languages={data.languages} />
        <Skills skills={data.skills} />
        <Core competencies={data.competencies} />
      </ScrollView>
    </View>
  </View>
);

export default Miscellaneous;
