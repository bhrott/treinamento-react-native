import React from 'react'
import {
    View,
    Modal,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

export default class BooQuestDetailModal extends React.Component {
    _cancel() {
        this.props.onRequestClose()
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.visible}
                onRequestClose={this._cancel.bind(this)}>
                <View style={styles.container}>
                    
                </View>
            </Modal>
        )
    }
}

BooQuestDetailModal.propTypes = {
    onRequestClose: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})