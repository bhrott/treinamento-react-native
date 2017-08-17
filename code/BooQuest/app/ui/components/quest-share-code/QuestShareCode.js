import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import PropTypes from 'prop-types'
import { ColorPalette } from 'boo-ui/utils'
import Text from '../text/Text'

export default class BooQuestShareCode extends React.Component {
    render() {
        return (
            <View style={shareCodeStyle.container}>
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
            </View>
        )
    }
}

BooQuestShareCode.propTypes = {
    code: PropTypes.string.isRequired
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