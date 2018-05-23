import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import { ColorPalette } from 'conit/ui/theme'

export default class Input extends React.Component {
    _renderErrorMessage() {
        if (this.props.errorMessage) {
            return <Text>{this.props.errorMessage}</Text>
        }
        return null
    }

    render() {
        return (
            <View style={[style.container, this.props.style.containerStyle]}>
                <TextInput
                    {...this.props}
                    style={[style.input, this.props.style]}
                />
                {this._renderErrorMessage()}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        width: '90%'
    },
    input: {
        height: 42,
        borderBottomWidth: 1,
        borderBottomColor: ColorPalette.inputLine
    },
    errorMessage: {
        TODO
    }
})
