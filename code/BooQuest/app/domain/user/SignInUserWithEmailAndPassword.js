import { Firebase } from 'boo-core'

export default async (email, password) => {
    try {
        let user = await Firebase.getInstance().auth().signInWithEmailAndPassword(email, password)
        return user.toJSON()
    } catch (error) {
        let message = ''

        switch (error.code) {
            case 'auth/invalid-email':
                message = 'Oops, this is an invalid e-mail.'
                break
            case 'auth/user-disabled':
                message = 'Sorry, your account is no more available.'
                break
            case 'auth/user-not-found':
                message = 'Sorry, we don\'t find your account.'
                break
            case 'auth/wrong-password':
                message = 'E-mail and password mismatch...'
                break
            default:
                message = 'Something wrong on our side =/. Please, try again.'
                break
        }

        throw {
            message
        }
    }
}