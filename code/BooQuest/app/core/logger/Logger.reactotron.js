import Reactotron, { openInEditor, asyncStorage } from 'reactotron-react-native'

export default class LoggerReactoTron {
    initialize() {
        Reactotron
            .configure()
            .useReactNative()
            .use(openInEditor())
            .use(asyncStorage())
            .connect()
    }

    log() {
        Reactotron.log(arguments)
    }

    error() {
        Reactotron.error(arguments)
    }
}
