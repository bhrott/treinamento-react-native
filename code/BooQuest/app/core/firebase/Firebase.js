import * as firebase from 'firebase'

export default class BooFirebase {
    static initialize() {
        firebase.initializeApp(global.settings.firebase.config)
    }

    static getInstance() {
        return firebase
    }
}