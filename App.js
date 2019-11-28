import React, {Component} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  View,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Vidcard from './component/card/vidcard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results:[],
      querySearch: '',
      isLoading: false
    }
  }

  searchQuery(text) {
    this.setState({isLoading: true});
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=relevance&q='+text+'&key=AIzaSyCzfiXKeCpj8atKoJN4_BJa2zGYW-2a2IM')
    .then((response) => response.json())
    .then((responseJson) => {
      let array = [];
      for (const result in responseJson.items) {
        if(responseJson.items[result].id.kind == "youtube#video")
        array.push(responseJson.items[result]);
      }
      this.setState({results: array, isLoading: false});
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#ff0000" />
        <View style={styles.seacrchbar}>
          <Icon style={{margin: 10}} name="play-circle" size={30} color='#ff0000' />
          <TextInput
            style={{flex: 1, height: 40, backgroundColor: '#f5f5f5', borderRadius: 15}}
            // onChangeText={data => this.searchQuery(data)}
            onSubmitEditing={(event) => this.searchQuery(event.nativeEvent.text)}
            placeholder='Cari...'
            returnKeyType='search'
          />
        </View>
        <View style={{flex: 1, margin: 10}}>
          {this.state.isLoading ? <ActivityIndicator />
          :
          <FlatList
					data={this.state.results}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({item}) =>
            <Vidcard
              item={item}
            />}
          />
          // <ScrollView>
          //   {this.state.results.length === 0 ? <Text style={styles.nodata}>Tidak ada data</Text>
          //   :
          //   <Vidcard data={this.state.results} />
          //   }
          // </ScrollView>
          }
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  seacrchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffffff'
  },
  scrollView: {
    backgroundColor: '#acacac',
  }
});