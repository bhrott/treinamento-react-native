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
                user.email, 
                user.authToken)
    }

    constructor(uid, email, authToken) {
        this.uid = uid
        this.email = email
        this.authToken = authToken
    }
}