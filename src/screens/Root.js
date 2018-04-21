import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';

import splashImage from './../../assets/splash.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    position: 'relative',
    flex: 1,
    width: '100%',
  },
});

class Auth extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} resizeMode="contain" source={splashImage}>
          <TouchableOpacity>
            <Text>Contact</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default Auth;
