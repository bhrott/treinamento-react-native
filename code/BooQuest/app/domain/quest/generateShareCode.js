import { Firebase } from 'boo-core'

const makeid = (groupSize) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < groupSize; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const genShareCode = (settings) => {
    let parts = []
    for (var i = 0; i < settings.numberOfGroups; i++) {
        parts.push(makeid(settings.groupSize))
    }

    return parts.join('-')
}

export default async () => {
    try {
        const snapshot = await Firebase.getInstance().database().ref('/settings/shareCode').once('value')
        const settings = snapshot.val()

        return genShareCode(settings)

    } catch (error) {
        console.error(error)
        throw {
            message: 'An erro occurs when we try to generate the share code.'
        }
    }
}