const { h, classNames, createRef } = omii;
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";
import popover from "../popover";
export default class extends popover {
  static css = [
    () => getCSSStyleSheets("reboot", "utilities", "transitions", "tooltip"),
    css,
  ];
  static defaultProps = { ...super.defaultProps, offset: 0 };
  get type() {
    return "tooltip";
  }
  render(props) {
    let { placement, body } = this.$props;
    return (
      <>
        <slot ref={this.slotRef}></slot>
        <div
          class="tooltip bs-tooltip-auto fade"
          role="tooltip"
          data-popper-placement={placement}
        >
          <div class="tooltip-arrow"></div>
          <slot class="tooltip-inner" name="body">
            {body}
          </slot>
        </div>
      </>
    );
  }
}
