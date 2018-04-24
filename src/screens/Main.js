import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';
import Swiper from 'react-native-swiper';

import Education from './slider/Education';
import WorkExperience from './slider/WorkExperience';
import Miscellaneous from './slider/Miscellaneous';
import ProjectsPopup from './popups/Projects';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },

  content: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 15,
    paddingHorizontal: 15,
  },
});

const Main = () => (
  <View style={styles.constainer}>
    <View style={styles.content}>
      <Swiper
        ref={(swiper) => { this.swiper = swiper; }}
        loop={false}
        showsPagination={false}
      >
        <Education />
        <WorkExperience />
        <Miscellaneous />
      </Swiper>
    </View>
    <ProjectsPopup />
  </View>
);

export default Main;
