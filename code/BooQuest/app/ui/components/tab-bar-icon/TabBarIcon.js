import React from 'react'
import { 
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

export default class TabBarIcon extends React.Component {
    render() {
        const Image = this.props.image
        return (
            <Image
                style={[styles.image, { tintColor: this.props.tintColor }]}
                resizeMode={'contain'}
            />
        )
    }
}

TabBarIcon.propTypes = {
    image: PropTypes.any.isRequired,
    tintColor: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    image: {
        width: 24,
        height: 24
    }
})