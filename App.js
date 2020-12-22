import React, { Component } from 'react'
import { View} from 'react-native'
import NavPage from "./src/nav";

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <NavPage/>
      </View>
    )
  }
}
