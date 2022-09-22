import { timingClassNames } from '../css'
import { reflow } from '../utils';

const DIRECTIONS = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical",
};

const CLASS_NAME_SHOW = "show";
const CLASS_NAME_COLLAPSE = "collapse";
const CLASS_NAME_COLLAPSING = "collapsing";
const CLASS_NAME_HORIZONTAL = "collapse-horizontal";

const DEFAULT_DURATION = .35
const getDirection = (el, direction) => {
    if (direction) return direction
    if (el.classList.contains(CLASS_NAME_HORIZONTAL)) {
        return DIRECTIONS.HORIZONTAL
    }
    return DIRECTIONS.VERTICAL
}
export default {
    show(element, duration = DEFAULT_DURATION, direction = null) {
        return new Promise(resolve => {

            direction = getDirection(element, direction)
            timingClassNames(element, [{
                classNames: [CLASS_NAME_COLLAPSE],
            }, {
                classNames: [CLASS_NAME_COLLAPSING],
                duration,
                callback(el) {
                    el.style[direction == DIRECTIONS.VERTICAL ? "height" : "width"] = `${el[direction == DIRECTIONS.VERTICAL ? "scrollHeight" : "scrollWidth"]}px`;
                }
            }, {
                classNames: [CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW],
                callback(el) {
                    el.style[direction == DIRECTIONS.VERTICAL ? "height" : "width"] = '';
                    resolve()
                }
            }])
        })

    },
    hide(element, duration = DEFAULT_DURATION, direction = null) {
        return new Promise(resolve => {

            direction = getDirection(element, direction)
            let dimension = direction == DIRECTIONS.VERTICAL ? "height" : "width"
            element.style[dimension] = `${element.getBoundingClientRect()[dimension]}px`;
            reflow(element.offsetHeight);

            timingClassNames(element, [{
                classNames: [CLASS_NAME_COLLAPSING, CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW],
            }, {
                classNames: [CLASS_NAME_COLLAPSING],
                duration,
                callback(el) {
                    el.style[dimension] = ''
                }
            }, {
                classNames: [CLASS_NAME_COLLAPSE],
                callback: resolve
            }])

        })
    },
    toggle(element, duration = DEFAULT_DURATION, direction = null) {
        direction = getDirection(element, direction)
        if (element.classList.contains(CLASS_NAME_SHOW)) {
            return this.hide(element, duration, direction)
        } else {
            return this.show(element, duration, direction)
        }
    }
}   