const { define } = omii;
import utils from "./utils";
import sortable from "./sortable";

import tab from "./tab";
import icon from "./icon";
import bicon from "./bootstrap/icons";
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
import dropdown from "./dropdown";
import coder from "./coder";
import select from "./select";
import table from "./table";
import tinymce from "./tinymce";
import echarts from "./echarts";

const Prefix = "oi";
export const RateTag = `${Prefix}-rate`;
define(RateTag, rate);

export const TabTag = `${Prefix}-tab`;
define(TabTag, tab);

export const IconTag = `${Prefix}-icon`;
define(IconTag, icon);

export const BootstrapIconTag = `${Prefix}-bi`;
define(BootstrapIconTag, bicon);

export const PagerTag = `${Prefix}-pager`;
define(PagerTag, pager);

export const TreeTag = `${Prefix}-tree`;
define(TreeTag, tree);

export const LoadingTag = `${Prefix}-loading`;
define(LoadingTag, loading);

export const AlertTag = `${Prefix}-alert`;
define(AlertTag, alert);

export const AccordionTag = `${Prefix}-accordion`;
define(AccordionTag, accordion);

export const BreadcrumbTag = `${Prefix}-breadcrumb`;
define(BreadcrumbTag, breadcrumb);

export const ModalTag = `${Prefix}-modal`;
define(ModalTag, modal);

export const PopoverTag = `${Prefix}-popover`;
define(PopoverTag, popover);

export const UploaderTag = `${Prefix}-uploader`;
define(UploaderTag, uploader);

export const CarouselTag = `${Prefix}-carousel`;
define(CarouselTag, carousel);

export const BadgeTag = `${Prefix}-badge`;
define(BadgeTag, badge);

export const ToastTag = `${Prefix}-toast`;
define(ToastTag, toast);

export const ProgressTag = `${Prefix}-progress`;
define(ProgressTag, progress);

export const TooltipTag = `${Prefix}-tooltip`;
define(TooltipTag, tooltip);

export const LayoutTag = `${Prefix}-layout`;
define(LayoutTag, layout);

export const ImportTag = `${Prefix}-import`;
define(ImportTag, _import);

export const OffcanvasTag = `${Prefix}-offcanvas`;
define(OffcanvasTag, offcanvas);

export const PaginationTag = `${Prefix}-pagination`;
define(PaginationTag, pagination);

export const DropdownTag = `${Prefix}-dropdown`;
define(DropdownTag, dropdown);

export const CoderTag = `${Prefix}-coder`;
define(CoderTag, coder);

export const SelectTag = `${Prefix}-select`;
define(SelectTag, select);

export const TableTag = `${Prefix}-table`;
define(TableTag, table);

export const TinymceTag = `${Prefix}-tinymce`;
define(TinymceTag, tinymce);

export const EchartsTag = `${Prefix}-echarts`;
define(EchartsTag, echarts);

// define(`${Prefix}-form", form);
customElements.define(`${Prefix}-form`, form, { extends: "form" });

const importURL = import.meta.url;

omii.ui = {
  version: "1.1.10",
  utils,
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
  select,
  table,
  importURL,
  sortable,
  tinymce,
  echarts,
  EchartsTag,
  TinymceTag,
  TableTag,
  SelectTag,
  DropdownTag,
  PaginationTag,
  OffcanvasTag,
  ImportTag,
  LayoutTag,
  TooltipTag,
  ProgressTag,
  ToastTag,
  BadgeTag,
  CarouselTag,
  UploaderTag,
  PopoverTag,
  ModalTag,
  BreadcrumbTag,
  AccordionTag,
  AlertTag,
  LoadingTag,
  TreeTag,
  PagerTag,
  BootstrapIconTag,
  IconTag,
  TabTag,
  RateTag,
};

export {
  utils,
  css,
  effect,
  icon,
  bicon,
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
  select,
  table,
  importURL,
  sortable,
  tinymce,
  echarts,
};
