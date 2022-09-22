const { h, classNames } = omii;
import uiBase from "../uiBase";

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
      let parent = this.parentNode?.host ?? this.parentNode
      if (parent)
        loadingSize = `${parent.offsetHeight}px`;
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

  async render() {
    let { name } = this.$props;
    let {
      default: { template, css },
    } = await import(`./loadings/${name}.js`);
    this.#css = css;
    return template;
  }
}
