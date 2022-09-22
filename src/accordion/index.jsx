const { h, classNames } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import effect from "../effect";
const DIRECTIONS = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};
const CLASS_NAME_COLLAPSED = "collapsed";
/**
 * items {
 * key,
 * opened,
 * header,
 * body
 * }
 */
export default class extends uiBase {
  // static css = () =>
  //   getCSSStyleSheets(
  //     "reboot",
  //     "utilities",
  //     "accordion",
  //     "close",
  //     "transitions"
  //   );
  static css =()=> getCSSStyleSheets(
    "reboot",
    "utilities",
    "accordion",
    "close",
    "transitions"
  );
  static get DIRECTIONS() {
    return DIRECTIONS;
  }
  static defaultProps = {
    alwayOpen: false,
    firstOpen: false,
    transitionDuration: 0.35,
    direction: DIRECTIONS.VERTICAL,
  };
  static propTypes = {
    alwayOpen: Boolean,
    firstOpen: Boolean,
    transitionDuration: Number,
    direction: String,
  };
  css() {
    return `
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`;
  }
  install() {
    let { items, alwayOpen, firstOpen } = this.$props;
    if (items.length > 0 && firstOpen) {
      items[0].opened = true;
    }
    if (!alwayOpen) {
      let opens = items.filter((item) => item.opened);
      if (opens.length) {
        let firstOpened = opens.shift();
        firstOpened.opened = true;
        opens.forEach((item) => (item.opened = false));
      }
    }
  }
  get dimension() {
    return this.setting.direction == DIRECTIONS.HORIZONTAL ? WIDTH : HEIGHT;
  }
  #toggle(item) {
    let { items, transitionDuration } = this.$props;
    let index = items.indexOf(item);
    let $item = this.$(`.accordion>.accordion-item:nth-child(${index + 1})`);
    let $collapse = $item.querySelector(".accordion-collapse");
    let $header = $item.querySelector(".accordion-button");
    item.opened = !item.opened;
    $header.classList.toggle(CLASS_NAME_COLLAPSED, !item.opened);
    if (item.opened) {
      //show
      effect.collapse.show($collapse);
      this.fire("collapseShow", item);
    } else {
      effect.collapse.hide($collapse);
      this.fire("collapseHide", item);
    }
  }
  toggle(item) {
    let { items, alwayOpen } = this.$props;
    if (alwayOpen) {
      this.#toggle(item);
    } else {
      let prevIndex = items.findIndex((_item) => _item.opened);
      let prevOpened = prevIndex == -1 ? null : items[prevIndex];
      if (prevOpened && prevOpened != item) {
        this.#toggle(prevOpened);
      }
      this.#toggle(item);
    }
  }
  render() {
    let { items, direction } = this.$props;

    return (
      <div
        class={classNames("accordion", {
          "collapse-horizontal": direction == DIRECTIONS.HORIZONTAL,
        })}
      >
        {items.map((item, index) => (
          <div class="accordion-item" key={item.key ?? `item-${index}`}>
            <h2 class="accordion-header">
              <button
                class={classNames("accordion-button", {
                  collapsed: !item.opened,
                })}
                type="button"
                aria-expanded={item.opened}
                onClick={(evt) => {
                  this.toggle(item);
                }}
              >
                {item.header}
              </button>
            </h2>
            <div
              class={classNames("accordion-collapse", {
                collapse: true,
                show: item.opened,
              })}
            >
              <div class="accordion-body">
                {typeof item.body == "function"
                  ? item.body(item, this.$props, this)
                  : item.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
