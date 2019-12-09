import React, { Component } from 'react';

import { StyleSheet, View, Image, SafeAreaView, FlatList, Text,Platform } from 'react-native';
import { Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Slideshow from 'react-native-image-slider-show';



const win = Dimensions.get('window');


export default class SlideshowTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: '한식입니다',
          caption: '마라탕 ',
          url: 'https://i.kinja-img.com/gawker-media/image/upload/s--djYdkXK4--/c_scale,f_auto,fl_progressive,q_80,w_1600/be9vyovcn2gqwod7kd16.jpg',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'https://www.thespruceeats.com/thmb/bXEyHCT-3algVEAy6GNDXnuCg3Y=/4288x2412/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'https://handluggageonly.co.uk/wp-content/uploads/2015/09/Hand-Luggage-Only-5-1.jpg',
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (

      <View style={{ flexDirection: 'col' ,flex: 1,
      alignItems: 'center',
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
      backgroundColor: '#FFF8E1'}}>

        <Slideshow
          dataSource={this.state.dataSource}
          position={this.state.position}
          height={win.height / 3.3}
          indicatorColor={'white'}
          indicatorSelectedColor={'white'}
          containerStylee={styles.banner}
          onPositionChanged={position => this.setState({ position })} />

        <Searchbar style={styles.search}
          placeholder="검색"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  banner: {
    width: win.width,
    height: win.height / 3,
    resizeMode: 'stretch',
    color: 'white',
  },
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


