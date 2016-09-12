import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import NavigationBar from 'react-native-navbar';

const styles = require('../../styles/style.js');

export default class Home extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  toInbox = () => {
    const { navigate } = this.props;
    navigate({
      type: 'push',
      key: 'inbox'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <NavigationBar
            style={styles.navbar}
            title={{title: 'MailTutor', tintColor: '#fff'}}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.welcome}>
            Welcome to MailTutor, please sign in!
          </Text>
          <TouchableOpacity onPress={this.toInbox}>
            <Text style={styles.instructions}>Login/Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
