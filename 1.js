/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';
import contactData from './ContactData.json'

let data=["Amy","Apple","Asher","Black","Bee","Brian","Daniel",
"David","Frank","Fiona","Friday","Jack","Jason","Jasper","Jasmine"];



type Props = {};
export default class ContactList extends Component<Props> {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(contactData)
    }
  }

  _renderRow(rowData) {
    return (
      <View style={styles.Contact}>
        <Image source={rowData.icon} style={styles.ContactIcon}/>
        <Text style={styles.ContactName}>{rowData.name}</Text>
        <Text style={styles.ContactType}>{rowData.type}</Text>
      </View>
    )
  }

    render() {
      return (
        <View style={styles.container}>
          <ListView
            dataSource = {this.state.dataSource}
            renderRow={this._renderRow}
          />
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  Contact:{
    backgroundColor :"red"
  },
  ContactList:{
    fontSize:18
  },
  ContactIcon:{
    height:20,
    width:20,
  }
});
