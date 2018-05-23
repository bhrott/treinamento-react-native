import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { ColorPalette } from 'conit/ui/theme'
import Icon from '../../icon/Icon'

export default class GoogleSigninButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={[style.container, this.props.style]} onPress={this.props.onPress}>
                <Icon.GoogleSignin style={style.icon} />
                <Text style={style.text}>SIGNIN WITH GOOGLE</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    text: {
        color: 'black'
    },
    icon: {
        position: 'absolute',
        left: 20,
        top: 11
    }
})