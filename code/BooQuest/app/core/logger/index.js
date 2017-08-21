import GhostLogger from './Logger.ghost'
import ReactotronLogger from './Logger.reactotron'

var currentLogged = __DEV__ ? ReactotronLogger : GhostLogger

export default new currentLogged()