import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Clipboard,
    TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import { ColorPalette } from 'boo-ui/utils'
import Text from '../text/Text'

export default class BooQuestShareCode extends React.Component {
    _copyToClipboard() {
        Clipboard.setString(this.props.code)
        this.props.onCopiedToClipboard({
            message: 'Share code copied to clipboard.'
        })
    }

    render() {
        return (
            <TouchableOpacity 
                activeOpacity={0.5} 
                style={shareCodeStyle.container}
                onPress={this._copyToClipboard.bind(this)}>
                <View style={shareCodeStyle.content}>
                    <View style={shareCodeStyle.textContainer}>
                        <Text style={[shareCodeStyle.text, { fontSize: 12 }]}>
                            share code
                        </Text>
                        <Text style={[shareCodeStyle.text, { fontSize: 18 }]}>
                            {this.props.code}
                        </Text>
                    </View>
                    <View style={shareCodeStyle.imageContainer}>
                        <Image
                            source={require('./img/copy.png')}
                            resizeMode={'contain'}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

BooQuestShareCode.propTypes = {
    code: PropTypes.string.isRequired,
    onCopiedToClipboard: PropTypes.func
}

BooQuestShareCode.defaultProps = {
    onCopiedToClipboard: ({ message }) => {}
}

const shareCodeStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: ColorPalette.grayLight
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10
    },
    textContainer: {
        flex: 3
    },
    text: {
        color: ColorPalette.white
    },
    imageContainer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10
    }
})