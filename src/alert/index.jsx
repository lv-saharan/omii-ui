const { h, classNames } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
const CLASS_NAME_FADE = "fade";
const CLASS_NAME_SHOW = "show";
export default class extends uiBase {
  static css = () => getCSSStyleSheets("reboot", "utilities", "alert", "close", "transitions");
  //   static updateOnAttributeChanged = true;
  static defaultProps = {
    themeColor: "primary",
    closeable: false,
    transitionDuration: 0.15,
  };
  static propTypes = {
    themeColor: String,
    closeable: Boolean,
    transitionDuration: Number,
  };
  #closed = false;
  css() {
    return `
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`;
  }
  close() {
    let $alert = this.$("div.alert");
    $alert.classList.remove(CLASS_NAME_SHOW);
    this.#closed = true;
    setTimeout(() => {
      this.update(true, true);
    }, this.$props.transitionDuration * 1000);
  }
  render() {
    let { themeColor, closeable } = this.$props;
    if (this.#closed) return null;
    return (
      <div
        className={classNames("alert", `alert-${themeColor}`, {
          "alert-dismissible": closeable,
          fade: closeable,
          show: closeable,
        })}
        role="alert"
      >
        <slot></slot>
        {closeable ? (
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={() => {
              this.close();
            }}
          ></button>
        ) : null}
      </div>
    );
  }
}
