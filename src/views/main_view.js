import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import { ListItem, Avata, Divider } from 'react-native-elements'
import { Dimensions } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import Slideshow from 'react-native-image-slider-show';
import { getHotStoresList } from '../services/main_view_service';
import { Rating, AirbnbRating } from 'react-native-ratings'

const win = Dimensions.get('window');


export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      dataSource: [],
      adStores: [],
      hotStores: [],
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
    getHotStoresList()
      .then((res) => {
        // console.log(this.state.dataSource);
        if (res.message === 'Not Found') {

        }
        else {

          const tempAdStores = [];
          const tempHotStores = [];

          res.hotstores.forEach(element => {

            if (element.result.priority <= 3) {
              element.result.title = element.result.name;

              tempAdStores.push(element.result);

            }
            else {
              element.result.title = element.result.name;
              element.result.key = element.result._id;
              tempHotStores.push(element.result);

            }

          });
          this.setState({
            adStores: tempAdStores,
            hotStores: tempHotStores
          });

          console.log(this.state.hotStores);

        }
      });
  }

  renderItem = ({ item }) => (

    <TouchableOpacity onPress={this.openPopup}>


      <View style={{ flex: 1, flexDirection: 'col', margin: 2}}>
        <View style={{ flex: 1, flexDirection: 'row', borderColor: 'gray', borderTopWidth: 0.2, backgroundColor: 'white', margin: 2 }}>
          <View style={{ flex: 1, flexDirection: 'col' }}>
            <Image
              style={{ width: win.width / 2.5, height: win.width / 2.5, marginLeft: 10, margin: 10, borderRadius: 5, }}
              source={{ uri: item.url }}
            />

          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'col',
            }}>
            <Text style={{
              marginLeft: 20, fontSize: 20, paddingTop: 10,
              fontWeight: 'bold',
            }}>{item.name}</Text>

            <AirbnbRating style={{ margin: 30 }}
              starContainerStyle={{
                alignSelf: "flex-start",
                margin: 20
              }}
              size={20}
              imageSize={30}
              isDisabled={true}
              showRating={false}
              defaultRating={item.rate}
            />
            <Text style={{
              fontWeight: 'bold',
              marginLeft: 20, fontSize: 10, paddingBottom: 10
            }}>{item.address}</Text>

            <Text style={{
              fontWeight: 'bold',
              marginLeft: 20, fontSize: 10, paddingBottom: 10
            }}>{item.open + '-' + item.close}</Text>
            <Text style={{
              marginLeft: 20, fontSize: 10
            }}>{item.menu.join(",")}</Text>
          </View>
        </View>



        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>


          < View style={styles.callButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="전화하기"
              color='white'
            />

          </View>
          <View style={styles.naviButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="네비하기 (0.5 mi)"
              color='white'
            />
          </View>
        </View>

      </View>
    </TouchableOpacity>
  )

  render() {
    return (

      <View style={{
        flexDirection: 'col', flex: 1,
        alignItems: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 0 : 0,
        backgroundColor: 'white'
      }}>

        <Slideshow

          dataSource={this.state.adStores}
          position={this.state.position}
          height={win.height / 3.3}
          indicatorColor={'white'}
          indicatorSelectedColor={'white'}
          containerStylee={styles.banner}
          onPositionChanged={position => this.setState({ position })} />

        <Searchbar style={styles.search}
          placeholder="검색"
        />

        <FlatList style={{ width: win.width / 1.05, height: win.height / 5, margin: 10 }}
          data={this.state.hotStores}
          renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({


  search: {

    height: win.height / 20,
    margin: 10
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
  subtitleView: {
    flexDirection: 'row',

  },
  ratingImage: {
    height: win.height / 10,
    width: win.width / 5

  },
  naviButtonContainer: {
    // marginLeft: 20,
    width: win.width / 2,
    backgroundColor: '#0073bb',
    borderRadius:5
  },
  callButtonContainer: {
    marginLeft: 10,
    width: win.width / 2.5,
    backgroundColor: '#0073bb',
    borderRadius:5

  },

});


