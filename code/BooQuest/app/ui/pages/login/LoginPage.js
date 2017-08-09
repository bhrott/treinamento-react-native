import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image,
    InteractionManager
} from 'react-native'
import {
    Text,
    Input,
    Password,
    PrimaryButton,
    LinkButton,
    KeyboardScrollView
} from 'boo-ui/components'
import CreateAccountModal from './CreateAccountModal'

export default class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            createAccountModalIsVisible: false,
            username: '',
            password: ''
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

    _signIn() {
        alert(`username: ${this.state.username}, pass: ${this.state.password}`)
    }

    _onCancelSignup() {
        this._closeAccountModal()
    }

    _onSignupSuccess(user) {
        this._closeAccountModal()

        setTimeout(() => {
            alert('signup success!')
        }, 1000);
    }

    render() {
        return (
            <KeyboardScrollView 
                style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={logoStyle.container}>
                        <Image source={require('./img/logo.png')} />
                        <View>
                            <Text style={logoStyle.title}>
                                BOO QUEST
                            </Text>
                        </View>
                    </View>
                    <View style={formStyle.container}>
                        <Input
                            style={formStyle.input}
                            placeholder='username'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            onChangeText={username => this.setState({ username })}
                        />
                        <Password
                            style={formStyle.input}
                            placeholder='password'
                            onChangeText={password => this.setState({ password })}
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
        backgroundColor: '#413C58'
    }
})

const logoStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#413C58'
    },
    image: {
        height: 171,
        width: 171
    },
    title: {
        fontSize: 40,
        color: 'white',
        marginTop: 40
    }
})

const formStyle = StyleSheet.create({
    container: {
        height: 226,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        width: 280,
        marginTop: 5
    },
    button: {
        width: 280,
        marginTop: 5
    }
})