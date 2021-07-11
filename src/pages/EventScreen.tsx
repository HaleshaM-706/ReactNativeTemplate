import React, { Component } from "react";
import { View, Text } from "react-native";
import Helper from '../../provider/Helper'


export default class EventScreen extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>EventScreen Screen</Text>
      </View>
    )

  }
}



