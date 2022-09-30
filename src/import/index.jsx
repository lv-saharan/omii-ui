const { h, classNames, uniqueTag } = omii;
import uiBase from "../uiBase";
import css from "./index.scss";
export default class extends uiBase {
  static css = [css];
  static defaultProps = {
    src: null,
    module: "default",
    loading: <oi-loading size="6" />,
  };
  static propTypes = {
    src: String,
    module: String,
  };
  #module;
  load(src, module, loading = <oi-loading size="6" />) {
    this.#module = loading;
    if (src && module) {
      import(src)
        .then((modules) => {
          let $module = modules[module];
          if (typeof $module === "function") {
            const App = uniqueTag($module);
            this.#module = <App />;
          } else {
            this.#module = $module;
          }
          this.updateSelf();
        })
        .catch((exc) => {
          console.error("import module error！", src, module, exc);
        });
    }
  }
  install() {
    let { src, module, loading } = this.$props;
    this.load(src, module, loading);
  }
  render(props) {
    return this.#module;
  }
}
