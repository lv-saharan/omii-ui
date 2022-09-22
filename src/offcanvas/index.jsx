const { h, classNames, createRef, extractClass } = omii;
import uiBase from "../uiBase";
import { timingClassNames } from "../css";
import { getCSSStyleSheets } from "../css";

import css from "./index.scss";

export default class extends uiBase {
  static css = [
    () => getCSSStyleSheets("reboot", "offcanvas", "utilities", "close"),
    css,
  ];
  static defaultProps = {
    visible: false,
    title: null,
    placement: "start", //end,top bottom
    duration: 0.3,
    position: "fixed",
    useBackdrop: true,
  };
  static propTypes = {
    visible: Boolean,
    placement: String,
    duration: Number,
    position: String,
    useBackdrop: Boolean,
  };
  css() {
    return `
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `;
  }
  offcanvasRef = createRef();
  backdropRef = createRef();
  #isShow;
  async show() {
    if (this.#isShow) return;
    this.#isShow = true;
    await this.update(true, true);
    let el = this.offcanvasRef.current;
    this.backdropRef.current?.classList.add("show");
    el.setAttribute("aria-modal", true);
    el.setAttribute("role", "dialog");
    let { duration } = this.$props;
    timingClassNames(el, [
      {
        classNames: "showing",
        duration,
      },
      {
        classNames: "show",
      },
    ]);
  }
  toggle() {
    if (this.#isShow) this.hide();
    else this.show();
  }
  open() {
    this.show();
  }
  hide() {
    if (!this.#isShow) return;
    this.#isShow = false;
    let el = this.offcanvasRef.current;

    el.blur();
    let { duration } = this.$props;
    timingClassNames(el, [
      {
        classNames: "hiding show",
        duration,
      },
      {
        classNames: "",
        callback: () => {
          el.removeAttribute("aria-modal");
          el.removeAttribute("role");
          this.backdropRef.current?.classList.remove("show");
          this.updateSelf();
        },
      },
    ]);
  }
  close() {
    this.hide();
  }
  installed() {
    this.#isShow = this.$props.visible;
  }
  render(props) {
    let { visible, placement, position, title, useBackdrop } = this.$props;
    return (
      <>
        <div
          ref={this.offcanvasRef}
          {...extractClass(
            props,
            "offcanvas",
            `offcanvas-${placement}`,
            `position-${position}`,
            {
              show: visible,
            }
          )}
          tabindex="-1"
          aria-labelledby="offcanvasLabel"
        >
          <div class="offcanvas-header">
            <slot name="title" class="offcanvas-title h5">
              {title}
            </slot>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              onClick={(evt) => this.close()}
            ></button>
          </div>
          <slot class="offcanvas-body"></slot>
        </div>
        {useBackdrop && this.#isShow && (
          <div
            ref={this.backdropRef}
            class="offcanvas-backdrop fade"
            onClick={(evt) => {
              this.hide();
            }}
          ></div>
        )}
      </>
    );
  }
}
