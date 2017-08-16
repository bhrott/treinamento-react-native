global.__loggedUser = null

export default class LoggedUser {
    static getCurrent() {
        return global.__loggedUser
    }

    static setCurrent(newLoggedUser) {
        global.__loggedUser = newLoggedUser
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