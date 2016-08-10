import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = require('../../styles/style.js');

export default class InboxContainer extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  handleBack = () => {
    const { navigate } = this.props;
    navigate({ type: 'pop' });
  }

  render() {
    const logoutButton = {
      title: 'Back',
      handler: this.handleBack
    };
    return (
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <NavigationBar
            style={styles.navbar}
            title={{title: 'Mail Title', tintColor: '#fff'}}
            rightButton={{title: 'Archive'}}
            leftButton={logoutButton}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.mailheader}>Mail Title</Text>
          <View style={styles.mailcontainer}>
          </View>
        </View>
      </View>
    );
  }
}
