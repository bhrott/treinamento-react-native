import React from 'react'
import {
    View
} from 'react-native'

import Input from '../input/Input'

export default class BooPassword extends React.Component {
    render() {
        const inputProps = Object.assign({}, this.props.inputProps, { secureTextEntry: true })

        return (
            <Input {...this.props} inputProps={inputProps} />
        )
    }
}