import React from 'react'
import { Image } from 'react-native'

export default {
    Parchment: (props) => <Image {...props} source={require('./img/parchment.png')} />,
    AddNewQuest: (props) => <Image {...props} source={require('./img/add-new-quest.png')} />,
    Alarm: (props) => <Image {...props} source={require('./img/alarm.png')} />,
    CommentsCount: (props) => <Image {...props} source={require('./img/comments-count.png')} />,
    Logo: (props) => <Image {...props} source={require('./img/logo.png')} />,
    LogoCreateAccount: (props) => <Image {...props} source={require('./img/logo-create-account.png')} />,
    Back: (props) => <Image {...props} source={require('./img/back.png')} />,
    Ink: (props) => <Image {...props} source={require('./img/ink.png')} />,
    AddNewComment: (props) => <Image {...props} source={require('./img/add-new-comment.png')} />,
    TabIcons: {
        Account: (props) => <Image {...props} source={require('./img/tab-icons/account-tab-icon.png')} />,
        Feed: (props) => <Image {...props} source={require('./img/tab-icons/feed-tab-icon.png')} />,
        MyQuests: (props) => <Image {...props} source={require('./img/tab-icons/my-quests-tab-icon.png')} />,
        Settings: (props) => <Image {...props} source={require('./img/tab-icons/settings-tab-icon.png')} />,
    }
}