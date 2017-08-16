import React from 'react'
import { 
    Image,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

export default class TabBarIcon extends React.Component {
    render() {
        return (
            <Image
                source={this.props.source}
                style={[styles.image, { tintColor: this.props.tintColor }]}
                resizeMode={'contain'}
            />
        )
    }
}

TabBarIcon.propTypes = {
    source: PropTypes.any.isRequired,
    tintColor: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    image: {
        width: 26,
        height: 26
    }
})