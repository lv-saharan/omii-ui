const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import css from "./index.scss";
let root = new URL(`./echarts/`, import.meta.url).href;
let jsFile = "echarts.esm.min.js";
export default class extends uiBase {
  static css = css;
  static propTypes = {};
  static defaultProps = {
    title: null,
    tooltip: null,
    legend: [],
    xAxis: {},
    yAxis: {},
    series: [],
    width: null,
    height: null,
  };

  static get root() {
    return root;
  }
  static set root(value) {
    root = value;
  }
  static get jsFile() {
    return jsFile;
  }
  static set jsFile(value) {
    jsFile = value;
  }

  #echart;
  get echart() {
    return this.#echart;
  }
  async installed() {
    const echarts = await import(
      new URL(this.constructor.jsFile, this.constructor.root).href
    );
    this.#echart = echarts.init(this.$("main"));
    this.echart.setOption(this.$props);
  }
  receiveProps() {
    this.echart.setOption(this.$props);
  }
  render() {
    return <main />;
  }
}
