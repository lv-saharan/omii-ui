const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";
import effect from "../effect";
export default class extends uiBase {
  static css = [
    () => getCSSStyleSheets("reboot", "utilities", "toasts", "close"),
    css,
  ];

  static defaultProps = {
    visible: false,
  };
  static propTypes = {
    visible: Boolean,
  };
  #closed = true;
  get closed() {
    return this.#closed;
  }
  close() {
    this.#closed = true;
    effect.fade.hide(this).then(() => {
      this.update();
    });
  }
  show() {
    this.open();
  }
  open() {
    this.#closed = false;
    this.update();

    effect.fade.show(this);
  }
  install() {
    this.#closed = !this.$props.visible;
  }
  render(props) {
    return (
      <div
        {...extractClass(props, "toast", { show: !this.#closed })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <slot name="header"></slot>

          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={(evt) => {
              this.close();
            }}
          ></button>
        </div>
        <div class="toast-body">
          <slot></slot>
        </div>
      </div>
    );
  }
}
