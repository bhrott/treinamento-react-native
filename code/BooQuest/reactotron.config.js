import Reactotron, { openInEditor, asyncStorage } from 'reactotron-react-native'

Reactotron
    .configure()
    .useReactNative()
    .use(openInEditor())
    .use(asyncStorage())
    .connect()