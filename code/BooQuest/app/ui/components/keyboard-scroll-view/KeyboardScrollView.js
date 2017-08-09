import React from 'react'
import {
    StyleSheet
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class BooKeyboardScrollView extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
                style={this.props.style}
                contentContainerStyle={style.contentContainer}
            >
                {this.props.children}
            </KeyboardAwareScrollView>
        )
    }
}

const style = StyleSheet.create({
    contentContainer: {
        flex: 1
    }
})