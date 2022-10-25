const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";

export default class extends uiBase {
  static css = [() => getCSSStyleSheets("reboot", "utilities", "tables"), css];

  static defaultProps = {
    rows: null,
    /**
     * {title,field，type,style,titleStyle,sort}
     * type:normal,checkbox,radio,index,
     * {
     *  type:"checkbox",
     *  field:"id",
     *  checked:[]
     *
     * }
     * 支持多种主键
     */
    columns: [],
    //显示header
    showHeader: true,
    titleCellFormatter(col, cols, rows, host) {
      if (col.type == "checkbox") {
        if (!col.checked) {
          col.checked = [];
        }
        const rowKeys = rows?.map((row) => row[col.field]) ?? [];
        const checked = rowKeys.every((key) => col.checked.includes(key));
        return (
          <input
            type="checkbox"
            data-field={col.field}
            checked={checked}
            onChange={async (evt) => {
              if (evt.target.checked) {
                //checkall
                col.checked.push(...rowKeys);
                const checkedKeys = [...new Set(col.checked)];
                col.checked.splice(0, col.checked.length, ...checkedKeys);
              } else {
                const all = new Set(col.checked);
                const rest = new Set(rowKeys.filter((key) => !all.has(key)));
                col.checked.splice(0, col.checked.length, ...rest);
              }
              await host.updateSelf();
            }}
          ></input>
        );
      }
      return col.title ?? col.field;
    },

    dataCellFormatter(col, row, index, rows, host) {
      const value = row[col.field];
      switch (col.type) {
        case "index":
          return index + 1;
        case "checkbox":
          if (!col.checked) {
            col.checked = [];
          }
          return (
            <input
              type="checkbox"
              checked={col.checked?.includes(value)}
              onChange={async (evt) => {
                const index = col.checked.indexOf(value);
                if (index == -1) {
                  col.checked.push(value);
                } else {
                  col.checked.splice(index, 1);
                }
                await host.updateSelf();
              }}
            ></input>
          );
        case "radio":
          return <input type="radio"></input>;
        default:
          return value;
      }
    },
    height: "auto",
  };
  static propTypes = {
    showHeader: Boolean,
  };

  render() {
    const {
      columns,
      rows,
      showHeader,
      titleCellFormatter,
      dataCellFormatter,
      height,
    } = this.$props;
    const outerClass = extractClass(this.$props)?.class ?? "";
    return (
      <div className="table-container" style={{ height }}>
        <table className={`table ${outerClass}`}>
          <thead>
            {showHeader && (
              <tr>
                {columns?.map((col) => (
                  <th style={col.titleStyle} scope="col">
                    {titleCellFormatter(col, columns, rows, this)}
                  </th>
                ))}
              </tr>
            )}
            <slot name="header"></slot>
          </thead>
          <tbody>
            {rows?.map((row, index) => (
              <tr>
                {columns.map((col) => (
                  <td style={col.style}>
                    {dataCellFormatter(col, row, index, rows, this)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <slot name="footer"></slot>
          </tfoot>
        </table>
      </div>
    );
  }
}
