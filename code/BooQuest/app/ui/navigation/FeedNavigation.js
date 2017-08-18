import React from 'react'
import {
    StackNavigator,
} from 'react-navigation';

import {
    FeedPage,
    QuestDetailPage
} from 'boo-ui/pages'

export default StackNavigator({
    Feed: {
        screen: FeedPage,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    },
    QuestDetail: {
        screen: QuestDetailPage,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
            foo: true
        }
    }
}, {
    initialRouteName: 'Feed'
})