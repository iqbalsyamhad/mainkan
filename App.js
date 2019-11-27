import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.seacrchbar}>
          <Icon style={{margin: 10}} name="search" size={25} color='#acacac' />
          <TextInput
            style={{flex: 1, height: 40}}
            // onChangeText={data => this.searchQuery(data)}
            placeholder='Cari nama...'
          />
        </View>
        <View style={{flex: 1, margin: 10}}>
          <ScrollView>
          </ScrollView>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  seacrchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff'
  },
  scrollView: {
    backgroundColor: '#acacac',
  }
});