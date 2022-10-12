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
  checkValidity() {
    const valid = this.validity.valid;
    if (!valid) {
      this.classList.add("is-invalid");
    } else {
      this.classList.remove("is-invalid");
    }
    return true;
  }
  installed() {
    this.dataset.validate = true;
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
          }}
        >
          &nbsp;
          <ul class="values flex-grow-1">
            {values.map((value, index) => {
              const option = options.find((option) => option.value == value);
              if (option) {
                return (
                  <li>
                    {option.text}
                    <oi-bi
                      name="x"
                      onClick={(evt) => {
                        values.splice(index, 1);
                        this.updateSelf();
                        evt.stopPropagation();
                        this.checkValidity();
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
              this.$("oi-dropdown").show();
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
                    this.checkValidity();
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
