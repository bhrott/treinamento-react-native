import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import {
    Text,
    Input,
    Password,
    PrimaryButton,
    LinkButton
} from 'boo-ui/components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <KeyboardAwareScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}>
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
                            inputProps={{
                                placeholder: 'username'
                            }}
                        />
                        <Password
                            style={formStyle.input}
                            inputProps={{
                                placeholder: 'password'
                            }}
                        />
                        <PrimaryButton
                            style={formStyle.button}
                            text='sign in'
                        />
                        <LinkButton
                            style={formStyle.button}
                            text='sign up'
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
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
    },
    scrollViewContent: {
        flex: 1
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