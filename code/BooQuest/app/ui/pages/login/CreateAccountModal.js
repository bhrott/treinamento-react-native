import React from 'react'
import {
    Modal,
    View,
    StyleSheet,
    Image
} from 'react-native'
import {
    Text,
    Input,
    Email,
    Password,
    PrimaryButton,
    LinkButton,
    KeyboardScrollView,
    Alert,
    ModalHeader
} from 'boo-ui/components'
import {
    TextValidator
} from 'boo-core'
import {
    signUpUser
} from 'boo-domain'

export default class CreateAccountModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = this._getDefaultState()
    }

    _getDefaultState() {
        const defaultState = {
            // form data
            email: '',
            password: '',
            confirmPassword: '',

            // form validation
            emailInvalid: false,
            passwordInvalid: false,
            confirmPasswordInvalid: false,
        }

        return defaultState
    }

    _resetState() {
        this.setState(this._getDefaultState())
    }

    _cancel() {
        this.props.onCancel()
        this._resetState()
    }

    async _signup() {
        if (!this._validateForm()) {
            return
        }

        try {
            await signUpUser(this.state.email, this.state.password)

            this.props.onSignup()
            this._resetState()
        }
        catch (error) {
            this._clearPasswords()
            this.alertInstance.showError(error.message)
        }
    }

    _clearPasswords() {
        this._onChangeField('password', '')
        this._onChangeField('confirmPassword', '')
    }

    _validateForm() {
        let newState = {
            emailInvalid: TextValidator.isNullOrEmpty(this.state.email),
            passwordInvalid: TextValidator.isNullOrEmpty(this.state.password),
            confirmPasswordInvalid:
            TextValidator.isNullOrEmpty(this.state.confirmPassword)
            || this.state.password != this.state.confirmPassword
        }

        this.setState(newState)

        for (var k in newState) {
            if (newState.hasOwnProperty(k)) {
                if (newState[k] === true) {
                    return false
                }
            }
        }

        return true
    }

    _onChangeField(name, val) {
        let state = {}
        state[name] = val
        state[`${name}Invalid`] = false

        this.setState(state)
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.visible}
                onRequestClose={this._cancel.bind(this)}
            >
                <KeyboardScrollView>
                    <View style={style.container}>
                        <ModalHeader
                            text={'Create your account'}
                            image={require('./img/logo-create-account.png')}
                        />
                        <View style={formStyle.container}>
                            <Email
                                style={formStyle.input}
                                error={this.state.emailInvalid}
                                onChangeText={val => this._onChangeField('email', val)}
                                value={this.state.email} />
                            <Password
                                style={formStyle.input}
                                placeholder={'password'}
                                error={this.state.passwordInvalid}
                                onChangeText={val => this._onChangeField('password', val)}
                                value={this.state.password} />
                            <Password
                                style={formStyle.input}
                                placeholder={'confirm password'}
                                error={this.state.confirmPasswordInvalid}
                                onChangeText={val => this._onChangeField('confirmPassword', val)}
                                value={this.state.confirmPassword} />
                            <PrimaryButton
                                style={formStyle.button}
                                text={'sign up'}
                                onPress={this._signup.bind(this)} />
                            <LinkButton
                                style={formStyle.button}
                                text={'cancel'}
                                onPress={this._cancel.bind(this)} />
                        </View>
                    </View>
                </KeyboardScrollView>
                <Alert ref={inst => {this.alertInstance = inst}} />
            </Modal>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

const headerStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 60,
        height: 74
    },
    title: {
        fontSize: 18,
        marginTop: 20
    }
})

const formStyle = StyleSheet.create({
    container: {
        flex: 1.5,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    input: {
        width: '80%',
        marginTop: 5
    },
    button: {
        width: '80%',
        marginTop: 10
    }
})