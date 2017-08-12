import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'
import { 
    Text,
    TabBarIcon
} from 'boo-ui/components'
import { ColorPalette } from 'boo-ui/utils'
import { LoggedUser } from 'boo-domain'

export default class FeedPage extends React.Component {
    static navigationOptions = {
        title: 'feed',
        header: null,
        showIcon: true,
        tabBarIcon: ({ tintColor }) => (
            <TabBarIcon
                source={require('./img/tab-icon.png')}
                tintColor={tintColor}
            />
        ),
    };

    _renderHeader() {
        return (
            <View style={headerStyles.container}>
                <View style={headerStyles.content}>
                    <Text style={headerStyles.userEmail}>{ LoggedUser.getCurrent().email }</Text>

                    <View style={headerNotificationStyles.container}>
                        <View style={headerNotificationStyles.content}>
                            <Image
                                source={require('./img/alarm.png')}
                            />
                            <Text style={headerNotificationStyles.counter}>0</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderHeader()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: ColorPalette.purplePrimary,
        width: '100%',
        height: 66
    },
    content: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20
    },
    userEmail: {
        fontSize: 18,
        color: ColorPalette.white
    }
})

const headerNotificationStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 30,
        width: 30,
        top: 18,
        right: 18
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 20,
        width: 20
    },
    counter: {
        position: 'absolute',
        top: 0,
        right: 0,
        fontSize: 12,
        color: ColorPalette.white
    }
})

