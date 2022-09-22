const { h, classNames, extractClass } = omii;
import { createPopper } from '@popperjs/core';
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";
import effect from "../effect";

export default class extends uiBase {
  static css = [
    () => getCSSStyleSheets("reboot", "modal", "utilities", "close", "scrollbar"),
    css,
  ];
  static defaultProps = {
    staticPosition: false,
    staticBackdrop: false,
    vcentered: false,
    visible: false,
    title: null,
    scrollable: false,
    fullscreen: false,

    size: null, // xl lg default sm
  };
  static propTypes = {
    staticPosition: Boolean,
    staticBackdrop: Boolean,
    vcentered: Boolean,
    visible: Boolean,
    scrollable: Boolean,
    size: String,
    fullscreen: Boolean,
  };
  open() {
    this.update$Props({ visible: true });
    this.fire("open");
  }
  close() {
    effect.fade.hide(this.$(".modal-backdrop")).then(() => {
      this.update$Props({ visible: false });
      this.fire("close");
    });
  }

  css() { }

  render(props) {
    let settings = this.$props;
    return (
      <>
        {settings.visible && !settings.staticPosition && (
          <div class={classNames("modal-backdrop", "fade", "show")}></div>
        )}
        <div
          {...extractClass(props, "modal", {
            "position-static": settings.staticPosition,
            "d-block": settings.staticPosition || settings.visible,
            fade: true,
            show: true,
          })}
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          onClick={(evt) => {
            if (evt.target !== evt.currentTarget) return;
            if (settings.staticBackdrop) {
              return false;
            } else {
              this.close();
            }
          }}
        >
          <div
            class={classNames(
              "modal-dialog",
              settings.size ? `modal-${settings.size}` : false,
              {
                "modal-fullscreen": settings.fullscreen,
                "modal-dialog-scrollable": settings.scrollable,
                "modal-dialog-centered": settings.vcentered,
              }
            )}
          >
            <div class="modal-content">
              <div class="modal-header">
                <slot name="header">
                  <h5 class="modal-title">{settings.title}</h5>
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    onClick={(evt) => this.close()}
                  ></button>
                </slot>
              </div>
              <div class="modal-body">
                <slot></slot>
              </div>
              <div class="modal-footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
