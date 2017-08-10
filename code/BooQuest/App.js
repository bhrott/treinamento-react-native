import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { Font } from 'expo'
import { RootNavigation } from 'boo-ui/navigation'
import { Firebase } from 'boo-core'

import AppSettings from './app.settings'
global.settings = AppSettings


export default class App extends React.Component {
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

      Firebase.initialize()

      this.setState({
        loaded: true
      })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigation />
      </View>
    )
  }
}