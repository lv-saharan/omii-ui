const { h, classNames } = omii;
import uiBase from "../uiBase";

const loadingCache = new Map();
export default class extends uiBase {
  static updateOnAttributeChanged = true;
  static css = `
    :host{
      display:inline-block;
    }
  `;
  static defaultProps = {
    name: "circle",
    size: null,
    color: null,
  };
  static propTypes = {
    name: String,
    size: Number,
    color: String,
  };

  #css;

  css() {
    let { size, color } = this.$props;
    let loadingSize = "2rem";

    if (!size) {
      let parent = this.parentNode?.host ?? this.parentNode;
      if (parent) loadingSize = `${parent.offsetHeight}px`;
      else {
        loadingSize = "2rem";
      }
    } else {
      loadingSize = `${size}rem`;
    }
    let sizeCSS = `
    :host{
      --oi-loading-size:${loadingSize};
    }
    `;

    let colorCSS = "";
    if (color) {
      colorCSS = `
      :host {
        --oi-loading-color:${color};
      }
      `;
    }
    return `
    ${this.#css}
    ${sizeCSS}
    ${colorCSS}
    `;
  }

  async getLoadingConfig() {
    let { name } = this.$props;
    const key = name;
    let loadingConfig = loadingCache.get(key);
    if (loadingConfig == undefined) {
      loadingConfig = [];
      loadingCache.set(key, loadingConfig);
      try {
        const { default: config } = await import(`./loadings/${name}.js`);
        loadingCache.set(key, config);
        for (let { resolve } of loadingConfig) {
          resolve(config);
        }
        return config;
      } catch {
        // console.info("icon load error", type, name)
        loadingCache.set(key, null);
        for (let { resolve } of loadingConfig) {
          resolve(null);
        }
        return null;
      }
    }
    if (loadingConfig instanceof Array) {
      return new Promise((resolve, reject) => {
        loadingConfig.push({ resolve, reject });
      });
    }
    return loadingConfig;
  }
  async render() {
    const { template, css } = await this.getLoadingConfig();
    this.#css = css;
    return template;
  }
}
