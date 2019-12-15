import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { createDrawerNavigator, createStackNavigator, } from 'react-navigation-stack';
import { createBottomTabNavigator, } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import SearchView from './src/views/search_view';
import BlogView from './src/views/blog_view';
import UploadView from './src/views/upload_view';




const SearchStack = createStackNavigator(
  {
    Search: { screen: SearchView },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: '검색',
    },
  }
);

const UploadStack = createStackNavigator(
  {
    Upload: { screen: UploadView },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: '비즈니스 업로드',
    },
  }
);

const BlogStack = createStackNavigator(
  {

    Blog: { screen: BlogView },
    // Details: { screen: DetailsScreen },
    // Profile: { screen: ProfileScreen },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: '블로그',
      //Header title
    },
  }
);

const App = createBottomTabNavigator(
  {
    검색: { screen: SearchView },
    블로그: { screen: BlogView },
    업로드: { screen: UploadView }
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === '검색') {
          // iconName = `ios-information-circle${focused ? '' : '-outline'}`;

        } else if (routeName === '블로그') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        else if (routeName === '업로드') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(App);

