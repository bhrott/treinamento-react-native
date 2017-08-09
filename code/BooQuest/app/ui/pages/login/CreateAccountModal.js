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

export default class CreateAccountModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    _cancel() {
        this.props.onCancel()
    }

    _signup() {
        const user = {}
        this.props.onSignup({ user })
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
                                <Input
                                    style={formStyle.input}
                                    placeholder={'username'}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    onChangeText={username => this.setState({username})}
                                    value={this.state.username} />
                            </View>
                            <View>
                                <Email
                                    style={formStyle.input}
                                    onChangeText={email => this.setState({email})}
                                    value={this.state.email} />
                            </View>
                            <View>
                                <Password
                                    style={formStyle.input}
                                    placeholder={'password'}
                                    onChangeText={password => this.setState({password})}
                                    value={this.state.password} />
                            </View>
                            <View>
                                <Password
                                    style={formStyle.input}
                                    placeholder={'confirm password'}
                                    onChangeText={confirmPassword => this.setState({confirmPassword})}
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
        height: 155,
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