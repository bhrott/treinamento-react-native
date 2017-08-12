import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import { 
    Text,
    TabBarIcon
} from 'boo-ui/components'
import { ColorPalette } from 'boo-ui/utils'
import { LoggedUser } from 'boo-domain'
import CreateNewQuestModal from './CreateNewQuestModal'

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

    constructor(props) {
        super(props)

        this.state = {
            createNewQuestModalIsOpened: false
        }
    }

    _openCreateNewQuestModal() {
        this.setState({
            createNewQuestModalIsOpened: true
        })
    }

    _closeCreateNewQuestModal() {
        this.setState({
            createNewQuestModalIsOpened: false
        })
    }

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

    _renderTitle() {
        return (
            <View style={titleStyles.container}>
                <Text style={titleStyles.text}>lastest quests</Text>
                <TouchableHighlight onPress={this._openCreateNewQuestModal.bind(this)}>
                    <Image
                        style={titleStyles.image}
                        source={require('./img/add-new-quest.png')}
                        resizeMode={'contain'}
                    />
                </TouchableHighlight>
                
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderHeader()}
                {this._renderTitle()}

                <CreateNewQuestModal 
                    visible={this.state.createNewQuestModalIsOpened}
                    onRequestClose={this._closeCreateNewQuestModal.bind(this)} />
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

const titleStyles = StyleSheet.create({
    container: {
        height: 35,
        width: '90%',
        marginTop: 10,
        borderColor: ColorPalette.grayLight,
        borderBottomWidth: 1
    },
    text: {
        color: ColorPalette.greenPrimary,
        fontSize: 22
    },
    image: {
        height: 27,
        width: 27,
        position: 'absolute',
        bottom: 5,
        right: 0
    }
})

