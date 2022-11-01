const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import css from "./index.scss";
export default class extends uiBase {
  static css = css;
  static propTypes = {};
  static defaultProps = {
    //编辑器引擎
    engine: "tinymce",
    value: "",
    theme: "default",
    placeholder: "...",
  };

  get value() {
    return this.$props.value;
  }

  set value(value) {
    this.$props.value = value;
    this.fire("change", { value });
  }

  #editor;
  get editor() {
    return this.#editor;
  }
  #css;
  css() {
    return this.#css;
  }
  async install() {
    const { engine, theme } = this.$props;
    if (typeof engine === "function") {
      this.#editor = await engine(this.$props, this);
    } else if (typeof engine === "string") {
      const { create, themes } = await import(
        new URL(`./editor/engines/${engine}.js`, import.meta.url).href
      );
      //   this.#css = themes[theme];
      this.addEventListener("installed", (evt) => {
        this.#editor = create(this.$("#editor"), this.$props, this);
      });
    }
  }
  render() {
    return <textarea id="editor" value={this.value}></textarea>;
  }
}
