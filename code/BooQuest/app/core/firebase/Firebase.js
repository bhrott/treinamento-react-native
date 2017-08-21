import * as firebase from 'firebase'

export default class BooFirebase {
    static initialize(config) {
        firebase.initializeApp(config)
    }

    static getInstance() {
        return firebase
    }
}