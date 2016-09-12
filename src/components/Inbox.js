import React, { Component } from 'react';
import { StyleSheet, ListView } from 'react-native';
import Immutable from 'immutable';
import InboxMailRow from './InboxMailRow';

const styles = require('../../styles/style.js');

export default class Inbox extends Component {
  constructor (props) {
    super(props);
    const mails = [
      {
        subject: "Obvious spam mail, whatver",
        received: "5 min ago",
        read: false
      },
      {
        subject: "Meeting Tomorrow @5pm", 
        received: "Today, 11:34",
        read: true
      }
    ];
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(mails),
    };
  }

  render () {
    return (
      <ListView
        style={styles.ListViewContainer}
        contentContainerStyle={styles.InboxList}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <InboxMailRow mail={rowData} mailhandler={this.props.mailhandler} />}
      />
    );
  }
}
