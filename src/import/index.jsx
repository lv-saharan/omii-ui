const { h, classNames, uniqueTag } = omii;
import uiBase from "../uiBase";
import css from "./index.scss"
export default class extends uiBase {
  static css = [css];
  static defaultProps = {
    src: null,
    module: "default",
    loading: <oi-loading size="6" />
  };
  static propTypes = {
    src: String,
    module: String
  };

  #module

  #load() {
    let { src, module, loading } = this.$props
    this.#module = loading
    if (src && module) {
      import(src).then(modules => {
        let $module = modules[module]
        if ($module instanceof HTMLElement) {
          this.#module = uniqueTag($module)
        } else {
          this.#module = $module
        }
        this.updateSelf()
      }).catch(exc => {
        console.error("import module error！", src, module, exc)
      })
    }

  }
  install() {
    this.#load()
  }
  render(props) {
    return this.#module;
  }
}
