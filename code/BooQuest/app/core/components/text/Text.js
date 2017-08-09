import React, { Component } from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'

export default class BooText extends Component {
    render() {
        return (
            <Text style={[style.text, this.props.style]}>
                {this.props.children}
            </Text>
        )
    }
}

const style = StyleSheet.create({
    text: {
        fontFamily: 'abel-regular'
    }
})