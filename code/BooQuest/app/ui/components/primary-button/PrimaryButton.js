import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'

import Text from '../text/Text'
import { ColorPalette } from 'boo-ui/utils'

export default class BooPrimaryButton extends React.Component {
    _onPress() {
        if (!this.props.inLoading) {
            this.props.onPress()
        }
    }

    _renderContent() {
        if (this.props.inLoading) {
            return (
                <ActivityIndicator 
                    animating={true} 
                    size={'small'}
                    color={ColorPalette.white}/>)
        }

        return (<Text style={style.text}>{this.props.text}</Text>)
    }

    render() {
        return (
            <TouchableOpacity 
                activeOpacity={0.7}
                {...this.props}
                onPress={this._onPress.bind(this)}
                style={[style.container, this.props.style]}>
                {this._renderContent()}
            </TouchableOpacity>
        )
    }
}

BooPrimaryButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    inLoading: PropTypes.bool
}

BooPrimaryButton.defaultProps = {
    inLoading: false
}

const style = StyleSheet.create({
    container: {
        backgroundColor: ColorPalette.greenPrimary,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18
    }
})