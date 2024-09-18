const { h, classNames, extractClass } = omii;
// import { createPopper } from '@popperjs/core';
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";
// import effect from "../effect";

export default class Marquee extends uiBase {
  static css = [getCSSStyleSheets("reboot", "utilities"), css];
  static defaultProps = {
    speed: 10,
    hoverPause: true,
    direction: "left", // left ,right,up,down
    offsetPercentage: 0, //偏移百分比
    delay: 0,
    interval: 0,
    times: Infinity,
  };
  static propTypes = {
    speed: Number,
    // percentagePerSecond: Number,
    hoverPause: Boolean,
    direction: String,
    offsetPercentage: Number,
    delay: Number,
    interval: Number,
    times: Number,
  };
  css() {
    return `
    
    `;
  }
  get vertical() {
    return this.props.direction === "up" || this.props.direction === "down";
  }
  get horizontal() {
    return this.props.direction === "left" || this.props.direction === "right";
  }

  get translateX() {
    return this.horizontal ? this.props.offsetPercentage * this.clientWidth : 0;
  }
  get translateY() {
    return this.vertical ? this.props.offsetPercentage * this.clientHeight : 0;
  }

  get $container() {
    return this.$(".container");
  }
  #containerRawWidth;
  #containerRawHeight;
  installed() {
    const $container = this.$container;
    this.#containerRawWidth = $container.offsetWidth;
    this.#containerRawHeight = $container.offsetHeight;

    const $childNodes = Array.from(this.childNodes);
    if (this.horizontal) {
      const marqueeWidth = this.clientWidth;
      do {
        this.append(...$childNodes.map((item) => item.cloneNode(true)));
      } while (
        $container.clientWidth > 0 &&
        marqueeWidth * 2 >= $container.clientWidth
      );
    } else {
      const marqueeHeight = this.clientHeight;
      do {
        this.append(...$childNodes.map((item) => item.cloneNode(true)));
      } while (
        $container.clientHeight > 0 &&
        marqueeHeight * 2 >= $container.clientHeight
      );
    }

    switch (this.props.direction) {
      case "left":
        this.run(this.translateX, 0);
        break;
      case "right":
        this.run(
          -this.$container.clientWidth + this.clientWidth - this.translateX,
          -this.$container.clientWidth + this.clientWidth
        );
        break;
      case "up":
        this.run(this.translateY, 0);
        break;
      case "down":
        this.run(
          -this.$container.clientHeight + this.clientHeight - this.translateY,
          -this.$container.clientHeight + this.clientHeight
        );

        break;
    }

    if (this.props.hoverPause) {
      this.addEventListener("mouseenter", (e) => {
        this.#animation?.pause();
      });
      this.addEventListener("mouseleave", (e) => {
        this.#animation?.play();
      });
    }
  }
  #animation;
  run(from, to) {
    this.#animation = this.$container.animate(
      [
        {
          transform: `${
            this.horizontal ? "translateX" : "translateY"
          }(${from}px)`,
        },
        {
          transform: `${
            this.horizontal ? "translateX" : "translateY"
          }(${to}px)`,
        },
      ],
      {
        duration: (Math.abs(to - from) / this.props.speed) * 1000,
        fill: "forwards",
        iterations: 1,
      }
    );
    this.#animation.addEventListener("finish", (e) => {
      switch (this.props.direction) {
        case "left":
          this.run(0, this.#containerRawWidth * -1);
          break;
        case "right":
          this.run(
            -this.$container.clientWidth + this.clientWidth,
            -this.$container.clientWidth +
              this.clientWidth +
              this.#containerRawWidth
          );
          break;
        case "up":
          this.run(0, this.#containerRawHeight * -1);
          break;
        case "down":
          this.run(
            -this.$container.clientHeight + this.clientHeight,
            -this.$container.clientHeight +
              this.clientHeight +
              this.#containerRawHeight
          );
          break;
      }
    });
    return this.#animation;
  }
  render(props) {
    return (
      <div
        className={classNames("container", {
          vertical: this.vertical,
          horizontal: this.horizontal,
        })}
      >
        <slot></slot>
      </div>
    );
  }
}
