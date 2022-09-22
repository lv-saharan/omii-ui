const { h, classNames, createRef } = omii;
import { computePosition, flip, arrow, shift, offset } from "@floating-ui/dom";
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";
import effect from "../effect";
export default class extends uiBase {
  static css = [
    () => getCSSStyleSheets("reboot", "utilities", "transitions", "popover"),
    css,
  ];
  static defaultProps = {
    header: null,
    body: null,
    reference: null, //哪個對象？
    strategy: "fixed", //'absolute' | 'fixed';
    placement: "bottom",
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
    triggerShow: "mouseenter focus", //mouseenter focus click
    triggerHide: "mouseleave blur", //mouseleave blur click
    offset: 6,
  };
  static propTypes = {
    strategy: String,
    placement: String,
    trigger: String,
    offset: Number,
  };
  get type() {
    return "popover";
  }
  get $element() {
    return this.$(`.${this.type}`);
  }
  slotRef = createRef();
  get #$slot() {
    return this.slotRef.current;
  }
  get #$reference() {
    //检查slot下面有元素吗？使用第一个元素作为参考元素
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
    let reference = this.#$reference;
    if (reference) {
      let $arrow = this.$(`.${this.type}-arrow`);
      computePosition(reference, this.$element, {
        strategy,
        placement,
        middleware: [
          flip(),
          shift(),
          offset(_offset),
          arrow({ element: $arrow }),
        ],
      }).then(({ x, y, placement, middlewareData }) => {
        Object.assign(this.$element.style, {
          left: `${x}px`,
          top: `${y}px`,
        });

        // Accessing the data
        const { x: arrowX, y: arrowY } = middlewareData.arrow;

        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[placement.split("-")[0]];

        $arrow &&
          Object.assign($arrow.style, {
            left: arrowX != null ? `${arrowX}px` : "",
            top: arrowY != null ? `${arrowY}px` : "",
            right: "",
            bottom: "",
          });
        let popoverDataset = this.$element.dataset;
        if (staticSide == "top") {
          popoverDataset.popperPlacement = "bottom";
        } else if (staticSide == "bottom") {
          popoverDataset.popperPlacement = "top";
        } else if (staticSide == "left") {
          popoverDataset.popperPlacement = "right";
        } else if (staticSide == "right") {
          popoverDataset.popperPlacement = "left";
        }
      });
    }
  }
  #visible = false;
  show() {
    this.#visible = true;
    Object.assign(this.$element.style, {
      display: "block",
      position: this.$props.strategy,
    });
    this.setPosition();
    effect.fade.show(this.$element);
  }
  hide() {
    this.#visible = false;
    effect.fade.hide(this.$element);
    Object.assign(this.$element.style, {
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
    const reference = this.#$reference;
    const { triggerShow, triggerHide } = this.$props;
    if (reference) {
      triggerShow.split(" ").forEach((trigger) => {
        if (trigger) {
          reference.addEventListener(trigger, (evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            this.show();
          });
        }
      });
      triggerHide.split(" ").forEach((trigger) => {
        if (trigger) {
          reference.addEventListener(trigger, (evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            if (this.#visible) this.hide();
          });
        }
      });
    }
  }
  render(props) {
    let { placement, header, body } = this.$props;
    return (
      <>
        <slot ref={this.slotRef} tabIndex></slot>
        <div
          class="popover bs-popover-auto fade"
          role="tooltip"
          data-popper-placement={placement}
        >
          <div class="popover-arrow"></div>
          <slot name="header" class="popover-header">
            {header}
          </slot>
          <slot class="popover-body" name="body">
            {body}
          </slot>
        </div>
      </>
    );
  }
}
