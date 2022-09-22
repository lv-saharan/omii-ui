const { render, define, h, Component, setTheme } = omii;

let BASE_ROOT = "bootstrap";
/**
 * 设置一个别的目录作为加载样式的根目录
 * @param {*} baseRoot
 */
export function setBaseRoot(baseRoot) {
  BASE_ROOT = baseRoot;
  BASE_URL = new URL(`./${BASE_ROOT}/`, import.meta.url).href;
}

let BASE_URL = new URL(`./${BASE_ROOT}/`, import.meta.url).href;
/**
 * 这样可以在应用初始化的时候选择把样式目录指定到特定的服务地址
 * @param {*} baseUrl
 */
export function setBaseUrl(baseUrl) {
  BASE_URL = baseUrl;
}

/**
 * 加载指定根地址下的css
 * @param {*} css
 * @param {*} baseUrl
 * @returns
 */
let loadStyleSheet = (css, baseUrl = BASE_URL) => {
  return fetch(getStyleSheetUrl(css, baseUrl))
    .then((r) => {
      if (r.ok) return r.text();
      console.error(`load stylesheet ${css} error`, r);
    })
    .catch((e) => {
      console.error(`load stylesheet ${css} error`, e);
      return null;
    });
};
/**
 * 默认都是通过fetch获取，也可以替换掉这种模式
 * @param {Function} loader
 * @returns
 */
export const setStyleSheetLoader = (loader) => (loadStyleSheet = loader);
/**
 * link rel 方式插入css,很少使用
 * @param {*} css
 * @param {*} parent
 * @param {*} baseUrl
 */
const addStyleSheet = (css, parent, baseUrl = BASE_URL) => {
  let $link = (
    <link rel="styleSheet" href={getStyleSheetUrl(css, baseUrl)}></link>
  );
  render($link, parent ?? "body");
};
/**
 *
 */
const addRebootStyleSheet = (parent, baseUrl = BASE_URL) => {
  addStyleSheet("reboot", parent, baseUrl);
};
/**
 * 用基地址和css名称生成css完整路径
 * @param {*} css
 * @param {*} baseUrl
 * @returns
 */
const getStyleSheetUrl = (css, baseUrl = BASE_URL) => {
  try {
    return new URL(`./${css}.css`, baseUrl).href;
  } catch (exc) {
    console.error(exc, css, baseUrl);
  }
};

const CSSStyleSheetMap = new Map();

export const getCSSStyleSheet = async (css, baseUrl = BASE_URL) => {
  let key = `${baseUrl}/${css}`;
  let cssss = CSSStyleSheetMap.get(key);

  if (cssss === undefined) {
    const resolves = [];
    CSSStyleSheetMap.set(key, resolves);
    cssss = new CSSStyleSheet();
    try {
      cssss.replaceSync(await loadStyleSheet(css, baseUrl));
      resolves.forEach((resolve) => {
        resolve(cssss);
      });
      CSSStyleSheetMap.set(key, cssss);
    } catch (e) {
      console.error("get css stylesheets error", e);
    }
  } else if (cssss instanceof Array) {
    //多线程！
    return new Promise((resolve) => {
      cssss.push(resolve);
    });
  }

  return cssss;
};

export const getCSSStyleSheets = (...csses) => {
  return Promise.all(csses.map((css) => getCSSStyleSheet(css)));
};

import stylesheets from "../bootstrap/stylesheets";

export const CSSStyleSheets = {};
stylesheets.forEach((css) => {
  Object.defineProperty(CSSStyleSheets, css, {
    get: function () {
      return getCSSStyleSheet(css);
    },
  });
});
export const preLoad = (csses = stylesheets) => {
  csses.forEach((css) => {
    getCSSStyleSheet(css);
  });
};
export const useTheme = async (theme, baseUrl = BASE_URL) => {
  let themeCSS = await loadStyleSheet(`theme.${theme}`, baseUrl);
  setTheme(themeCSS);
};

export const timingClassNames = (element, settings, times = 1) => {
  if (
    settings instanceof Array &&
    settings.length &&
    typeof times == "number" &&
    element.classList
  ) {
    let totalRun = 0;

    let run = (preClasses = []) => {
      let index = totalRun % settings.length;

      let {
        classNames,
        duration = 0,
        delay = 0,
        callback = null,
      } = settings[index];

      setTimeout(() => {
        if (typeof classNames == "string") {
          classNames = classNames.split(" ").filter((s) => s != "");
        }
        element.classList.remove(...preClasses);
        element.classList.add(...classNames);
        if (callback) callback(element, classNames, duration, delay);
      }, delay * 1000);

      totalRun++;
      let runTimes = Math.floor(totalRun / settings.length);
      //执行够了就退出
      if (runTimes >= times) return;

      setTimeout(() => {
        run(classNames);
      }, (duration + delay) * 1000);
    };
    run();
  }
};
export default {
  StyleSheets: stylesheets,
  CSSStyleSheets,
  setBaseUrl,
  setBaseRoot,
  loadStyleSheet,
  setStyleSheetLoader,
  addStyleSheet,
  addRebootStyleSheet,
  getStyleSheetUrl,
  getCSSStyleSheet,
  getCSSStyleSheets,
  useTheme,
  timingClassNames,
  preLoad,
};
