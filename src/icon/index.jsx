const { define, h, Component } = omii;

import uiBase from "../uiBase";
import { MODES, TYPES } from "./constants";

let MODE = MODES.SINGLE;
let TYPE = TYPES.FILLED;

const iconsCache = new Map()
const loadIcon = async (name, type, mode) => {
  type = type ?? TYPE;
  if (type == TYPES.FILE_TYPE) {
    mode = MODES.BUNDLE;
  }
  try {
    if ((mode ?? MODE) == MODES.BUNDLE) {
      let { default: icons } = await import(`./icons/${type}.js`);
      return icons[name];
    } else {
      // const { default: icon } = await import(`./icons/${type}/${name}.js`)
      // return icon;
      const key = `${type}:${name}`
      let cachedIcon = iconsCache.get(key)
      if (cachedIcon == undefined) {
        cachedIcon = {
          icon: false,
          resolves: []
        }
        iconsCache.set(key, cachedIcon)
        try {
          const { default: icon } = await import(`./icons/${type}/${name}.js`)
          cachedIcon.icon = icon
        }
        catch {
          // console.info("icon load error", type, name)
          cachedIcon.icon = null
        }
        for (let resolve of cachedIcon.resolves) {
          resolve(cachedIcon.icon)
        }
        cachedIcon.resolves = []
        return cachedIcon.icon
      }

      if (cachedIcon.icon === false) {
        return new Promise((resolve, reject) => {
          cachedIcon.resolves.push(resolve)
        })
      }
      return cachedIcon.icon
    }
  } catch (exc) {
    console.error("load icon error", name, type, exc);
    return null
  }
};
const createSvg = async (name, type, mode, props = {}) => {
  let icon = await loadIcon(name, type, mode);
  return h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      ...props,
    },
    icon
  );
};
export default class extends uiBase {
  static updateOnAttributeChanged = true;
  static propTypes = {
    name: String,
    type: String,
    viewBox: Number,
    size: Number,
    color: String,
  };

  static defaultProps = {
    name: null,
    type: TYPES.FILLED,
    viewBox: 24,
    size: null,
    color: null,
  };
  static createSvg = createSvg;
  static loadIcon = loadIcon;
  static css = `
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
    svg{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
  `;

  static useBundleMode() {
    MODE = MODES.BUNDLE;
  }
  static useSingleMode() {
    MODE = MODES.SINGLE;
  }
  static get MODES() {
    return MODES;
  }
  static get TYPES() {
    return TYPES;
  }
  static get Mode() {
    return MODE;
  }
  static set Mode(val) {
    MODE = val;
  }
  static get Type() {
    return TYPE;
  }
  static set Type(val) {
    TYPE = val;
  }

  css() {
    let { size, color } = this.$props;
    let fill = color ? color : "var(--oi-icon-color)";
    let width = size ? `${size}rem` : "var(--oi-icon-width, 1rem)";
    let height = size ? `${size}rem` : "var(--oi-icon-height, 1rem);";
    return `
      :host svg{
        fill: ${fill} ;
        width: ${width};
        height: ${height};
      }
    `;
  }
  async render() {
    let { name, type, viewBox } = this.$props;
    let $icon = await loadIcon(name, type);

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewBox} ${viewBox}`}
      >
        {$icon}
      </svg>
    );
  }
}
