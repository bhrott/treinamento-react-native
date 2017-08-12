import React from 'react'
import {
    View,
    Modal,
    StyleSheet
} from 'react-native'
import {
    Text,
    ModalHeader,
    PrimaryButton,
    LinkButton
} from 'boo-ui/components'
import PropTypes from 'prop-types'

export default class CreateNewQuestModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = this._getDefaultState()
    }

    _getDefaultState() {
        return {
            title: '',
            description: '',
            isPublic: false,
            shareCode: ''
        }
    }

    _cancel() {
        this.setState(this._getDefaultState())
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
                        <ModalHeader
                            text={'Create new quest'}
                            image={require('./img/add-new-quest.png')}
                        />
                        <LinkButton
                            text={'cancel'}
                            onPress={this._cancel.bind(this)} />
                    </View>
            </Modal>
        )
    }
}

CreateNewQuestModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func
}

CreateNewQuestModal.defaultProps = {
    onRequestClose: () => {}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})