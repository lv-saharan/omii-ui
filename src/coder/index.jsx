const { h, Component } = omii;
import uiBase from "../uiBase";
import css from "./index.scss";

export default class extends uiBase {
  static css = [
    () => {
      const importUrl = import.meta.url;
      const fontCSS = `@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${
          new URL("./monaco", importUrl).href
        }/codicon-BEBTMDKB.ttf) format("truetype");
      }`;
      const fontCSSSS = new CSSStyleSheet();
      fontCSSSS.replace(fontCSS);
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, fontCSSSS];
      return fetch(new URL("./monaco/index.css", importUrl).href).then((r) =>
        r.text()
      );
    },
    css,
  ];
  static defaultProps = {
    codes: "",
    minimap: false,
    language: "javascript",
    automaticLayout: true,
    fontSize: 12,
    readOnly: false,
    lineNumbers: "on", //on | off
    theme: null, //vs-dark
  };
  static propTypes = {
    codes: String,
    language: String,
    fontSize: Number,
    automaticLayout: Boolean,
    readOnly: Boolean,
    lineNumbers: String,
    theme: String,
  };
  #monaco;

  get value() {
    return this.editor?.getValue() ?? this.$props.value;
  }
  set value(val) {
    if (!this.editor) {
      this.$props.value = val;
    } else {
      this.editor?.setValue(val);
    }
  }
  updateOptions(options) {
    this.editor.updateOptions(options);
  }

  #myForm = null;
  #resetListener(evt) {
    this.value = "";
  }
  installed() {
    this.$props.value = this.$props.value ?? this.$props.codes;
    import(new URL("./monaco/index.js", import.meta.url).href).then(
      ({ monaco }) => {
        this.#monaco = monaco;
        this.editor = monaco.editor.create(this.$(".coder"), {
          ...this.$props,
        });
        // this.editor.onDidCreateEditor((evt) => {
        //   console.log("editor create", evt)
        // })
        this.editor.onDidChangeModelContent((evt) => {
          this.fire("change", { value: this.value });
        });
      }
    );
    this.#myForm = this.closest("form");
    if (this.#myForm) {
      this.#myForm.addEventListener("reset", this.#resetListener);
    }
  }
  uninstall() {
    if (this.#myForm) {
      this.#myForm.removeEventListener("reset", this.#resetListener);
    }
  }
  render() {
    return <div class="coder"></div>;
  }
}
