import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { ColorPalette } from 'conit/ui/theme'

export default class PrimaryButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={[style.container, this.props.style]} onPress={this.props.onPress}>
                <Text style={style.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: ColorPalette.primary,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})