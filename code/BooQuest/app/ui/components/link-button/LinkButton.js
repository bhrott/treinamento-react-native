import React from 'react'
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import Text from '../text/Text'

export default class BooLinkButton extends React.Component {
    render() {
        return (
            <TouchableOpacity 
                style={[style.container, this.props.style]}
                activeOpacity={0.7}
                onPress={this.props.onPress}>
                <Text style={style.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 18
    }
})