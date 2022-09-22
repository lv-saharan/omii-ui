const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";

export default class extends uiBase {
  static css = () => getCSSStyleSheets("reboot", "utilities", "badge");

  static defaultProps = {
    text: "",
    desc: false,
    position: false,
    // divider: null,
  };
  static propTypes = {};
  css() { }
  render(props) {
    let { text, desc, position } = this.$props;
    let positions = position ? position.split("-") : [];
    return (
      <span
        {...extractClass(props, "badge", {
          "position-absolute": position,
          "top-0": positions.includes("top"),
          "start-100": positions.includes("right"),
          "start-0": positions.includes("left"),
          "top-100": positions.includes("bottom"),
          "translate-middle": position,
          "rounded-pill": position,
        })}
      >
        <slot>{text}</slot>
        {desc && <span class="visually-hidden">{desc}</span>}
      </span>
    );
  }
}
