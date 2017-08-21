import React from 'react'
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import { ColorPalette } from 'boo-ui/utils'

export default class BooActionFloatButton extends React.Component {
    render() {
        const Image = this.props.image

        return (
            <TouchableOpacity
                style={[styles.container, this.props.style]}
                onPress={() => this.props.onPress()}>
                <Image
                    style={styles.image}
                    resizeMode={'contain'} />
            </TouchableOpacity>
        )
    }
}

BooActionFloatButton.propTypes = {
    image: PropTypes.any.isRequired,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.any
}

BooActionFloatButton.defaultProps = {
    style: {}
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: ColorPalette.greenPrimary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: '60%',
        width: '60%',
        tintColor: ColorPalette.white
    }
})