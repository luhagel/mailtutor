import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Inbox from '../components/Inbox';

const styles = require('../../styles/style.js');

export default class InboxContainer extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  handleBack = () => {
    const { navigate } = this.props;
    navigate({ type: 'pop' });
  }

  handleViewMail = (email) => {
    const { navigate, mail } = this.props;
    mail({ type: 'setActive', key: {email}});
    navigate({ type: 'push', key: 'singlemail'});
  }

  render() {
    const logoutButton = {
      title: 'Log Out',
      handler: this.handleBack
    };
    return (
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <NavigationBar
            style={styles.navbar}
            title={{title: 'Inbox', tintColor: '#fff'}}
            rightButton={{title: 'New'}}
            leftButton={logoutButton}
          />
        </View>
        <View style={styles.content}>
          <Inbox mailhandler={this.handleViewMail} />
        </View>
      </View>
    );
  }
}
