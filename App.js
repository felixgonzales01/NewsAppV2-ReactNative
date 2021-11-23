import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import All from './screens/All';
import Business from './screens/Business';
import HealthScreen from './screens/Health';
import Technology from './screens/Tech.js';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tabs = createBottomTabNavigator(
  {
    All: {
      screen: All,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-newspaper" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>All</Text>
          </View>
        ),
      },
    },
    Business: {
      screen: Business,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-business" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Business</Text>
          </View>
        ),
      },
    },
    Health: {
      screen: HealthScreen,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-heart" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Health</Text>
          </View>
        ),
      },
    },
    Technology: {
      screen: Technology,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-desktop" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Technology</Text>
          </View>
        ),
      },
    },
  },
    {
    
    initialRouteName: 'All',
    lazyLoad: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 70,
        backgroundColor: '#40404c',
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
        elevation: 10,
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
    },
  }
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: 'The Daily Buzz',
      headerStyle: {
        backgroundColor: '#2b2b39',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
