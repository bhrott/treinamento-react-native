import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Animated,
    Image,
    FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import { Text } from 'boo-ui/components'
import { ColorPalette } from 'boo-ui/utils'

const { height, width } = Dimensions.get('window')

export default class AnswerList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            opened: false
        }

        this.containerTopPosition = new Animated.Value(height)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.opened !== this.state.opened) {
            this._reactToNewProps(nextProps)
        }
    }

    _reactToNewProps(props) {
        this.setState({ opened: props.opened })

        let nextTopPosition = props.opened ? 0 : height

        Animated.timing(
            this.containerTopPosition,
            {
                toValue: nextTopPosition,
                duration: 300
            }
        ).start()
    }

    _requestClose() {
        this.props.onRequestClose()
    }

    _renderHeader() {
        return (
            <TouchableOpacity 
                onPress={this._requestClose.bind(this)}
                style={headerStyle.container}>
                <Image 
                    source={require('./img/back.png')}
                    style={headerStyle.imageBack}/>
                <Text
                    numberOfLines={1} 
                    style={headerStyle.text}>
                    {this.props.quest.title}
                </Text>
                <View style={headerStyle.divisor}></View>
            </TouchableOpacity>
        )
    }

    _renderBody() {
        const bodyStyle = StyleSheet.create({
            container: {
                flex: 1,
                width: '100%'
            },
            list: {

            }
        })

        const listStyles = StyleSheet.create({
            container: {
                width: '90%'
            }
        })

        return (
            <View style={bodyStyle.container}>
                <FlatList
                    style={listStyles.container}
                    data={[]}
                    keyExtractor={(item, index) => { return item.key }}
                    renderItem={this._renderListItem.bind(this)}
                />
            </View>
        )
    }

    _renderListItem({ item }) {
        const listItemStyle = StyleSheet.create({
            container: {
                height: 100,
                width: '100%',
                borderColor: ColorPalette.grayLight,
                borderBottomWidth: 1
            }
        })

        return (
            <View style={listItemStyle.container}>

            </View>
        )
    }

    render() {
        return (
            <Animated.View style={[styles.container, { top: this.containerTopPosition }]}>
                <View style={styles.content}>
                    {this._renderHeader()}
                    {this._renderBody()}
                </View>
            </Animated.View>
        )
    }
}

AnswerList.propTypes = {
    quest: PropTypes.object.isRequired,
    opened: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired
}

AnswerList.defaultProps = {
    opened: false,
    onRequestClose: () => {}
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: ColorPalette.white
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

const headerStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    divisor: {
        height: 1,
        backgroundColor: ColorPalette.grayUltraLight,
        width: '95%'
    },
    text: {
        color: ColorPalette.grayLight,
        marginBottom: 10,
        width: '70%'
    },
    imageBack: {
        position: 'absolute',
        top: 15,
        left: 20,
        transform:[{rotate: '-90 deg'}]
    }
})

