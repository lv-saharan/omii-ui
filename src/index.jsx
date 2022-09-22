const { define } = omii;

import tab from "./tab";
import icon from "./icon";
import rate from "./rate";
import pager from "./pager";
import pagination from "./pagination";
import tree, { treeNode } from "./tree";
import loading from "./loading";
import css from "./css";
import effect from "./effect";
import alert from "./alert";
import accordion from "./accordion";
import breadcrumb from "./breadcrumb";
import modal from "./modal";
import popover from "./popover";
import uploader from "./uploader";
import carousel from "./carousel";
import badge from "./badge";
import toast from "./toast";
import progress from "./progress";
import tooltip from "./tooltip";
import layout from "./layout";
import _import from "./import";
import offcanvas from "./offcanvas";
import form from "./form";
import utils from "./utils";
import vision from "./vision";
import dropdown from "./dropdown";
import coder from "./coder";

define("oi-rate", rate);
define("oi-tab", tab);
define("oi-icon", icon);
define("oi-pager", pager);
define("oi-tree", tree);
define("oi-loading", loading);
define("oi-alert", alert);
define("oi-accordion", accordion);
define("oi-breadcrumb", breadcrumb);
define("oi-modal", modal);
define("oi-popover", popover);
define("oi-uploader", uploader);
define("oi-carousel", carousel);
define("oi-badge", badge);
define("oi-toast", toast);
define("oi-progress", progress);
define("oi-tooltip", tooltip);
define("oi-layout", layout);
define("oi-import", _import);
define("oi-offcanvas", offcanvas);
define("oi-pagination", pagination);
define("oi-dropdown", dropdown);
define("oi-coder", coder);
// define("oi-form", form);
customElements.define("oi-form", form, { extends: "form" });

const importURL = import.meta.url;

omii.ui = {
  utils,
  vision,
  css,
  effect,
  icon,
  tab,
  rate,
  pager,
  tree,
  treeNode,
  loading,
  alert,
  accordion,
  breadcrumb,
  modal,
  popover,
  uploader,
  carousel,
  badge,
  toast,
  progress,
  tooltip,
  layout,
  import: _import,
  offcanvas,
  pagination,
  form,
  dropdown,
  coder,
  importURL
};

export {
  utils,
  vision,
  css,
  effect,
  icon,
  tab,
  rate,
  pager,
  tree,
  treeNode,
  loading,
  alert,
  accordion,
  breadcrumb,
  modal,
  popover,
  uploader,
  carousel,
  toast,
  progress,
  tooltip,
  layout,
  _import as import,
  offcanvas,
  pagination,
  form,
  dropdown,
  coder,
  importURL
};
