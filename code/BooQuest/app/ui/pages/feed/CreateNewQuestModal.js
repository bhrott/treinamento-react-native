import React from 'react'
import {
    View,
    Modal,
    TouchableHighlight,
    StyleSheet
} from 'react-native'
import {
    Text,
    ModalHeader,
    PrimaryButton,
    LinkButton,
    Input,
    KeyboardScrollView,
    Switch,
    Alert,
    QuestShareCode,
    LocalImage
} from 'boo-ui/components'
import { TextValidator } from 'boo-core'
import { 
    generateShareCode,
    createNewQuest
} from 'boo-domain'
import { ColorPalette } from 'boo-ui/utils'
import PropTypes from 'prop-types'

export default class CreateNewQuestModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = this._getDefaultState()
    }

    _getDefaultState() {
        return {
            // form data
            title: '',
            description: '',
            isPublic: false,
            shareCode: 'carregando...',

            // form validation
            titleInvalid: false,
            descriptionInvalid: false,
            shareCodeInvalid: true
        }
    }

    _cancel() {
        this.setState(this._getDefaultState())
        this.props.onRequestClose()
    }

    _onChangeField(name, val) {
        let nextState = {}
        nextState[name] = val
        nextState[`${name}Invalid`] = false

        this.setState(nextState)
    }

    async _loadShareCode() {
        try {
            const shareCode = await generateShareCode()

            this.setState({
                shareCode,
                shareCodeInvalid: false
            })
        } catch (error) {
            this.alertInstance.showError(error.message)

            this.setState({
                shareCode: 'error =(, trying again...'
            })

            setTimeout(() => {
                this._loadShareCode()
            }, 2000);
        }
    }

    _validate() {
        let newState = {
            titleInvalid: TextValidator.isNullOrEmpty(this.state.title),
            descriptionInvalid: TextValidator.isNullOrEmpty(this.state.description)
        }

        if (newState.titleInvalid || newState.descriptionInvalid) {
            this.setState(newState)
            return false
        }

        if (this.state.shareCodeInvalid) {
            this.alertInstance.showError('Wait until share code is loaded...')
            return false
        }

        return true
    }

    async _send() {
        if (!this._validate()) {
            return
        }

        try {
            const questData = {
                title: this.state.title,
                description: this.state.description,
                isPublic: this.state.isPublic,
                shareCode: this.state.shareCode
            }

            await createNewQuest(questData)
            this.props.onComplete(questData)
        } catch (error) {
            this.alertInstance.showError(error.message)
        }
    }

    _onCopiedShareCode({ message }) {
        this.alertInstance.showSuccess(message)
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.visible}
                onRequestClose={this._cancel.bind(this)}
                onShow={this._loadShareCode.bind(this)}>
                <KeyboardScrollView>
                    <View style={styles.container}>
                        <ModalHeader
                            text={'Create new quest'}
                            image={LocalImage.AddNewQuest}
                        />
                        <View style={formStyle.container}>
                            <Input
                                placeholder={'title'}
                                style={formStyle.input}
                                error={this.state.titleInvalid}
                                onChangeText={val => this._onChangeField('title', val)}
                                value={this.state.title} />
                            <Input
                                placeholder={'description (optional, 500)'}
                                style={[formStyle.input, { height: 110 }]}
                                multiline={true}
                                numberOfLines={4}
                                maxLength={500}
                                error={this.state.descriptionInvalid}
                                onChangeText={val => this._onChangeField('description', val)}
                                value={this.state.description} />
                            <Switch
                                text={'is public'}
                                isOn={this.state.isPublic}
                                onValueChange={val => this._onChangeField('isPublic', val)}
                            />
                            <QuestShareCode 
                                onCopiedToClipboard={this._onCopiedShareCode.bind(this)}
                                code={this.state.shareCode} />
                            <PrimaryButton
                                style={formStyle.button}
                                text={'create'}
                                onPress={this._send.bind(this)} />
                            <LinkButton
                                style={formStyle.button}
                                text={'cancel'}
                                onPress={this._cancel.bind(this)} />
                        </View>

                    </View>
                </KeyboardScrollView>
                <Alert ref={ alert => {this.alertInstance = alert} } />
            </Modal>
        )
    }
}

CreateNewQuestModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func,
    onComplete: PropTypes.func
}

CreateNewQuestModal.defaultProps = {
    onRequestClose: () => { },
    onComplete: (questData) => { }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

const formStyle = StyleSheet.create({
    container: {
        width: '80%'
    },
    input: {
        width: '100%'
    },
    button: {
        width: '100%',
        marginTop: 10
    }
})