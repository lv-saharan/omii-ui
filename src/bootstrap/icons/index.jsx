const { h } = omii;

import uiBase from "../../uiBase";

const loadIcon = async (name) => {
  try {
    let { default: icon } = await import(`./bootstrap/icons/${name}.js`);
    return icon;
  } catch {
    console.error("load icon error", name, type);
  }
};
const createSvg = async (name, props = {}) => {
  let icon = await loadIcon(name);
  return h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      part: "svg",
      ...props,
    },
    icon
  );
};
export default class extends uiBase {
  static updateOnAttributeChanged = true;
  static propTypes = {
    name: String,
    viewBox: Number,
    size: Number,
    color: String,
  };

  static defaultProps = {
    name: null,
    viewBox: 16,
    size: null,
    color: null,
  };
  static createSvg = createSvg;
  static loadIcon = loadIcon;
  static css = `
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
    svg{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `;

  css() {
    let { size, color } = this.$props;
    let fill = color ? color : "var(--oi-bi-color)";
    let width = size ? `${size}rem` : "var(--oi-bi-width, 1rem)";
    let height = size ? `${size}rem` : "var(--oi-bi-height, 1rem);";
    return `
      :host svg{
        fill: ${fill} ;
        width: ${width};
        height: ${height};
      }
    `;
  }
  async render() {
    let { name, viewBox } = this.$props;
    let $icon = await loadIcon(name);

    return (
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={"0 0 " + viewBox + " " + viewBox}
      >
        {$icon}
      </svg>
    );
  }
}
