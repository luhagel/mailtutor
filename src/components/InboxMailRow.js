import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import Immutable from 'immutable';

const styles = require('../../styles/style.js');

export default class Inbox extends Component {
  render () {
    var subjectstyle = [styles.subject, styles.unread];
    if (this.props.mail.read === true) {
      subjectstyle = [styles.subject, styles.read];
    }
    return (
      <TouchableHighlight onPress={this.props.mailhandler.bind(this, this.props.mail)} underlayColor='#ddd'>
        <View style={styles.MailRowContainer}>
          <Text style={subjectstyle}>{this.props.mail.subject}</Text>
          <Text></Text>
          <Text style={styles.time}>{this.props.mail.received}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

