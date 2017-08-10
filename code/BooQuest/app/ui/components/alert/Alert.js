import React from 'react'
import {
    View,
    Animated,
    StyleSheet
} from 'react-native'
import EventEmitter from 'sm-event-emitter'
import { ColorPalette } from 'boo-ui/utils'
import Text from '../text/Text'

export default class BooAlert extends React.Component {
    static getComponentHeight() {
        return 70
    }

    static show(text) {
        EventEmitter.emit('BooAlert$show', text)
    }

    static hide() {
        EventEmitter.emit('BooAlert$hide')
    }

    constructor(props) {
        super(props)
        const height = BooAlert.getComponentHeight()

        this.state = {
            text: '',
            positionTop: new Animated.Value(height * -1),
            height: height
        }
    }

    componentDidMount() {
        this._showEventListener = EventEmitter.on('BooAlert$show', this._show.bind(this))
        this._hideEventListener = EventEmitter.on('BooAlert$hide', this._hide.bind(this))
    }

    componentWillUnmount() {
        EventEmitter.remove(this._showEventListener)
        EventEmitter.remove(this._hideEventListener)
    }

    _show(text) {
        this.setState({
            text
        }, () => {
            Animated.timing(
                this.state.positionTop,
                {
                    toValue: 0,
                    duration: 300
                }
            ).start(() => {
                setTimeout(() => {
                    this._hide() 
                }, 3000);
            })
        })
    }

    _hide() {
        Animated.timing(
            this.state.positionTop,
            {
                toValue: BooAlert.getComponentHeight(this.state.text) * -1,
                duration: 300
            }
        ).start(() => {
            this.setState({
                text: ''
            })
        })
    }

    render() {
        let textNode = this.state.text ?
            (<Text style={style.text} numberOfLines={2} ellipsizeMode={'tail'}>{this.state.text}</Text>)
            : null

        return (
            <Animated.View style={[style.container, { top: this.state.positionTop, height: this.state.height }]}>
                {textNode}
            </Animated.View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: ColorPalette.redError,
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: ColorPalette.white,
        marginTop: 20,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 18
    }
})