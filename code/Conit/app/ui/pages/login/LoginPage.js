import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
    Animated,
    TouchableOpacity
} from 'react-native'

import { ColorPalette } from 'conit/ui/theme'
import {
    Input,
    PrimaryButton,
    GoogleSigninButton,
    LinkButton,
    Icon
} from 'conit/ui/components'
import { debounce } from 'conit/core/pure-functions'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formPositionBottom: new Animated.Value(80)
        }

        this._onSigninPressed = this._onSigninPressed.bind(this)
        this._onSigninWithGooglePressed = this._onSigninWithGooglePressed.bind(
            this
        )
        this._onCreateAccountPressed = this._onCreateAccountPressed.bind(this)
        this._dismissKeyboard = this._dismissKeyboard.bind(this)
    }

    componentDidMount() {
        this.keyboardWillShowListener = Keyboard.addListener(
            'keyboardWillShow',
            debounce(this.keyboardWillShow.bind(this), 250)
        )
        this.keyboardWillHideListener = Keyboard.addListener(
            'keyboardWillHide',
            debounce(this._keyboardWillHide.bind(this), 250)
        )
    }

    componentWillUnmount() {
        this.keyboardWillShowListener.remove()
        this.keyboardWillHideListener.remove()
    }

    keyboardWillShow() {
        Animated.timing(this.state.formPositionBottom, {
            toValue: 250,
            duration: 250
        }).start()
    }

    _keyboardWillHide() {
        Animated.timing(this.state.formPositionBottom, {
            toValue: 80,
            duration: 250
        }).start()
    }

    _onSigninPressed() {
        alert('signin pressed')
    }

    _onSigninWithGooglePressed() {
        alert('google signin pressed')
    }

    _onCreateAccountPressed() {
        alert('create account pressed')
    }

    _dismissKeyboard() {
        Keyboard.dismiss()
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.page}
                activeOpacity={1}
                onPress={this._dismissKeyboard}
            >
                <View style={styles.logoContainer}>
                    <Icon.Logo />
                </View>
                <Animated.View
                    style={[
                        formStyle.container,
                        { bottom: this.state.formPositionBottom }
                    ]}
                >
                    <View style={formStyle.content}>
                        <View style={formStyle.signTextContainer}>
                            <Text>sign in with your account</Text>
                        </View>
                        <Input
                            style={formStyle.input}
                            placeholder="myemail@emai.com"
                        />
                        <Input
                            style={[formStyle.input, { marginTop: 10 }]}
                            placeholder="******"
                        />
                        <PrimaryButton
                            text="SIGNIN"
                            onPress={this._onSigninPressed}
                            style={formStyle.button}
                        />
                        <GoogleSigninButton
                            onPress={this._onSigninWithGooglePressed}
                            style={formStyle.button}
                        />
                    </View>
                </Animated.View>
                <View style={styles.createAccountContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>or </Text>
                        <LinkButton
                            text={'CREATE AN ACCOUNT'}
                            onPress={this._onCreateAccountPressed}
                            textStyle={{ fontWeight: 'bold' }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
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
        backgroundColor: ColorPalette.primary,
        alignItems: 'center',
        justifyContent: 'center'
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
        width: '90%'
    },
    button: {
        width: '90%',
        marginTop: 20
    }
})
