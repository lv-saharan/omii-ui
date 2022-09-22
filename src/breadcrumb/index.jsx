const { h, classNames } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
/**
 * item{
 * href,
 * label
 * }
 */
export default class extends uiBase {
  static css = () => getCSSStyleSheets("reboot", "utilities", "breadcrumb");

  static defaultProps = {
    // divider: null,
  };
  static propTypes = {
    // divider: String,
  };
  css() {
    let { divider } = this.$props;
    if (typeof divider == "string") {
      return `:host{--oi-breadcrumb-divider:'${divider}'}`;
    }
    if (typeof divider == "object") {
      return `.breadcrumb-item + .breadcrumb-item::before{display:none}`;
    }
  }
  render() {
    let { items, divider } = this.$props;

    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          {items.map((item, index) => {
            if (index !== items.length - 1) {
              return (
                <li class="breadcrumb-item">
                  {typeof divider == "object" && index != 0 ? divider : null}
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            } else {
              return (
                <li class="breadcrumb-item active" aria-current="page">
                  {typeof divider == "object" && index != 0 ? divider : null}
                  {item.label}
                </li>
              );
            }
          })}
        </ol>
      </nav>
    );
  }
}
