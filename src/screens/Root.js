import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Platform,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Constants } from 'expo';

import { PRIMARY_COLOR } from './../config/colors';

import splashImage from './../../assets/splash.png';

import Button from './../components/core/Button';
import ContactPopup from './popups/Contact';

const IS_IPHONE_X = Platform.OS === 'ios' && Constants.platform.ios.model.toLowerCase() === 'iphone x';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
  },

  background: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingVertical: IS_IPHONE_X ? 35 : 20,
  },

  button: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 50,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      contactPopupIsVisible: false,
    };
  }

  showContactPopup = () => {
    this.setState({ contactPopupIsVisible: true });
  }

  hideContactPopup = () => {
    this.setState({ contactPopupIsVisible: false });
  }

  handleContactPress = () => {
    this.showContactPopup();
  }

  render() {
    const { contactPopupIsVisible } = this.state;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.props.onNavigate}>
          <ImageBackground style={styles.background} resizeMode="contain" source={splashImage}>
            <Button onPress={this.handleContactPress}>
              <Text style={styles.buttonText}>Contact</Text>
            </Button>
          </ImageBackground>
        </TouchableWithoutFeedback>
        <ContactPopup isVisible={contactPopupIsVisible} onDismiss={this.hideContactPopup} />
      </View>
    );
  }
}

Root.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default Root;
