import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import Swiper from 'react-native-swiper';

import { hideProjects } from './../../actions/ProjectsActions';

import Button from './../../components/core/Button';
import Project from './../../components/workExperience/Project';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

const DIALOG_HEIGT = Dimensions.get('window').height * 0.6;

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

class ProjectsPopup extends React.PureComponent {
  constructor() {
    super();

    this.popupDialog = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      if (this.props.visible) {
        this.popupDialog.show();
      }
    }
  }

  handleClosePress = () => {
    this.popupDialog.dismiss();
  }
  
  handleDismiss = () => {
    this.props.hideProjects();
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
        onDismissed={this.handleDismiss}
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
              <Text style={styles.titleStep}>Projects</Text>
            </View>
            <Swiper
              ref={(swiper) => { this.swiper = swiper; }}
              loop={false}
              showsPagination={false}
            >
              { this.props.projects.map(project => <Project key={project.id} project={project} />) }
            </Swiper>
          </View>
        </View>
      </PopupDialog>
    );
  }
}

ProjectsPopup.propTypes = {
  visible: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  })),
  hideProjects: PropTypes.func.isRequired,
};

ProjectsPopup.defaultProps = {
  projects: [],
};

const mapStateToProps = state => ({
  visible: state.projects.visible,
  projects: state.projects.items,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    hideProjects,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPopup);
