import { timingClassNames } from '../css'

const CLASS_NAME_FADE = "fade";
const CLASS_NAME_SHOW = "show";
const DEFAULT_DURATION = .15

export default {
    show(element, duration = DEFAULT_DURATION) {
        return new Promise(resolve => {
            timingClassNames(element, [{
                classNames: [CLASS_NAME_FADE],
            }, {
                classNames: [CLASS_NAME_FADE, CLASS_NAME_SHOW],
                duration,
                callback: resolve
            }])
        })
    },
    hide(element, duration = DEFAULT_DURATION) {

        return new Promise(resolve => {
            timingClassNames(element, [{
                classNames: [CLASS_NAME_FADE, CLASS_NAME_SHOW],
            }, {
                classNames: [CLASS_NAME_FADE],
                duration,
                callback: resolve

            }])
        })
    },
    toggle(element, duration = DEFAULT_DURATION) {
        if (element.classList.contains(CLASS_NAME_FADE) && !element.classList.contains(CLASS_NAME_SHOW)) {
            return this.show(element, duration)
        } else {
            return this.hide(element, duration)
        }
    }
}