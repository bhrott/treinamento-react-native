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
            <TextInput
                maxLength={50}
                {...this.props}
                style={[style.input, this.props.style]}
            />
        )
    }
}

const style = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        height: 50,
        fontFamily: 'abel-regular'
    }
})