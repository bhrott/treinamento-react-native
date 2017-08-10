import { ColorPalette } from 'boo-ui/utils'

class ToastType {
    constructor(icon, color) {
        this.icon = icon
        this.color = color
    }
}

const error = new ToastType('exclamation-triangle', ColorPalette.redError)
const success = new ToastType('check-circle-o', ColorPalette.greenPrimary)
const alert = new ToastType('info', ColorPalette.grayDark)

module.exports = {
    error,
    success,
    alert
}