import React from 'react'
import { Image } from 'react-native'

module.exports = {
    GoogleSignin: props => (
        <Image
            {...props}
            source={require('./assets/google-icon/google-icon.png')}
        />
    ),
    Logo: props => (
        <Image {...props} source={require('./assets/logo/logo.png')} />
    )
}
