import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { ColorPalette } from 'conit/ui/theme'

export default class Input extends React.Component {

    render() {
        return (
            <TextInput {...this.props} style={[style.input, this.props.style]} />
        )
    }
}

const style = StyleSheet.create({
    input: {
        height: 42,
        borderBottomWidth: 1,
        borderBottomColor: ColorPalette.inputLine
    }
})