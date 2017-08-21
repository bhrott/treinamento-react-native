import { Firebase } from 'boo-core'
import LoggedUser from '../user/LoggedUser'

const createNewQuest = async (model) => {
    let {
        title,
        description,
        isPublic,
        shareCode,
    } = model

    try {
        const targetCollection = `quests/${isPublic ? 'public' : 'private'}/${shareCode}`
        const ref = Firebase.getInstance().database().ref(targetCollection)
        await ref.set({
            title,
            description,
            shareCode,
            owner: LoggedUser.getCurrent().uid,
            commentsCount: 0
        })
    } catch (error) {
        console.error(error)
        throw {
            message: 'An error occurred while trying to save the quest. Please, try again.'
        }
    }
}

export default createNewQuest