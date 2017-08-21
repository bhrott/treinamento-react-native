import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Animated,
    Image,
    FlatList,
    Easing
} from 'react-native'
import PropTypes from 'prop-types'
import {
    Text,
    KeyboardScrollView,
    LocalImage,
    ActionFloatButton
} from 'boo-ui/components'
import { ColorPalette } from 'boo-ui/utils'
import { QuestCommentsListener } from 'boo-domain'

const { height, width } = Dimensions.get('window')

export default class CommentsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            opened: false,
            comments: []
        }

        this.containerTopPosition = new Animated.Value(height)
        this.newCommentsOpacity = new Animated.Value(0)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.opened !== this.state.opened) {
            this._reactToNewProps(nextProps)
        }

        if (nextProps.opened) {
            this._initializeListener()
        }
    }

    componentWillUnmount() {
        if (this.commentsListener) {
            this.commentsListener.unregister()
        }
    }

    _initializeListener() {
        this.commentsListener = new QuestCommentsListener(this.props.quest.shareCode, this._onReceiveComments.bind(this))
    }

    _onReceiveComments(comments) {
        let list = Object.keys(comments || {}).map(key => {
            let comment = comments[key]
            comment.key = key
            return comment
        })

        this.setState({
            comments: list
        })
    }

    _reactToNewProps(props) {
        const { opened } = props

        this.setState({ opened: opened })

        let nextTopPosition = opened ? 0 : height

        Animated.timing(
            this.containerTopPosition,
            {
                toValue: nextTopPosition,
                duration: 300
            }
        ).start(() => {
            this._setCommentsButtonOpacity(opened ? 1 : 0)
        })
    }

    _setCommentsButtonOpacity(opacity) {
        Animated.timing(
            this.newCommentsOpacity,
            {
                toValue: opacity,
                easing: Easing.linear,
                duration: 300,
            }
        ).start();
    }

    _requestClose() {
        this.props.onRequestClose()
    }

    _openNewCommentForm() {

    }

    _renderHeader() {
        return (
            <TouchableOpacity
                onPress={this._requestClose.bind(this)}
                style={headerStyle.container}>
                <LocalImage.Back style={headerStyle.imageBack} />
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
        return (
            <View style={bodyStyle.container}>
                <FlatList
                    style={listStyles.container}
                    data={this.state.comments}
                    keyExtractor={(item, index) => { return item.key }}
                    renderItem={this._renderListItem.bind(this)}
                />
                <Animated.View
                    style={[bodyStyle.addNewCommentButton, { opacity: this.newCommentsOpacity }]}>
                    <ActionFloatButton
                        image={LocalImage.AddNewComment}
                        onPress={this._openNewCommentForm.bind(this)}
                    />
                </Animated.View>
            </View>
        )
    }

    _renderListItem({ item }) {
        return (
            <View style={listItemStyle.container}>
                <Text style={listItemStyle.author}>A blue zombie</Text>
                <Text>{item.text}</Text>
            </View>
        )
    }

    render() {
        return (
            <Animated.View style={[styles.container, { top: this.containerTopPosition }]}>
                <KeyboardScrollView>
                    <View style={styles.content}>
                        {this._renderHeader()}
                        {this._renderBody()}
                    </View>
                </KeyboardScrollView>
            </Animated.View>
        )
    }
}

CommentsList.propTypes = {
    quest: PropTypes.object.isRequired,
    opened: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired
}

CommentsList.defaultProps = {
    opened: false,
    onRequestClose: () => { }
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
        transform: [{ rotate: '-90 deg' }]
    }
})

const bodyStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    addNewCommentButton: {
        position: 'absolute',
        bottom: 10,
        right: 10
    }
})

const listStyles = StyleSheet.create({
    container: {
        width: '90%'
    }
})

const listItemStyle = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: ColorPalette.grayUltraLight,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    author: {
        color: ColorPalette.grayLight
    }
})