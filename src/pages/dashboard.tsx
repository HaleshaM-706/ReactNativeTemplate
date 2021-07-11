import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import Helper from '../../provider/Helper'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import HomeScreen from "./homeScreen";
import Subscription from "./Subscription";
import EventScreen from "./EventScreen";
import ClubScreen from "./clubScreen";

import { NavigationContainer } from '@react-navigation/native';
import { Badge, Icon } from 'react-native-elements';

export default class Dashboard extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => {
                Helper.openSidemenu(this.props.componentId, this.props.componentName);
              }}
            />
            <Appbar.Content title="Dashboard" />
            <Appbar.Action icon={() => <Icon type="ionicon" name="ios-notifications" color="white" />} onPress={() => { }} />
            <Badge
              value="7"
              status="error"
              containerStyle={styles.badgeStyle}
            />
            <Appbar.Action icon="dots-vertical" onPress={() => { }} />
          </Appbar.Header>
        </View>
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={{
            activeTintColor: '#e91e63',
            labelStyle: { fontSize: 12 },
            scrollEnabled: true
          }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Clubs" component={ClubScreen} />
            <Tab.Screen name="Event" component={EventScreen} />
            <Tab.Screen name="Subscription" component={Subscription} />
          </Tab.Navigator>
        </NavigationContainer>

      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    fontSize: 18
  },
  row: {
    flexDirection: 'row'
  },
  badgeStyle: {
    position: 'absolute',
    top: 10,
    right: 60
  }
});



