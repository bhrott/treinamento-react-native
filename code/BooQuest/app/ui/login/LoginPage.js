import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import { Text } from 'boo-core/components'

export default class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={logoStyle.container}>
                    <Image source={require('./img/logo.png')}/>
                    <View>
                        <Text style={logoStyle.title}>
                            BOO QUEST
                        </Text>
                    </View>
                </View>
                <View style={formStyle.container}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        backgroundColor: 'white',
    }
})