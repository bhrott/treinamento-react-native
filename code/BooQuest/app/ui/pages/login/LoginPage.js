import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    InteractionManager
} from 'react-native'
import {
    Text,
    Email,
    Password,
    PrimaryButton,
    LinkButton,
    KeyboardScrollView,
    Alert
} from 'boo-ui/components'
import { ColorPalette } from 'boo-ui/utils'
import { TextValidator } from 'boo-core'
import { 
    signInUserWithEmailAndPassword,
    LoggedUser
} from 'boo-domain'

import CreateAccountModal from './CreateAccountModal'

export default class LoginPage extends React.Component {
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    }

    constructor(props) {
        super(props)

        this.state = {
            createAccountModalIsVisible: false,
            email: 'ben-hur@cwi.com.br',
            password: 'abc123',

            emailInvalid: false,
            passwordInvalid: false
        }
    }

    _openAccountModal() {
        this.setState({
            createAccountModalIsVisible: true
        })
    }

    _closeAccountModal() {
        this.setState({
            createAccountModalIsVisible: false
        })
    }

    async _signIn() {
        if (!this._validateForm()) {
            return
        }

        try {
            await signInUserWithEmailAndPassword(this.state.email, this.state.password)
            //Alert.getGlobalInstance().showSuccess(`Signin success (uid: ${LoggedUser.getCurrent().uid})`)
            this.props.navigation.navigate('Home')
        } catch (error) {
            console.log(error)
            this._clearPassword()
            Alert.getGlobalInstance().showError(error.message)       
        }
    }

    _validateForm() {
        let nextState = {
            emailInvalid: TextValidator.isNullOrEmpty(this.state.email),
            passwordInvalid: TextValidator.isNullOrEmpty(this.state.password)
        }

        this.setState(nextState)

        if (nextState.emailInvalid || nextState.passwordInvalid) {
            return false
        }

        return true
    }

    _clearPassword() {
        this._onChangeField('password', '')
    }

    _onCancelSignup() {
        this._closeAccountModal()
    }

    _onSignupSuccess() {
        this._closeAccountModal()

        setTimeout(() => {
            Alert.getGlobalInstance().showSuccess('Signin Sucess =)')
        }, 1000);
    }

    _onChangeField(name, value) {
        let state = {}
        state[name] = value
        state[`${name}Invalid`] = false

        this.setState(state)
    }

    render() {
        return (
            <KeyboardScrollView 
                style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={logoStyle.container}>
                        <Image source={require('../img/logo.png')} />
                        <View>
                            <Text style={logoStyle.title}>
                                BOO QUEST
                            </Text>
                        </View>
                    </View>
                    <View style={formStyle.container}>
                        <Email
                            style={formStyle.input}
                            error={this.state.emailInvalid}
                            onChangeText={val => this._onChangeField('email', val)}
                            value={this.state.email}
                        />
                        <Password
                            style={formStyle.input}
                            placeholder='password'
                            error={this.state.passwordInvalid}
                            onChangeText={val => this._onChangeField('password', val)}
                            value={this.state.password}
                        />
                        <PrimaryButton
                            style={formStyle.button}
                            text='sign in'
                            onPress={this._signIn.bind(this)}
                        />
                        <LinkButton
                            style={formStyle.button}
                            text='sign up'
                            onPress={this._openAccountModal.bind(this)}
                        />
                    </View>
                </View>
                <CreateAccountModal 
                    visible={this.state.createAccountModalIsVisible}
                    onCancel={this._onCancelSignup.bind(this)}
                    onSignup={this._onSignupSuccess.bind(this)} />
            </KeyboardScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        backgroundColor: ColorPalette.purplePrimary
    }
})

const logoStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorPalette.purplePrimary
    },
    image: {
        height: 171,
        width: 171
    },
    title: {
        fontSize: 40,
        color: ColorPalette.white,
        marginTop: 40
    }
})

const formStyle = StyleSheet.create({
    container: {
        height: 226,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: ColorPalette.white,
    },
    input: {
        width: '80%',
        marginTop: 5
    },
    button: {
        width: '80%',
        marginTop: 5
    }
})