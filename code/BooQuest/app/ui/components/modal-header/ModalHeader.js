import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import Text from '../text/Text'
import PropTypes from 'prop-types'
import { ColorPalette } from 'boo-ui/utils'

export default class ModalHeader extends React.Component {
    render() {
        return (
            <View style={[styles.container, {height: this.props.height}]}>
                <View style={styles.content}>
                    <Image 
                        source={this.props.image}
                        style={styles.image}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.text}>
                        {this.props.text}
                    </Text>
                </View>
                
            </View>
        )
    }
}

ModalHeader.propTypes = {
    height: PropTypes.number,
    text: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired
}

ModalHeader.defaultProps = {
    height: 180
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1
    },
    text: {
        fontSize: 18,
        color: ColorPalette.black
    }
})
