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
    KeyboardScrollView
} from 'boo-ui/components'
import {
    TextValidator
} from 'boo-core'
import {
    CreateUser
} from 'boo-domain'

export default class CreateAccountModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = this._getDefaultState()
    }

    _getDefaultState() {
        const defaultState = {
            email: '',
            password: '',
            confirmPassword: '',

            // form validation
            emailInvalid: false,
            passwordInvalid: false,
            confirmPasswordInvalid: false
        }

        return JSON.parse(JSON.stringify(defaultState))
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
            let user = await CreateUser(this.state.email, this.state.password)
            
            this.props.onSignup({ user })
            this._resetState()
        }
        catch (error) {
            this._clearPasswords()
            alert(error.message)
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
                        <View style={headerStyle.container}>
                            <Image
                                source={require('./img/logo-create-account.png')}
                                style={headerStyle.image} />
                            <Text style={headerStyle.title}>create your account</Text>
                        </View>
                        <View style={formStyle.container}>
                            <View>
                                <Email
                                    style={formStyle.input}
                                    error={this.state.emailInvalid}
                                    onChangeText={val => this._onChangeField('email', val)}
                                    value={this.state.email} />
                            </View>
                            <View>
                                <Password
                                    style={formStyle.input}
                                    placeholder={'password'}
                                    error={this.state.passwordInvalid}
                                    onChangeText={val => this._onChangeField('password', val)}
                                    value={this.state.password} />
                            </View>
                            <View>
                                <Password
                                    style={formStyle.input}
                                    placeholder={'confirm password'}
                                    error={this.state.confirmPasswordInvalid}
                                    onChangeText={val => this._onChangeField('confirmPassword', val)}
                                    value={this.state.confirmPassword} />
                            </View>
                            <View>
                                <PrimaryButton
                                    style={formStyle.button}
                                    text={'sign up'} 
                                    onPress={this._signup.bind(this)}/>
                            </View>
                            <View>
                                <LinkButton
                                    style={formStyle.button}
                                    text={'cancel'}
                                    onPress={this._cancel.bind(this)} />
                            </View>
                        </View>
                    </View>
                </KeyboardScrollView>
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
        height: 200,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        paddingTop: 40,
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    input: {
        width: 280,
        marginTop: 5
    },
    button: {
        width: 280,
        marginTop: 10
    }
})