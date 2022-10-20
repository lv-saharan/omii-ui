const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";

export default class extends uiBase {
  static css = [
    () => getCSSStyleSheets("reboot", "utilities", "forms", "scrollbar"),
    css,
  ];
  static defaultProps = {
    options: [], //value:text
    values: [],
    multiple: true,
    required: false,
    preserveOrder: true, //保留顺序
    createOption(option, index) {
      const { values, multiple } = this.$props;
      const labelProps = {};
      if (multiple) {
        labelProps.for = `option${index}`;
      } else {
        //single select
        labelProps.onClick = (evt) => {
          //toggle option
          if (values.includes(option.value)) {
            values.splice(0, values.length);
          } else {
            values.push(option.value);
          }
        };
      }
      return (
        <div class="form-check d-flex">
          {multiple && (
            <input
              class="form-check-input"
              type="checkbox"
              value={option.value}
              id={`option${index}`}
              checked={values.includes(option.value)}
              onChange={(evt) => {
                if (evt.target.checked) {
                  if (!values.includes(option.value)) {
                    values.push(option.value);
                  }
                } else {
                  const findIndex = values.indexOf(option.value);
                  if (findIndex != -1) {
                    values.splice(findIndex, 1);
                  }
                }
                this.updateSelf();
                if (this.#checked) this.checkValidity();
              }}
            />
          )}

          <label class="form-check-label flex-grow-1" {...labelProps}>
            {option.text}
          </label>
        </div>
      );
    },
    createSelected(option, index) {
      const { values } = this.$props;

      return (
        <li
          onClick={(evt) => {
            evt.stopImmediatePropagation();
          }}
        >
          {option.text}
          <oi-bi
            name="x"
            onClick={(evt) => {
              values.splice(index, 1);
              this.updateSelf();
              evt.stopPropagation();
              if (this.#checked) this.checkValidity();
            }}
          />
        </li>
      );
    },
  };
  static propTypes = {
    multiple: Boolean,
    preserveOrder: Boolean,
    required: Boolean,
  };
  get validity() {
    const { required, values } = this.$props;
    let valid = true;
    if (required && (!values || values.length == 0)) {
      valid = false;
    }
    return {
      valid,
    };
  }
  //已经检查过有效性
  #checked = false;
  checkValidity() {
    this.#checked = true;
    const valid = this.validity.valid;
    if (!valid) {
      this.classList.add("is-invalid");
    } else {
      this.classList.remove("is-invalid");
    }
    return valid;
  }
  showOptions() {
    this.$("oi-dropdown").show();
  }
  receiveProps(props, old) {
    if (props.values != old.values) {
      this.classList.remove("is-invalid");
    }
  }
  installed() {
    this.dataset.validate = true;
    this.setAttribute("tabIndex", 0);
    this.addEventListener("focus", (evt) => {
      this.showOptions();
    });
  }
  render() {
    let { values, options, preserveOrder, createSelected, createOption } =
      this.$props;
    createOption = createOption.bind(this);
    createSelected = createSelected.bind(this);
    values = values ?? [];
    if (preserveOrder) {
      values.sort(
        (x, y) =>
          options.findIndex((option) => option.value == x) -
          options.findIndex((option) => option.value == y)
      );
    }

    options = options ?? [];
    return (
      <oi-dropdown
        placement="bottom-start"
        css={`
          slot[name="menu"] {
            width: 100%;
          }
        `}
      >
        <div
          class="selected d-flex"
          onClick={(evt) => {
            evt.stopImmediatePropagation();
            // this.showOptions();
          }}
        >
          &nbsp;
          <ul class="values flex-grow-1">
            {values.map((value, index) => {
              const option = options.find((option) => option.value == value);
              if (option) {
                return createSelected(option, index);
              }
            })}
          </ul>
          <div
            class="expander"
            onClick={(evt) => {
              this.showOptions();
            }}
          ></div>
        </div>
        <ul class="dropdown-menu" slot="menu">
          {options.map((option, index) => (
            <li>{createOption(option, index)}</li>
          ))}
        </ul>
      </oi-dropdown>
    );
  }
}
