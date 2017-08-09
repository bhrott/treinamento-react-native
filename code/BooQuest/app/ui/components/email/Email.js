import React from 'react'
import Input from '../input/Input'

export default class BooEmail extends React.Component {
    render() {
        return (
            <Input 
                placeholder={'e-mail'}
                keyboardType={'email-address'}
                {...this.props} 
                />
        )
    }
}