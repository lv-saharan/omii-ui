import uiBase from "../uiBase";
import css from "./node.scss";
import sortable from "../sortable";

const { h, classNames, define, getHost, throttle } = omii;
/**
 * node {
 * key,
 * label,
 * element,
 * expanded
 * checked
 * allowCheck
 * }
 */
class TreeNode extends uiBase {
  static css = css;
  static defaultProps = {
    cssss: null,
    nodeLevel: 0,
    ignoreAttrs: true,
    expander: null
  };
  static propTypes = {
    nodeLevel: Number,
    ignoreAttrs: Boolean,
  };

  get tree() {
    return this.$props.tree;
  }

  get checkboxTree() {
    return this.tree.$props.checkboxTree;
  }

  get radioTree() {
    return this.tree.$props.radioTree;
  }

  get sortable() {
    return this.tree.$props.sortable;
  }
  get selected() {
    return this.node.selected ?? this.tree.isSelected(this.key);
  }

  get checked() {
    return this.node.checked ?? this.tree.isChecked(this.key);
  }

  get radioed() {
    return this.node.radioed ?? this.tree.isRadioed(this.key);
  }
  get expanded() {
    return this.node.expanded ?? this.tree.isExpanded(this.key);
  }

  get expander() {
    return this.node.expander ?? this.$props.expander ?? this.tree.$props.expander
  }

  get node() {
    return this.$props.node ?? {};
  }
  //children nodes
  #nodes;
  /**
   * children nodes
   * 排序时用来确定数组范围
   */
  get nodes() {
    return this.#nodes;
  }

  get noChildren() {
    return !this.nodes || this.nodes.length == 0;
  }
  get path() {
    const pnode = this.parentTreeNode;
    const ppath = pnode ? pnode.path : "";
    const myPath = ppath + "/" + this.key;
    return myPath;
  }
  get parentTreeNode() {
    const pnode = getHost(this);
    return pnode instanceof TreeNode ? pnode : null;
  }

  get key() {
    return this.node.key ?? `node-${this.elementId}`;
  }
  get level() {
    return this.$props.nodeLevel ?? 0;
  }
  // #isloading = false;
  expand() {
    this.tree.expand(this.key, false);
    this.node.expanded = true;
    this.updateSelf();
    this.tree.fire("nodeExpand", { node: this.node, treeNode: this });
  }
  collapse() {
    this.tree.collapse(this.key, false);
    this.node.expanded = false;
    this.updateSelf();
    this.tree.fire("nodeCollapse", { node: this.node, treeNode: this });
  }
  select() {
    this.tree.select(this.key, false);
    if (this.tree.$props.multiSelect) {
      this.updateSelf();
    } else {
      if (this.tree.__selectedNode) {
        this.tree.__selectedNode.updateSelf();
      }
      this.tree.__selectedNode = this;
      this.updateSelf();
    }
    this.tree.fire("nodeSelect", { node: this.node, treeNode: this });
  }
  unSelect() {
    this.tree.unSelect(this.key, false);
    this.updateSelf();
    this.tree.fire("nodeUnSelect", { node: this.node, treeNode: this });
  }
  check() {
    this.tree.check(this.key, false);
    this.tree.fire("nodeCheck", { node: this.node, treeNode: this });
  }
  uncheck() {
    this.tree.uncheck(this.key, false);
    this.tree.fire("nodeUnCheck", { node: this.node, treeNode: this });
  }
  radio() {
    this.tree.radio(this.key, false);
    this.tree.fire("nodeRadio", { node: this.node, treeNode: this });
    if (this.tree.__radioedNode) {
      this.tree.__radioedNode.updateSelf();
    }
    this.tree.__radioedNode = this;
  }
  unradio() {
    this.tree.unradio(this.key, false);
    this.tree.fire("nodeUnRadio", { node: this.node, treeNode: this });
  }

