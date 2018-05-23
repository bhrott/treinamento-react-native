import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LoginPage } from 'conit/ui/pages'

export default class App extends React.Component {
  render() {
    return (
      <LoginPage />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
