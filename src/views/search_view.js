import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, FlatList, Image, Button, TouchableOpacity, Dimensions, ActivityIndicator, NetInfo } from 'react-native';
import { ListItem, Avata, Divider } from 'react-native-elements'
import { Searchbar, Card } from 'react-native-paper';
import Slideshow from 'react-native-image-slider-show';
import { getHotStoresList } from '../services/main_view_service';
import { Rating, AirbnbRating } from 'react-native-ratings'
import CallButton from '../buttons/call_button';
import NaviButton from '../buttons/navi_button';

const win = Dimensions.get('window');

export default class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      loading: true,
      dataSource: [],
      bannerStoresList: [],
      hotStoresList: [],
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

        if (res.message === 'Not Found') {
          console.log(res);
        }

        else {

          const tempBannerStores = [];
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
            bannerStoresList: tempBannerStores,
            hotStoresList: tempHotStores
          });

          this.loading = false;
        }
      });
  }

  renderItem = ({ item }) => (

    <TouchableOpacity onPress={this.openPopup}>
      <View style={{ flex: 1, flexDirection: 'col', margin: 2 }}>
        <View style={{ flex: 1, flexDirection: 'row', borderColor: 'gray', borderTopWidth: 0.2, backgroundColor: 'white', margin: 2 }}>
          <View style={{ flex: 1, flexDirection: 'col' }}>
            <Image
              style={{ width: win.width / 2.5, height: win.width / 2.5, marginLeft: 10, margin: 20, borderRadius: 5, }}
              source={{ uri: item.main_img }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'col',
            }}>

            <Text style={styles.store_title}>{item.name}</Text>

            <AirbnbRating style={{ margin: 30 }}
              starContainerStyle={{
                alignSelf: "flex-start",
                margin: 20
              }}
              size={15}
              imageSize={30}
              isDisabled={true}
              showRating={false}
              defaultRating={item.rate}
            />

            <Text style={styles.store_subtitle}>{item.address + "," + item.city + "," + item.state + "," + item.zipcode}</Text>
            <Text style={styles.store_subtitle}>{item.phone}</Text>
            <Text style={styles.store_subtitle}>{item.open % 12 + (item.open < 12 ? "am" : "pm") + '-' + item.close%12 + (item.close < 12 ? "am" : "pm")}</Text>
            <Text style={styles.store_subtitle}>{item.menu.join(",")}</Text>
          </View>
        </View>

        {/* <View style={{ flex: 2, flexDirection: 'row'}}>
          <NaviButton title="네비하기"></NaviButton>
          <CallButton title="Call"></CallButton>
        </View> */}

      </View>
    </TouchableOpacity>
  )


  render() {

    return (

      <View style={{
        flexDirection: 'col', flex: 1,
        alignItems: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 1 : 1,
        backgroundColor: 'white'
      }}>
        {this.loading == true &&
          <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
        }

        <Slideshow
          dataSource={this.state.bannerStoresList}
          position={this.state.position}
          height={win.height / 3.3}
          indicatorColor={'white'}
          indicatorSelectedColor={'white'}
          containerStylee={styles.banner}
          onPositionChanged={position => this.setState({ position })} />

        <Searchbar style={styles.search}
          placeholder="검색"
        />
        <FlatList style={styles.list}
          data={this.state.hotStoresList}
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
  list: {
    width: win.width / 1.05,
    height: win.height / 5,
    margin: 10

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  store_title: {
    marginLeft: 20,
    fontSize: 15,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  store_subtitle: {
    marginLeft: 20,
    fontSize: 10,
    paddingBottom: 10
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  }
});


