import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Asset } from 'expo';

import splashImage from './../assets/splash.png';

import Root from './screens/Root';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false,
    };
  }
  cacheResourcesAsync = async () => {
    const images = [
      splashImage,
    ];

    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());

    return Promise.all([...cacheImages]);
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onFinish={() => this.setState({ isLoaded: true })}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

export default App;
