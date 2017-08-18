import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    InteractionManager,
    BackHandler
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
    constructor(props) {
        super(props)

        this.state = {
            createAccountModalIsVisible: false,

            // form
            email: 'ben-hur@cwi.com.br',
            password: 'abc123',

            inLoading: false,

            // form validation
            emailInvalid: false,
            passwordInvalid: false
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid.bind(this))
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid.bind(this))
    }

    _onBackAndroid() {
        return true
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
            this.setState({ inLoading: true })
            
            await signInUserWithEmailAndPassword(this.state.email, this.state.password)
            this._goToHome()
        } catch (error) {
            this._clearPassword()
            Alert.getGlobalInstance().showError(error.message)       
        } finally {
            this.setState({ inLoading: false })
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
            this._goToHome()
        }, 1000);
    }

    _onChangeField(name, value) {
        let state = {}
        state[name] = value
        state[`${name}Invalid`] = false

        this.setState(state)
    }

    _goToHome() {
        this.props.navigation.navigate('Home')
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
                            inLoading={this.state.inLoading}
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