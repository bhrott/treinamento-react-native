import React from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import { ColorPalette } from 'boo-ui/utils'

export default class BooInput extends React.Component {

    render() {
        let errorStyle = this.props.error ? style.errorState : {}
        let placeholderColor = this.props.error ? ColorPalette.redError : null

        return (
            <TextInput
                maxLength={50}
                {...this.props}
                placeholderTextColor={placeholderColor}
                style={[style.input, this.props.style, errorStyle]}
            />
        )
    }
}

BooInput.propTypes = {
    error: PropTypes.bool
}

BooInput.defaultProps = {
    error: false
}

const style = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        height: 50,
        fontFamily: 'abel-regular'
    },
    errorState: {
        color: ColorPalette.redError
    }
})