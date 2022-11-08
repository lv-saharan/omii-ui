const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import css from "./index.scss";
let min = true;
let root = new URL(`./tinymce/`, import.meta.url).href;
let jsFile = `./tinymce.js`;
export default class extends uiBase {
  static css = css;
  static propTypes = {
    value: String,
    placeholder: String,
    required: Boolean,
  };
  static defaultProps = {
    //编辑器引擎
    value: "",
    placeholder: "...",
    required: false,
  };

  static get min() {
    return min;
  }
  static set min(value) {
    min = value;
  }

  static get root() {
    return root;
  }
  static set root(value) {
    root = value;
  }
  static get jsFile() {
    return jsFile;
  }
  static set jsFile(value) {
    jsFile = value;
  }

  get value() {
    return this.$props.value;
  }

  set value(value) {
    this.$props.value = value;
    if (this.editor) {
      this.editor.setContent(value);
    }
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

  get validity() {
    const { required } = this.$props;
    const result = {
      valid: true,
    };
    if (required && value == "") {
      result.valid = false;
      result.valueMissing = true;
    }

    return result;
  }
  //已经检查过有效性
  #checked = false;
  checkValidity() {
    this.#checked = true;
    const valid = this.validity.valid;
    if (!valid) {
      this.classList.add("is-invalid");
    } else {
      this.classList.remove("is-invalid");
    }
    return valid;
  }

  async installed() {
    console.log("tiny installed")
    await import(new URL(this.constructor.jsFile, this.constructor.root).href);
    const $editor = this.$("#editor");
    tinymce.init({
      target: $editor,
      base_url: this.constructor.root,
      setup: (editor) => {
        this.#editor = editor;
        editor.on("change", (e) => {
          this.value = editor.getContent();
          this.fire("change", { value: this.value });
        });
      },
    });
  }
  render() {
    return (
      <textarea
        id="editor"
        value={this.value}
        placeholder={this.placeholder}
      ></textarea>
    );
  }
}
