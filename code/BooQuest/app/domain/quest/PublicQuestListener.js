import { Firebase } from 'boo-core'

export default class PublicQuestListener {
    constructor(listener) {
        this.dbRef = Firebase.getInstance().database().ref('/quests/public')
        this.dbRef.on('value', snapshot => {
            listener(snapshot.val())
        })
    }

    unregister() {
        this.dbRef.off()
    }
}