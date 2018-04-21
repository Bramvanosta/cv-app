import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

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
              {/* <Text>Select how long you&#39;ll be there</Text> */}
            </View>
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