  toggle() {
    if (this.expanded) this.collapse();
    else this.expand();
  }
  get $checkbox() {
    return this.checkboxTree ? (
      this.node.allowCheck !== false ? (
        <input
          type="checkbox"
          disabled={this.node.disabled === true}
          checked={this.checked}
          onClick={(evt) => {
            evt.stopPropagation();
          }}
          onChange={(evt) => {
            if (evt.currentTarget.checked) {
              this.check();
            } else {
              this.uncheck();
            }
          }}
        />
      ) : (
        <div class="checkbox-placeholder" />
      )
    ) : null;
  }
  get $radio() {
    if (this.radioed) this.tree.__radioedNode = this;
    return this.radioTree ? (
      this.node.allowCheck !== false ? (
        <input
          type="radio"
          disabled={this.node.disabled === true}
          checked={this.radioed}
          onClick={(evt) => {
            evt.stopPropagation();
          }}
          onChange={(evt) => {
            if (evt.currentTarget.checked) {
              this.radio();
            } else {
              this.unradio();
            }
          }}
        />
      ) : (
        <div class="radio-placeholder" />
      )
    ) : null;
  }
  install() {
    if (!this.tree.$props.multiSelect && this.selected) {
      this.tree.__selectedNode = this;
    }
  }
  #Sortable;
  get Sortable() {
    return this.#Sortable;
  }
  async installed() {
    if (this.sortable) {
      const Sortable = await sortable.use();
      this.#Sortable = Sortable.create(this.$(".children"), {
        delay: 150,
        handle: ".element",
        // swapThreshold: 0.65,
        fallbackOnBody: true,
        invertSwap: true,
        group: this.tree.sortGroup,

        // onAdd: (evt) => {
        //   // const toHost = getHost(evt.to);
        //   // evt.item.update$Props(
        //   //   {
        //   //     nodeLevel: toHost.level + 1,
        //   //   },
        //   //   true,
        //   //   true
        //   // );
        //   //toHost.updateSelf();
        // },
        onEnd: (evt) => {
          const fromHost = getHost(evt.from);
          const toHost = getHost(evt.to);
          const fromNodes = fromHost.nodes;
          let toNodes = toHost.nodes;
          if (!toNodes) {
            toNodes = [];
            toHost.node.children = toNodes;
          }

          this.tree.fire("sorted", {
            fromNode: fromHost.node,
            fromNodes,
            toNode: toHost.node,
            toNodes,
            fromIndex: evt.oldIndex,
            toIndex: evt.newIndex,
          });
        },
      });

      // const $node = this.$(".node");
      // $node.addEventListener(
      //   "dragover",
      //   throttle(
      //     2000,
      //     (evt) => {
      //       $node.classList.add("hover");
      //     },
      //     { noLeading: true }
      //   )
      // );
      // $node.addEventListener("dragleave", (evt) => {
      //   $node.classList.remove("hover");
      // });
    }
  }
  async render(props) {
    let { node, cssss } = props;
    let $element = node.element ?? node.label ?? node.key;
    if (typeof $element == "function") {
      $element = await $element(node, props, this);
    }
    let $children = null;
    let children = (this.#nodes = node.children);
    if (typeof children === "function") {
      if (this.expanded) {
        this.#nodes = children = await children(node, props, this);
      }
    }

    $children = (
      <div
        class={classNames("children", {
          expanded: this.expanded,
          sortable: this.sortable,
          empty: this.noChildren,
        })}
      >
        {this.expanded &&
          (children instanceof Array
            ? children.map((child) => (
              <oi-tree-node
                node={child}
                node-level={this.level + 1}
                tree={this.tree}
                cssss={cssss}
              />
            ))
            : children)}
      </div>
    );

    return (
      <div
        class={classNames("node", {
          expanded: this.expanded,
          // "loading-children": this.#isloading,
          "no-children": this.noChildren,
        })}
      >
        <div
          class={classNames("element", { selected: this.selected })}
          style={`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`}
          onClick={(evt) => {
            // console.log(evt)
            evt.stopPropagation();
            if (this.selected && evt.ctrlKey === true) this.unSelect();
            else this.select();
          }}
        >
          <div
            onClick={(evt) => {
              evt.stopPropagation();
              this.toggle();
            }}
            class={classNames("expander-wrap", { "no-children": this.noChildren })}
          >
            {!this.noChildren && this.expander}
          </div>
          {this.$checkbox}
          {this.$radio}
          <div class="label">{$element}</div>
          {/* {this.#isloading ? <oi-loading /> : null} */}
        </div>
        {$children}
      </div>
    );
  }
}

define("oi-tree-node", TreeNode);
export default TreeNode;
