import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native'
import { Font } from 'expo'
import { RootNavigation } from 'boo-ui/navigation'
import { Alert } from 'boo-ui/components'
import { Firebase } from 'boo-core'

import AppSettings from './app.settings'
global.settings = AppSettings

console.ignoredYellowBox = [
  'Setting a timer'
];


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this._config()
  }



  async _config() {
    await Font.loadAsync({
      'abel-regular': require('./assets/fonts/Abel-Regular.ttf'),
    });

    StatusBar.setHidden(true)

    Firebase.initialize()

    setTimeout(() => {
      this._goToLogin()
    }, 1000);
  }

  async _goToLogin() {
    this.navigator && this.navigator.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Login'})
  }

  render() {
    return (
      <View style={styles.container}>
        <RootNavigation ref={nav => { this.navigator = nav }} />
        <Alert ref={alert => Alert.setAsGlobalInstance(alert)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})