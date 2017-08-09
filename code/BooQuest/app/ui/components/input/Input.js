import React from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import { Text } from 'boo-ui/components'

export default class BooInput extends React.Component {

    render() {
        return (
            <View style={[style.container, this.props.style]}>
                <TextInput
                    style={style.input}
                    {...this.props.inputProps}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 50
    },
    input: {
        flex: 1,
        fontFamily: 'abel-regular',
        margin: 5
    }
})