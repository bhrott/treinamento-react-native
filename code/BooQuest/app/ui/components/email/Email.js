import React from 'react'
import Input from '../input/Input'

export default class BooEmail extends React.Component {
    render() {
        return (
            <Input 
                placeholder={'e-mail'}
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType={'email-address'}
                {...this.props} 
                />
        )
    }
}