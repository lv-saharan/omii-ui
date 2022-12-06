import uiBase from "../uiBase";
import css from "./index.scss";
const { h, Component, classNames, render } = omii;

/**
 * items=[{key,nav|name,pane,__pane}]
 */
export default class extends uiBase {
  static css = css;
  static defaultProps = {
    activeIndex: null, //undefined
    activeKey: null,
    activeEvent: "click", //or hover
  };
  static propTypes = {
    activeIndex: Number,
    activeKey: String,
    activeEvent: String,
  };

  get activeIndex() {
    return this.$props.activeIndex ?? 0;
  }
  get activeKey() {
    return this.$props.activeKey;
  }

  async active({ index, key }, type = null) {
    if (type == null || type == this.$props.activeEvent) {
      if (this.activeKey) {
        this.update$Props(
          {
            activeKey: key,
          },
          { ignoreAttrs: true, updateSelf: true }
        );
      } else {
        this.update$Props(
          {
            activeIndex: index,
          },
          { ignoreAttrs: true, updateSelf: true }
        );

        
      }
    }
  }

  get slotPanes() {
    const slot = this.$("slot")
    const panes = slot?.assignedElements()
    return panes
  }
  async render(props) {
    let settings = this.$props;
    let items = props.items ?? settings.items;
    let $navs = [];
    let $panes = [];
    for (let index = 0; index < (items ?? []).length; index++) {
      let item = items[index];
      let isActive = this.activeKey
        ? this.activeKey == item.key
        : index == this.activeIndex;

      let $pane = item.pane;
      // if (isActive && typeof $pane == "function") {
      //   $pane = $pane(item, settings, this);
      // }
      $panes.push(
        <div
          key={`pane-${item.key ?? index}`}
          className={classNames("pane", {
            active: isActive,
          })}
        >
          {$pane}
        </div>
      );
      $navs.push(
        <div
          key={`nav-${item.key ?? index}`}
          className={classNames("nav", {
            active: isActive,
          })}
          onMouseEnter={() => this.active({ index, key: item.key }, "hover")}
          onclick={() => this.active({ index, key: item.key }, "click")}
        >
          {item.nav ?? item.name ?? item.key}
        </div>
      );
    }
    return (
      <div class="tabs">
        <div class="navs">{$navs}</div>
        <div class="panes">
          {$panes}
          <slot></slot>
        </div>
      </div>
    );
  }
}
