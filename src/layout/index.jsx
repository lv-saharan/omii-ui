const { h, classNames, createRef } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import effect from "../effect";
import css from "./index.scss";
export default class extends uiBase {
  static css = [css];
  static defaultProps = {
    openFooter: true,
    openHeader: true,
    openLeft: true,
    openRight: true,
    duration: 0.35,
  };
  static propTypes = {
    openFooter: Boolean,
    openHeader: Boolean,
    openLeft: Boolean,
    openRight: Boolean,
  };

  #headerRef = createRef();
  #mainRef = createRef();
  #footerRef = createRef();
  #leftRef = createRef();
  #rightRef = createRef();
  #contentRef = createRef();

  close(element, dir) {}

  closeFooter() {
    this.$props.openFooter = false;
    effect.collapse.hide(this.#footerRef.current);
    this.#mainRef.current.style.height =
      this.clientHeight - this.#headerRef.current.clientHeight + "px";
  }
  openFooter() {
    this.$props.openFooter = true;
    effect.collapse.show(this.#footerRef.current);
    this.#mainRef.current.style.height =
      this.clientHeight -
      this.#headerRef.current.clientHeight -
      this.#footerRef.current.scrollHeight +
      "px";
  }
  toggleFooter() {
    if (this.$props.openFooter) this.closeFooter();
    else this.openFooter();
  }
  closeHeader() {
    this.$props.openHeader = false;
    effect.collapse.hide(this.#headerRef.current);
    this.#mainRef.current.style.height =
      this.clientHeight - this.#footerRef.current.clientHeight + "px";
  }
  openHeader() {
    this.$props.openHeader = true;
    effect.collapse.show(this.#headerRef.current);
    this.#mainRef.current.style.height =
      this.clientHeight -
      this.#headerRef.current.scrollHeight -
      this.#footerRef.current.clientHeight +
      "px";
  }
  toggleHeader() {
    if (this.$props.openHeader) this.closeHeader();
    else this.openHeader();
  }

  closeLeft() {
    this.$props.openLeft = false;
    effect.collapse.hide(this.#leftRef.current);
  }
  openLeft() {
    this.$props.openLeft = true;
    effect.collapse.show(this.#leftRef.current);
  }
  toggleLeft() {
    if (this.$props.openLeft) this.closeLeft();
    else this.openLeft();
  }
  closeRight() {
    this.$props.openRight = false;
    effect.collapse.hide(this.#rightRef.current);
  }
  openRight() {
    this.$props.openRight = true;
    effect.collapse.show(this.#rightRef.current);
  }
  toggleRight() {
    if (this.$props.openRight) this.closeRight();
    else this.openRight();
  }
  resize() {
    let rect = this.getBoundingClientRect();
    let headerRect = this.#headerRef.current.getBoundingClientRect();
    let footerRect = this.#footerRef.current.getBoundingClientRect();
    this.#mainRef.current.style.height =
      rect.height - headerRect.height - footerRect.height + "px";
  }
  installed() {
    //installed 有时候因为样式异步会提前执行

    this.resize();
    // setTimeout(() => {
    //     this.resize()
    // }, 10);
    window.addEventListener(
      "resize",
      (evt) => {
        // console.log(evt)
        this.resize();
      },
      true
    );
  }
  render(props) {
    return (
      <>
        <slot name="header" ref={this.#headerRef}></slot>
        <main ref={this.#mainRef}>
          <slot
            name="left"
            ref={this.#leftRef}
            class="collapse-horizontal"
          ></slot>
          <slot name="content" ref={this.#contentRef}></slot>
          <slot
            name="right"
            ref={this.#rightRef}
            class="collapse-horizontal"
          ></slot>
        </main>
        <slot name="footer" ref={this.#footerRef}></slot>
      </>
    );
  }
}
