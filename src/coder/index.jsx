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
        src: url(${new URL("./monaco", importUrl).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`
      const fontCSSSS = new CSSStyleSheet()
      fontCSSSS.replace(fontCSS)
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, fontCSSSS]
      return fetch(new URL("./monaco/index.css", importUrl).href)
        .then((r) => r.text())
    },
    css,
  ];
  static defaultProps = {
    codes: "",
    language: "javascript",
    automaticLayout: true,
    fontSize: 12,
  };
  static propTypes = {
    codes: String,
    language: String,
    fontSize: Number,
    automaticLayout: Boolean,
  };
  #monaco;

  get value() {
    return this.editor?.getValue();
  }
  set value(val) {
    this.editor?.setValue(val);
  }

  installed() {
    let { codes, language, automaticLayout, fontSize } = this.$props;
    import(new URL("./monaco/index.js", import.meta.url).href).then(
      ({ monaco }) => {
        this.#monaco = monaco;
        this.editor = monaco.editor.create(this.$(".coder"), {
          value: codes,
          language,
          automaticLayout,
          fontSize,
          minimap: { enabled: false },

        });
        // this.editor.onDidCreateEditor((evt) => {
        //   console.log("editor create", evt)
        // })
      }
    );
  }
  render() {
    return <div class="coder"></div>;
  }
}
