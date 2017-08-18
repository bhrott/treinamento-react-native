import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'
import { ColorPalette } from 'boo-ui/utils'

export default class LoadingPage extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Image
                    style={style.logo}
                    source={require('../img/logo.png')} />
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorPalette.purplePrimary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 170,
        width: 170
    }
})