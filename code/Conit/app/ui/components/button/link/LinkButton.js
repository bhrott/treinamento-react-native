import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class LinkButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[style.container, this.props.style]}
            >
                <Text style={[style.text, this.props.textStyle]}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    text: {
        textDecorationLine: 'underline'
    },
    container: {
        // backgroundColor: 'red'
    }
})
