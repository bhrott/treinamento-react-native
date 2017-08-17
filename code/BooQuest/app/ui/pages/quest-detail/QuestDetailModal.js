import React from 'react'
import {
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import PropTypes from 'prop-types'
import { ColorPalette } from 'boo-ui/utils'
import { 
    Text,
    QuestShareCode
} from 'boo-ui/components'

export default class BooQuestDetailModal extends React.Component {
    _cancel() {
        this.props.onRequestClose()
    }

    _renderHeader() {
        return (
            <View style={headerStyles.container}>
                <View style={headerStyles.content}>
                    <Image 
                        source={require('./img/parchment.png')}
                        resizeMode={'contain'} />
                    <Text style={headerStyles.title}>{this.props.quest.title}</Text>
                </View>

                <TouchableOpacity 
                    onPress={this._cancel.bind(this)}
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
                        style={descriptionStyle.text}>{this.props.quest.description || ''}</Text>
                </ScrollView>
            </View>
            
        )
    }

    _renderShareCode() {
        return (
            <View style={shareCodeStyle.container}>
                <QuestShareCode code={this.props.quest.shareCode} />
            </View>
        )
    }

    _renderComments() {
        const commentsStyle = StyleSheet.create({
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

        return (
            <TouchableOpacity style={commentsStyle.container}>
                <View style={commentsStyle.divisor}></View>
                <Text style={commentsStyle.text}>Comments (0)</Text>
            </TouchableOpacity>
        )
    }

    render() {
        if (!this.props.quest) {
            return null
        }

        return (
            <Modal
                animationType={"fade"}
                transparent={false}
                visible={this.props.visible}
                onRequestClose={this._cancel.bind(this)}>
                <View style={styles.container}>
                    {this._renderHeader()}
                    {this._renderDescription()}
                    {this._renderShareCode()}
                    {this._renderComments()}
                </View>
            </Modal>
        )
    }
}

BooQuestDetailModal.propTypes = {
    quest: PropTypes.object,
    onRequestClose: PropTypes.func.isRequired
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
        paddingTop: 60
    },
    backButton: {
        position: 'absolute',
        top: 20,
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