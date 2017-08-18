import React from 'react'
import {
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    BackHandler
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types'
import { ColorPalette } from 'boo-ui/utils'
import { 
    Text,
    QuestShareCode
} from 'boo-ui/components'

export default class QuestDetailPage extends React.Component {
    constructor(props) {
        super(props)
        this.quest = this.props.navigation.state.params.quest
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._goBack.bind(this))
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._goBack.bind(this))
    }

    _goBack() {
        this.props.navigation.dispatch(NavigationActions.back())        
    }

    _renderHeader() {
        return (
            <View style={headerStyles.container}>
                <View style={headerStyles.content}>
                    <Image 
                        source={require('./img/parchment.png')}
                        resizeMode={'contain'} />
                    <Text style={headerStyles.title}>{this.quest.title}</Text>
                </View>

                <TouchableOpacity 
                    onPress={this._goBack.bind(this)}
                    style={headerStyles.backButton}>
                    <Image
                        source={require('./img/back.png')}
                        resizeMode={'contain'}/>
                </TouchableOpacity>
            </View>
        )
    }

    _renderDescription() {return (
            <View style={descriptionStyle.container}>
                <ScrollView>
                    <Text
                        style={descriptionStyle.text}>{this.quest.description || ''}</Text>
                </ScrollView>
            </View>
        )
    }

    _renderShareCode() {
        return (
            <View style={shareCodeStyle.container}>
                <QuestShareCode code={this.quest.shareCode} />
            </View>
        )
    }

    _renderAnswers() {
        return (
            <TouchableOpacity style={answersStyle.container}>
                <View style={answersStyle.divisor}></View>
                <Text style={answersStyle.text}>Answers (0)</Text>
            </TouchableOpacity>
        )
    }

    render() {
        if (!this.quest) {
            return null
        }

        return (
            <View style={styles.container}>
                {this._renderHeader()}
                {this._renderDescription()}
                {this._renderShareCode()}
                {this._renderAnswers()}
            </View>
        )
    }
}

QuestDetailPage.propTypes = {
    quest: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const headerStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        padding: 20,
        paddingTop: 40
    },
    backButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 77,
        height: 70
    },
    title: {
        fontSize: 18,
        marginTop: 12,
        textAlign: 'center'
    }
})

const descriptionStyle = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        flex: 1
    },
    text: {
        textAlign: 'justify',
        color: ColorPalette.grayDark
    }
})

const shareCodeStyle = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20
    }
})

const answersStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        paddingTop: 10,
        alignItems: 'center'
    },
    divisor: {
        height: 1,
        backgroundColor: ColorPalette.grayUltraLight,
        width: '95%'
    },
    text: {
        color: ColorPalette.grayLight,
        marginTop: 15
    }
})