import uiBase from "../uiBase";
import css from "./index.scss";
import treeNode from "./node";
const { h, purgeCSSSS, getHost } = omii;

export { treeNode };

export default class extends uiBase {
  static css = css;
  static defaultProps = {
    nodeCss: null, //节点样式表，可以是任何可以转换成CSSStyleSheet的结构
    radioTree: false,
    checkboxTree: false,
    multiSelect: false, //可單選的樹 | true 多選
    sortable: false,
    ignoreAttrs: true,
    selectedKey: null, //選中的行
    selectedKeys: [],
    expandedKeys: [], //展開
    checkedKeys: [], //多選
    radioedKey: null, //單選
    nodes: [], //節點
  };
  static propTypes = {
    ignoreAttrs: Boolean,
    multiSelect: Boolean,
    sortable: Boolean,
    selectedKey: String,
    selectedKeys: Array,
    expandedKeys: Array,
    checkedKeys: Array,
    radioedKey: String,
    nodes: Array,
  };
  get selectedKeys() {
    return this.$props.selectedKeys;
  }
  get selectedKey() {
    return this.$props.selectedKey;
  }

  get expandedKyes() {
    return this.$props.expandedKeys;
  }
  get checkedKeys() {
    return this.$props.checkedKeys;
  }

  get radioedKey() {
    return this.$props.radioedKey;
  }

  isSelected(key) {
    let { multiSelect, selectedKey, selectedKeys } = this.$props;
    if (!multiSelect) return selectedKey != null && selectedKey == key;
    else return (selectedKeys ?? []).some((k) => k == key);
  }

  select(val, update = true) {
    let { multiSelect, selectedKeys } = this.$props;
    if (!multiSelect) this.$props.selectedKey = val;
    else {
      if (!selectedKeys.some((k) => k == val)) {
        selectedKeys.push(val);
      }
    }
    if (update) this.update();
  }
  unSelect(val, update = true) {
    let { multiSelect, selectedKeys } = this.$props;
    if (!multiSelect) this.$props.selectedKey = null;
    else {
      let index = selectedKeys.indexOf(val);
      if (index != -1) {
        selectedKeys.splice(index, 1);
      }
    }
    if (update) this.update();
  }
  isChecked(key) {
    let { checkboxTree, checkedKeys } = this.$props;
    if (checkboxTree) return (checkedKeys ?? []).some((k) => k == key);
    return false;
  }
  check(key, update = true) {
    let { checkboxTree, checkedKeys } = this.$props;
    if (checkboxTree) {
      let index = checkedKeys.indexOf(key);
      if (index == -1) {
        checkedKeys.push(key);
      }
    }
    if (update) this.update();
  }
  uncheck(key, update = true) {
    let { checkboxTree, checkedKeys } = this.$props;
    if (checkboxTree) {
      let index = checkedKeys.indexOf(key);
      if (index != -1) {
        checkedKeys.splice(index, 1);
      }
    }
    if (update) this.update();
  }
  isRadioed(key) {
    let { radioTree, radioedKey } = this.$props;
    if (radioTree) return radioedKey != null && radioedKey == key;
    return false;
  }
  radio(key, update = true) {
    let { radioTree } = this.$props;
    if (radioTree) this.$props.radioedKey = key;
    if (update) this.update();
  }
  unradio(update = true) {
    let { radioTree } = this.$props;
    if (radioTree) this.$props.radioedKey = null;
    if (update) this.update();
  }
  isExpanded(key) {
    let { expandedKeys } = this.$props;
    return (expandedKeys ?? []).some((k) => k == key);
  }
  expand(key, update = true) {
    let { expandedKeys } = this.$props;
    let index = expandedKeys.indexOf(key);
    if (index != -1) expandedKeys.push(key);
    if (update) this.update();
  }
  collapse(key, update = true) {
    let { expandedKeys } = this.$props;
    let index = expandedKeys.indexOf(key);
    if (index != -1) expandedKeys.splice(index, 1);
    if (update) this.update();
  }
  render(props) {
    let nodes = props.nodes ?? this.$props.nodes;
    let host = getHost(this)
    if (typeof nodes === "function") {
      nodes = nodes.call(host)
    }
    let cssss = purgeCSSSS(this.$props.nodeCss, host);
    return (
      <>
        {nodes.map((n) => (
          <oi-tree-node node={n} tree={this} cssss={cssss} />
        ))}
      </>
    );
  }
}
