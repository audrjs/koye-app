import React, { Component } from 'react';

import { StyleSheet, View, Image, SafeAreaView, FlatList, Text,Platform } from 'react-native';
import { Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Slideshow from 'react-native-image-slider-show';
import { getHotStoresList } from '../services/main_view_service';




const win = Dimensions.get('window');


export default class BlogView extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      position: 1,
      interval: null,
      dataSource: [],
      adStores:[],
      hotStores:[],
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

  componentDidMount = () => {
    // getHotStoresList()
    //       .then((res) => {
    //         // console.log(this.state.dataSource);
    //           if(res.message === 'Not Found') {
              
    //           }
    //         else {
              
    //           const tempAdStores = [];
    //           const tempHotStores = [];
          
    //           res.hotstores.forEach(element => {
    //             if(element.result.priority <= 3){
    //               element.result.title = element.result.name;
  
    //               tempAdStores.push(element.result);

    //               }
    //               else {
    //               element.result.title = element.result.name;
    //               tempHotStores.push(element.result);
    //               }
                
    //           });
              
    //           this.setState({
    //             adStores:tempAdStores,
    //             hotStores:tempHotStores,
    //           });
    //         }
    //     });
 }

  render() {
    return (

      <View style={{ flexDirection: 'col' ,flex: 1,
      alignItems: 'center',
      paddingTop: (Platform.OS) === 'ios' ? 0 : 0,
      backgroundColor: '#FFF8E1'}}>

       
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


