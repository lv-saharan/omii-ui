const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets, timingClassNames } from "../css";
import css from "./index.scss";
import { isVisible, triggerTransitionEnd } from "bootstrap/js/src/util";
import { reflow } from "../utils";
const CLASS_NAME_CAROUSEL = "carousel";
const CLASS_NAME_ACTIVE = "active";
const CLASS_NAME_SLIDE = "slide";
const CLASS_NAME_END = "carousel-item-end";
const CLASS_NAME_START = "carousel-item-start";
const CLASS_NAME_NEXT = "carousel-item-next";
const CLASS_NAME_PREV = "carousel-item-prev";

const SELECTOR_ACTIVE = ".active";
const SELECTOR_ITEM = ".carousel-item";
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;

export default class extends uiBase {
  static css = [
    () => getCSSStyleSheets("reboot", "utilities", "carousel"),
    css,
  ];

  static defaultProps = {
    autoSlide: true,
    pauseEvent: "hover",
    interval: 2.3,
    duration: 0.6, //动画时长
    items: [],
    prevCtrl: (host) => (
      <button
        class="carousel-control-prev"
        type="button"
        onClick={(evt) => {
          host.slide(false);
        }}
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
    ),
    nextCtrl: (host) => (
      <button
        class="carousel-control-next"
        type="button"
        onClick={(evt) => {
          host.slide();
        }}
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    ),
    indicator: ({ index, host }) => (
      <button
        type="button"
        onClick={(evt) => host.slide(index)}
        class={classNames({ active: index == 0 })}
      ></button>
    ),
  };
  static propTypes = {
    autoSlide: Boolean,
    interval: Number,
    duration: Number,
    pauseEvent: String,
  };

  css() {
    return `
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `;
  }
  #activeIndex = 0;
  get activeIndex() {
    return this.#activeIndex;
  }
  #isSliding = false;
  get isSliding() {
    return this.#isSliding;
  }
  get $items() {
    return this.$$(".carousel-item");
  }
  get $activeItem() {
    return this.$(".carousel-item.active");
  }
  pause() {
    if (this.#isSliding) {
      triggerTransitionEnd(this);
    }

    clearInterval(this.#interval);
    this.#interval = null;
  }

  get indicators() {
    return [...this.$("slot[name=indicators]").children];
  }
  #slideQueue = [];
  slide(isNext = true) {
    //boolean,number,element
    if (this.#isSliding) return false;

    let {
      $activeItem,
      $items,
      settings: { duration },
    } = this;

    let activeIndex = $items.indexOf($activeItem);
    let nextIndex, $nextItem;
    if (isNext instanceof HTMLElement) {
      $nextItem = isNext;
      nextIndex = $items.indexOf($nextItem);
      isNext = nextIndex > activeIndex;
    } else if (typeof isNext == "number") {
      nextIndex = (isNext + $items.length) % $items.length;
      $nextItem = $items[nextIndex];
      isNext = nextIndex > activeIndex;
    } else {
      nextIndex = (activeIndex + 1) % $items.length;
      if (!isNext) {
        nextIndex = (activeIndex - 1 + $items.length) % $items.length;
      }
      $nextItem = $items[nextIndex];
    }

    if (this.#activeIndex == nextIndex) return false;
    let directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    let orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

    this.#isSliding = true;

    let waiting = Number.parseFloat($activeItem.getAttribute("waiting")) ?? 0;

    timingClassNames($nextItem, [
      {
        classNames: [],
        duration: waiting,
      },
      {
        classNames: [orderClassName],
        callback: () => {
          reflow($nextItem);
        },
      },
      {
        classNames: [orderClassName, directionalClassName],
        duration,
      },
      {
        classNames: ["active"],
        callback: () => {
          this.indicators.forEach((indicator, index) => {
            if (nextIndex == index) {
              indicator.classList.add("active");
            } else {
              indicator.classList.remove("active");
            }
          });
        },
      },
    ]);

    timingClassNames($activeItem, [
      {
        classNames: [],
        duration: waiting,
      },
      {
        classNames: [directionalClassName, "active"],
        duration,
      },
      {
        classNames: [],
        callback: () => {
          this.#isSliding = false;
          this.#activeIndex = nextIndex;

          let func;
          while ((func = this.#slideQueue.pop())) {
            func();
          }
        },
      },
    ]);
  }
  nextWhenVisible() {
    if (!document.hidden && isVisible(this)) {
      this.slide();
    }
  }
  #interval;
  cycle() {
    if (this.#interval) clearInterval(this.#interval);
    this.#interval = setInterval(
      () => this.nextWhenVisible(),
      this.$props.interval * 1000
    );
  }
  installed() {
    let $items = this.$items;
    if (!this.$activeItem && $items.length > 0) {
      $items[0].classList.add("active");
    }

    this.#activeIndex = $items.indexOf(this.$activeItem);

    if (this.$props.autoSlide && this.$activeItem) {
      this.cycle();
    }
    this.addEventListener("mouseenter", () => {
      this.pause();
    });
    this.addEventListener("mouseleave", () => {
      if (this.$props.autoSlide) {
        if (this.#isSliding) {
          this.#slideQueue.push(() => {
            this.cycle();
          });
        } else {
          this.cycle();
        }
      }
    });
  }
  render(props) {
    let { items, nextCtrl, prevCtrl, indicator } = this.$props;
    return (
      <div {...extractClass(props, "carousel")}>
        <slot class="carousel-inner">
          {items.map((item) => (
            <div
              className={classNames("carousel-item")}
              waiting={item.attributes?.waiting}
            >
              {item}
            </div>
          ))}
        </slot>

        <div class="carousel-indicators">
          <slot name="indicators">
            {typeof indicator == "function" &&
              items.map((item, index) =>
                indicator({ item, index, host: this })
              )}
          </slot>
        </div>

        <slot name="actions">
          {typeof nextCtrl == "function" && nextCtrl(this)}
          {typeof prevCtrl == "function" && prevCtrl(this)}
        </slot>
      </div>
    );
  }
}
