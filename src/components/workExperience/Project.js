import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, Linking, View, ScrollView, Text, Image } from 'react-native';

import { COLOR_PINK } from './../../config/colors';

import Button from './../core/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 15,
    paddingBottom: 10,
  },

  image: {
    width: 240,
    height: 147,
    marginBottom: 15,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  button: {
    marginTop: 15,
  },

  buttonText: {
    color: '#FFFFFF',
  },
});

class Project extends React.PureComponent {
  handlePress = () => {
    Linking.openURL(this.props.project.link);
  }

  render() {
    const { project } = this.props;

    return (
      <ScrollView
        contentContainerStyle={styles.container}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.image}
          source={project.image_path}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{ project.title }</Text>
          <Text>{ project.description }</Text>
        </View>
        {
          project.link ?
            <Button
              style={styles.button}
              onPress={this.handlePress}
              color={COLOR_PINK}
            >
              <Text style={styles.buttonText}>View project</Text>
            </Button>
            : null
        }
      </ScrollView>
    );
  }
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    image_path: PropTypes.number,
  }).isRequired,
};

export default Project;
