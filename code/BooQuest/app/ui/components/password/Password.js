import React from 'react'
import {
    View
} from 'react-native'

import Input from '../input/Input'

export default class BooPassword extends React.Component {
    render() {
        return (
            <Input {...this.props} secureTextEntry={true} />
        )
    }
}