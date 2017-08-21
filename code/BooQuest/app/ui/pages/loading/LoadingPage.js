import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'
import { ColorPalette } from 'boo-ui/utils'
import { LocalImage } from 'boo-ui/components'

export default class LoadingPage extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <LocalImage.Logo style={style.logo} />
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