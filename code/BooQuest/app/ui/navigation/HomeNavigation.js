import React from 'react'
import {
    TabNavigator,
} from 'react-navigation';

import { 
    FeedPage,
    MyQuestsPage,
    MyAccountPage,
    SettingsPage
} from 'boo-ui/pages'

import {
    TabBarIcon
} from 'boo-ui/components'

import { ColorPalette } from 'boo-ui/utils'

import FeedNavigation from './FeedNavigation'

const HomeNavigation = TabNavigator({
    Feed: {
        screen: FeedNavigation,
        navigationOptions: {
            title: 'feed',
            header: null,
            showIcon: true,
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon
                    source={require('./img/tab-icons/feed-tab-icon.png')}
                    tintColor={tintColor}
                />
            ),
        }
    },
    MyQuests: {
        screen: MyQuestsPage,
        navigationOptions: {
            title: 'my quests',
            header: null,
            showIcon: true,
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon
                    source={require('./img/tab-icons/my-quests-tab-icon.png')}
                    tintColor={tintColor}
                />
            ),
        }
    },
    MyAccount: {
        screen: MyAccountPage,
        navigationOptions: {
            title: 'account',
            header: null,
            showIcon: true,
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon
                    source={require('./img/tab-icons/account-tab-icon.png')}
                    tintColor={tintColor}
                />
            ),
        }
    },
    Settings: {
        screen: SettingsPage,
        navigationOptions: {
            title: 'settings',
            header: null,
            showIcon: true,
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon
                    source={require('./img/tab-icons/settings-tab-icon.png')}
                    tintColor={tintColor}
                />
            ),
        }
    }
}, {
        initialRouteName: 'Feed',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: ColorPalette.greenPrimary,
            inactiveTintColor: ColorPalette.grayLight,
            showIcon: true,
            labelStyle: {
                fontSize: 10,
            },
            style: {
                backgroundColor: ColorPalette.white,
            },
            indicatorStyle: {
                backgroundColor: ColorPalette.white
            }
        }

    });

HomeNavigation.navigationOptions = {
    gesturesEnabled: false
}

export default HomeNavigation