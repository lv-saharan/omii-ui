const { h, classNames, createRef } = omii;
import { computePosition, flip, shift, offset } from "@floating-ui/dom";
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";

//当前显示的下拉关上
let $visibleDropDown = null;

document.addEventListener("click", (evt) => {
  if ($visibleDropDown) $visibleDropDown.hide();
});
export default class extends uiBase {
  static css = [
    () => getCSSStyleSheets("reboot", "utilities", "transitions", "dropdown"),
    css,
  ];
  static defaultProps = {
    /**
     *  
    // | 'top'
    // | 'top-start'
    // | 'top-end'
    // | 'right'
    // | 'right-start'
    // | 'right-end'
    // | 'bottom'
    // | 'bottom-start'
    // | 'bottom-end'
    // | 'left'
    // | 'left-start'
    // | 'left-end';
     */
    placement: "bottom",
    strategy: "absolute",
    trigger: "click",
    offset: 0,
    menu: null,
    reference: null, //哪個對象？
  };
  static propTypes = {
    placement: String,
    strategy: String,
    trigger: String,
    offset: Number,
  };

  #menuRef = createRef();
  get $menu() {
    return this.#menuRef.current;
  }

  #slotRef = createRef();
  get #$slot() {
    return this.#slotRef.current;
  }
  get #$reference() {
    let assignedElements = this.#$slot.assignedElements();
    if (assignedElements.length === 0) {
      let { reference } = this.$props;
      if (typeof reference == "string") {
        return this.getRootNode()?.querySelector(reference);
      } else {
        //支持使用creatRef绑定的对象
        return reference?.current ?? reference;
      }
    } else {
      return assignedElements.at(0);
    }
  }
  setPosition() {
    let { placement, offset: _offset, strategy } = this.$props;

    computePosition(this.#$reference, this.$menu, {
      strategy,
      placement,
      middleware: [flip(), shift(), offset(_offset)],
    }).then(({ x, y, placement }) => {
      Object.assign(this.$menu.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
  #visible = false;
  show() {
    this.#visible = true;
    this.#$slot.focus();
    this.#$slot.setAttribute("aria-expanded", true);
    this.#$slot.classList.add("show");
    Object.assign(this.$menu.style, {
      display: "block",
      position: this.$props.strategy,
    });

    $visibleDropDown = this;
    this.setPosition();
  }
  hide() {
    this.#visible = false;
    this.#$slot.classList.remove("show");
    this.#$slot.setAttribute("aria-expanded", "false");
    $visibleDropDown = null;
    Object.assign(this.$menu.style, {
      display: "none",
    });
  }
  toggle() {
    if (this.#visible) this.hide();
    else {
      this.show();
    }
  }

  installed() {
    this.#$reference.addEventListener("click", (evt) => {
      if ($visibleDropDown && $visibleDropDown != this) $visibleDropDown.hide();
      this.toggle();
      evt.preventDefault();
      evt.stopPropagation();
    });

    this.addEventListener("click", (evt) => {
      evt.stopPropagation();
    });
  }
  render(props) {
    let { menu } = this.$props;
    return (
      <>
        <slot ref={this.#slotRef}></slot>
        <slot name="menu" ref={this.#menuRef}>
          {menu}
        </slot>
      </>
    );
  }
}
