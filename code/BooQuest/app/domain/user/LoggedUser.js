let currentLoggedUser = null

export default class LoggedUser {
    static getCurrent() {
        return currentLoggedUser
    }

    static setCurrent(newLoggedUser) {
        currentLoggedUser = newLoggedUser
    }

    static createFromFirebaseUserJSON(user) {
        return new LoggedUser(
                user.uid, 
                user.email)
    }

    constructor(uid, email) {
        this.uid = uid
        this.email = email
    }
}