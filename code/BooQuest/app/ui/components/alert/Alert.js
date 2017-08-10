import React from 'react'
import {
    View,
    Animated,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import EventEmitter from 'sm-event-emitter'
import { FontAwesome } from '@expo/vector-icons';
import { ColorPalette } from 'boo-ui/utils'
import Text from '../text/Text'
import AlertTypes from './AlertTypes'

let componentHeight = 70
let globalInstance = null


export default class BooAlert extends React.Component {
    static getGlobalInstance() {
        return globalInstance
    }

    static setAsGlobalInstance(instance) {
        globalInstance = instance
    }

    constructor(props) {
        super(props)

        this.state = {
            text: '',
            type: AlertTypes.alert,
            positionTop: new Animated.Value(componentHeight * -1),
            height: componentHeight
        }
    }

    show(text) {
        this._show(text, AlertTypes.alert)
    }

    showError(text) {
        this._show(text, AlertTypes.error)
    }

    showSuccess(text) {
        this._show(text, AlertTypes.success)
    }

    hide() {
        Animated.timing(
            this.state.positionTop,
            {
                toValue: componentHeight * -1,
                duration: 300
            }
        ).start(() => {
            this.setState({
                text: ''
            })

            this.props.onClose()
        })
    }

    _show(text, type) {
        this.setState({
            text,
            type
        }, () => {
            Animated.timing(
                this.state.positionTop,
                {
                    toValue: 0,
                    duration: 300
                }
            ).start(() => {
                setTimeout(() => {
                    this.hide() 
                }, 3000);
            })
        })
    }
    
    render() {
        if (!this.state.text) {
            return null
        }

        let textNode = this.state.text ?
            (<Text style={style.text} numberOfLines={2} ellipsizeMode={'tail'}>{this.state.text}</Text>)
            : null

        return (
            <Animated.View style={[style.container, { top: this.state.positionTop, height: this.state.height }]}>
                <View style={style.iconContainer}>
                    <FontAwesome 
                        name={this.state.type.icon} 
                        size={25} 
                        style={{ color: this.state.type.color }} />
                </View>
                <View style={style.textContainer}>
                    {textNode}
                </View>
                <View style={[style.borderBottom, { backgroundColor: this.state.type.color }]} />
            </Animated.View>
        )
    }
}


BooAlert.propTypes = {
    onClose: PropTypes.func
}

BooAlert.defaultProps = {
    onClose: () => {}
}

const style = StyleSheet.create({
    container: {
        backgroundColor: ColorPalette.white,
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 20
    },
    iconContainer: {
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    text: {
        color: ColorPalette.grayDark,
        paddingRight: 10,
        fontSize: 18
    },
    borderBottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 3
    }
})