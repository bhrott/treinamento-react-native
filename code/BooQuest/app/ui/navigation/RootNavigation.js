import {
    StackNavigator,
} from 'react-navigation';

import {
    LoginPage,
    LoadingPage
} from 'boo-ui/pages'

export default StackNavigator({
    Login: {
        screen: LoginPage
    },
    Loading: {
        screen: LoadingPage
    }
}, {
    initialRouteName: 'Loading'
});