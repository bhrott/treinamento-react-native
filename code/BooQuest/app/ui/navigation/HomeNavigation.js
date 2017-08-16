import {
    TabNavigator,
} from 'react-navigation';

import { 
    FeedPage,
    MyQuestsPage,
    MyAccountPage,
    SettingsPage
} from 'boo-ui/pages'
import { ColorPalette } from 'boo-ui/utils'

const HomeNavigation = TabNavigator({
    Feed: {
        screen: FeedPage
    },
    MyQuests: {
        screen: MyQuestsPage
    },
    MyAccount: {
        screen: MyAccountPage
    },
    Settings: {
        screen: SettingsPage
    }
}, {
        initialRouteName: 'Feed',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: ColorPalette.greenPrimary,
            inactiveTintColor: ColorPalette.grayLight,
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: ColorPalette.white,
            },
        }

    });

HomeNavigation.navigationOptions = {
    gesturesEnabled: false
}

export default HomeNavigation