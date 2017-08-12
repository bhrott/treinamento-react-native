import React from 'react'
import {
    View,
    StyleSheet,
    Switch
} from 'react-native'
import { ColorPalette } from 'boo-ui/utils'
import Text from '../text/Text'
import PropTypes from 'prop-types'

export default class BooSwitch extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.content}>
                    <View style={textStyle.container}>
                        <Text style={textStyle.text}>
                            {this.props.text}
                        </Text>
                    </View>
                    <View style={switchStyle.container}>
                        <Switch
                            tintColor={ColorPalette.grayUltraLight}
                            onTintColor={ColorPalette.greenPrimary}
                            value={this.props.isOn}
                            onValueChange={this.props.onValueChange}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

BooSwitch.propTypes = {
    text: PropTypes.string.isRequired,
    isOn: PropTypes.bool.isRequired,
    onValueChange: PropTypes.func
}

BooSwitch.defaultProps = {
    onValueChange: (newValue) => {}
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 50
    },
    content: {
        flex: 1,
        flexDirection: 'row'
    }
})

const textStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    text: {
        color: ColorPalette.grayDark
    }
})

const switchStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
})