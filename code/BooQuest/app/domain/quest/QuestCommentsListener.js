import { Firebase } from 'boo-core'

export default class QuestCommentsListener {
    constructor(questShareCode, listener) {
        this.dbRef = Firebase.getInstance().database().ref(`/quests/comments/${questShareCode}`)
        this.dbRef.orderByKey().limitToLast(30).on('value', snapshot => {
            listener(snapshot.val())
        })
    }

    unregister() {
        this.dbRef.off()
    }
}