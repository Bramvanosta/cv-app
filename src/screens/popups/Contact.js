import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Linking, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import Swiper from 'react-native-swiper';

import Button from './../../components/core/Button';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

const DIALOG_HEIGT = Dimensions.get('window').height * 0.35;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },

  dialog: {
    backgroundColor: 'transparent',
  },

  main: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  actionContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
    marginRight: 10,
  },

  content: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  titleContainer: {
    marginBottom: 20,
  },

  titleStep: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  swiperContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemContainer: {
    marginBottom: 10,
  },

  itemTitle: {
    marginBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
  },

  icon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
});

class ContactPopup extends React.PureComponent {
  constructor() {
    super();

    this.popupDialog = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isVisible !== this.props.isVisible) {
      if (this.props.isVisible) {
        this.popupDialog.show();
      } else {
        this.popupDialog.dismiss();
      }
    }
  }

  handleClosePress = () => {
    this.props.onDismiss();
  }

  render() {
    return (
      <PopupDialog
        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        dialogAnimation={slideAnimation}
        height={DIALOG_HEIGT}
        animationDuration={500}
        containerStyle={styles.container}
        dialogStyle={styles.dialog}
        onDismissed={this.props.onDismiss}
      >
        <View style={styles.main}>
          <View style={styles.actionContainer}>
            <Button
              onPress={this.handleClosePress}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Button>
          </View>
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleStep}>Contact</Text>
            </View>
            <Swiper
              ref={(swiper) => { this.swiper = swiper; }}
              loop={false}
              showsPagination={false}
            >
              <View style={styles.swiperContainer}>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemTitle}>Phone number</Text>
                  <Text style={styles.itemValue}>+33 6 01 78 83 82</Text>
                </View>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemTitle}>Email</Text>
                  <Text style={styles.itemValue}>bramvanosta@gmail.com</Text>
                </View>
              </View>
              <View style={styles.swiperContainer}>
              <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => Linking.openURL('https://github.com/Bramvanosta')}
                >
                  <Image style={styles.icon} source={require('./../../../assets/icons/github.png')}></Image>
                  <Text style={styles.itemTitle}>Github</Text>
                  <Text style={styles.itemValue}>/Bramvanosta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => Linking.openURL('https://www.linkedin.com/in/bramvanosta/')}
                >
                  <Image style={styles.icon} source={require('./../../../assets/icons/linkedin.png')}></Image>
                  <Text style={styles.itemTitle}>LinkedIn</Text>
                  <Text style={styles.itemValue}>/in/bramvanosta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => Linking.openURL('https://codepen.io/Bramvo/')}
                >
                  <Image style={styles.icon} source={require('./../../../assets/icons/codepen.png')}></Image>
                  <Text style={styles.itemTitle}>Codepen</Text>
                  <Text style={styles.itemValue}>/Bramvo</Text>
                </TouchableOpacity>
              </View>
            </Swiper>
          </View>
        </View>
      </PopupDialog>
    );
  }
}

ContactPopup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default ContactPopup;
