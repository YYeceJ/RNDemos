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
        <View style={styles.firstWord}><Text>{rowData.firstWord}</Text></View>
        <View style={styles.message}>
        <Image source={rowData.icon} style={styles.ContactIcon}/>
          <View style={styles.ContactMsg}>
            <Text style={styles.ContactName}>{rowData.name}</Text>
            <Text style={styles.ContactType}>{rowData.type}</Text>
          </View>   
        </View>
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
      backgroundColor: '#F5FCFF',
    },
    Contact: {
      flexDirection: "column",
      padding: 10,
    },
    ContactMsg: {
      width: '80%',
      marginLeft: 12,
      borderColor: "#fff",
      borderBottomColor: "#B7B7B7",
      borderWidth: 1,
    },
    ContactName: {
      fontSize: 20,
      color: "black",
    },
    ContactIcon: {
      height: 60,
      width: 60,
      borderRadius: 30
    },
    ContactType: {
      marginTop: 6
    },
    firstWord:{
      width:"100%",
    },
    message:{
      flexDirection:"row"
    }
  });
