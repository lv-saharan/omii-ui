const { h } = omii;

import uiBase from "../../uiBase";

const singleCache = new Map()

const loadIcon = async (name) => {
  try {
    const key = name;
    let cacheIcon = singleCache.get(key)
    if (cacheIcon == undefined) {
      cacheIcon = []
      singleCache.set(key, cacheIcon)
      try {
        const { default: icon } = await import(`./bootstrap/icons/${name}.js`)
        singleCache.set(key, icon)
        for (let { resolve } of cacheIcon) {
          resolve(icon)
        }
        return icon
      } catch {
        // console.info("icon load error", type, name)
        singleCache.set(key, null)
        for (let { resolve } of cacheIcon) {
          resolve(null)
        }
        return null;
      }
    }
    if (cacheIcon instanceof Array) {
      return new Promise((resolve, reject) => {
        cacheIcon.push({ resolve, reject })
      })
    }
    return cacheIcon

    // let { default: icon } = await import(`./bootstrap/icons/${name}.js`);
    // return icon;
  } catch {
    console.error("load icon error", name);
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
