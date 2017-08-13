import React from 'react'
import {
    View,
    Modal,
    Image,
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
    Alert
} from 'boo-ui/components'
import { generateShareCode } from 'boo-domain'
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
            descriptionInvalid: false
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
                shareCode
            })
        } catch (error) {
            Alert.getGlobalInstance().showError(error.message)

            this.setState({
                shareCode: 'error =('
            })
        }
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
                            image={require('./img/add-new-quest.png')}
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
                            <View style={shareCodeStyle.container}>
                                <View style={shareCodeStyle.content}>
                                    <View style={shareCodeStyle.textContainer}>
                                        <Text style={[shareCodeStyle.text, {fontSize: 12}]}>
                                            share code
                                        </Text>
                                        <Text style={[shareCodeStyle.text, {fontSize: 18}]}>
                                            {this.state.shareCode}
                                        </Text>
                                    </View>
                                    <View style={shareCodeStyle.imageContainer}>
                                        <Image
                                            source={require('./img/copy.png')}
                                            resizeMode={'contain'}
                                        />
                                    </View>
                                </View>
                            </View>
                            <PrimaryButton
                                style={formStyle.button}
                                text={'create'}
                                onPress={() => { }} />
                            <LinkButton
                                style={formStyle.button}
                                text={'cancel'}
                                onPress={this._cancel.bind(this)} />
                        </View>

                    </View>
                </KeyboardScrollView>
            </Modal>
        )
    }
}

CreateNewQuestModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func
}

CreateNewQuestModal.defaultProps = {
    onRequestClose: () => { }
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

const shareCodeStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: ColorPalette.grayLight
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10
    },
    textContainer: {
        flex: 3
    },
    text: {
        color: ColorPalette.white
    },
    imageContainer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10
    }
})