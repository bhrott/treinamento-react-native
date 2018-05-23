import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { ColorPalette } from 'conit/ui/theme'
import { Input, PrimaryButton, GoogleSigninButton } from 'conit/ui/components'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this._onSigninPressed = this._onSigninPressed.bind(this)
        this._onSigninWithGoogle = this._onSigninWithGoogle.bind(this)
    }

    _onSigninPressed() {
        alert('signin pressed')
    }

    _onSigninWithGoogle() {

    }

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.logoContainer}></View>
                <View style={formStyle.container}>
                    <View style={formStyle.content}>
                        <View style={formStyle.signTextContainer}>
                            <Text>sign in with your account</Text>
                        </View>
                        <Input
                            style={formStyle.input}
                            placeholder='myemail@emai.com'
                        />
                        <Input
                            style={[formStyle.input, { marginTop: 10 }]}
                            placeholder='******'
                        />
                        <PrimaryButton
                            text='SIGNIN'
                            onPress={this._onSigninPressed}
                            style={formStyle.button}
                        />
                        <GoogleSigninButton
                            onPress={this._onSigninWithGoogle}
                            style={formStyle.button}
                        />
                    </View>
                </View>
                <View style={styles.createAccountContainer}>
                    <Text>or <Text style={{ fontWeight: 'bold' }}>CREATE AN ACCOUNT</Text></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: ColorPalette.pageBackground
    },
    logoContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: ColorPalette.primary
    },
    createAccountContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 40,
        width: '100%'
    }
})

const formStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: 300,
        bottom: 80,
        alignItems: 'center'
    },
    content: {
        height: '100%',
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center'
    },
    signTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 10
    },
    input: {
        width: '90%',
    },
    button: {
        width: '90%',
        marginTop: 20
    }
})