import React from 'react'
import {
    StackNavigator,
} from 'react-navigation';

import {
    LoginPage,
    LoadingPage
} from 'boo-ui/pages'

import HomeNavigation from './HomeNavigation'

export default StackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    },
    Loading: {
        screen: LoadingPage,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    },
    Home: {
        screen: HomeNavigation,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
}, {
    initialRouteName: 'Loading'
});