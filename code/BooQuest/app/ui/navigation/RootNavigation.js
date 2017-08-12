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
        screen: LoginPage
    },
    Loading: {
        screen: LoadingPage
    },
    Home: {
        screen: HomeNavigation
    }
}, {
    initialRouteName: 'Loading'
});