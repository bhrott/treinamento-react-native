export default {
    isNullOrEmpty: (text) => {
        return !text || text.replace(/\s/g,'').length === 0
    }
}