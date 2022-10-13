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
  };
  static propTypes = {
    multiple: Boolean,
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
    let { values, options } = this.$props;
    values = values ?? [];
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
            <li>
              <div class="form-check d-flex">
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
                <label
                  class="form-check-label flex-grow-1"
                  for={`option${index}`}
                >
                  {option.text}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </oi-dropdown>
    );
  }
}
