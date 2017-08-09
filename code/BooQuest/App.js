import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { Font } from 'expo'
import { LoginPage } from 'boo-ui/pages'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
      await Font.loadAsync({
          'abel-regular': require('./assets/fonts/Abel-Regular.ttf'),
      });

      this.setState({
        loaded: true
      })
  }
    
  render() {
    if (this.state.loaded) {
      return (<LoginPage />)
    }

    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
}