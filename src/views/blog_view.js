import React, { Component } from 'react';

import { StyleSheet, View, Image, SafeAreaView, FlatList, Text, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Slideshow from 'react-native-image-slider-show';
import { getHotStoresList } from '../services/main_view_service';




const win = Dimensions.get('window');


export default class BlogView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (

      <View style={{
        flexDirection: 'col', flex: 1,
        alignItems: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 1 : 1,
        backgroundColor: 'red'
      }}>
      </View>
    );
  }
}

const styles = StyleSheet.create({


  search: {

    height: win.height / 20,
    // width: win.width * 0.95,
    // alignSelf: 'center',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

});


