import React from 'react';
import { StyleSheet, Animated, Easing, View } from 'react-native';
import { AppLoading, Asset } from 'expo';

import splashImage from './../assets/splash.png';

import Root from './screens/Root';
import Main from './screens/Main';

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
      showMain: false,
      opacity: new Animated.Value(1),
    };
  }
  cacheResourcesAsync = async () => {
    const images = [
      splashImage,
    ];

    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());

    return Promise.all([...cacheImages]);
  }

  handleNavigation = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 300,
      easing: Easing.easeOut,
    }).start(() => {
      this.setState({ showMain: true });
    });
  }

  render() {
    const { isLoaded, showMain } = this.state;

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
        {
          !showMain ?
            <Animated.View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, opacity: this.state.opacity }}>
              <Root onNavigate={this.handleNavigation} />
            </Animated.View>
            : null
        }
        <Main />
      </View>
    );
  }
}

export default App;
