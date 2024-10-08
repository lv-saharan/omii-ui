const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";

export default class extends uiBase {
  //已经检查过有效性
  #checked = false;
  static css = [
    () => getCSSStyleSheets("reboot", "utilities", "forms", "scrollbar"),
    css,
  ];
  static propTypes = {
    multiple: Boolean,
    preserveOrder: Boolean,
    required: Boolean,
    searchable: Boolean,
    min: Number,
    max: Number,
  };
  static defaultProps = {
    options: [], //value:text,element
    values: [],
    value: null,
    multiple: true,
    required: false,
    searchable: false,
    //最少
    min: 0,
    //最多
    max: 0,
    preserveOrder: true, //保留顺序
    createOption(option, index) {
      const { values, multiple } = this.$props;

      return (
        <div class="form-check d-flex">
          {multiple && (
            <input
              class="form-check-input"
              type="checkbox"
              value={option.value}
              id={`option${index}`}
              checked={values.includes(option.value)}
            />
          )}

          <label class="form-check-label flex-grow-1">
            {option.element ?? option.text}
          </label>
        </div>
      );
    },
    createSelected(option, index) {
      const { values, multiple } = this.$props;

      return (
        <li>
          {option.text}
          <oi-bi
            name="x"
            onClick={(evt) => {
              evt.preventDefault();
              evt.stopImmediatePropagation();
              values.splice(index, 1);
              this.updateSelf();
              if (this.#checked) this.checkValidity();
              this.fire(
                "change",
                multiple ? { values } : { value: this.value }
              );
            }}
          />
        </li>
      );
    },
  };

  get value() {
    return this.$props.value;
  }
  set value(val) {
    this.$props.value = val;
  }
  get values() {
    return this.$props.values;
  }
  get validity() {
    const { required, values, min, max, multiple } = this.$props;
    const result = {
      valid: true,
    };
    if (
      required &&
      ((multiple && (!values || values.length == 0)) ||
        (!multiple && (this.value == null || this.value == "")))
    ) {
      result.valid = false;
      result.valueMissing = true;
    }
    if (result.valid && multiple) {
      if (min != 0 && min > values.length) {
        result.valid = false;
        result.rangeUnderflow = true;
      }
      if (max != 0 && max < values.length) {
        result.valid = false;
        result.rangeOverflow = true;
      }
    }
    return result;
  }

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
  hideOptions() {
    this.$("oi-dropdown").hide();
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
      // this.showOptions();
      this.$("input.value").focus();
      this.$(".selected").classList.add("focus");
    });
    this.addEventListener("blur", (evt) => {
      this.$(".selected").classList.remove("focus");

      this.#activeIndex = false;
      this.#searchKey = null;
      this.hideOptions();
      this.updateSelf();
    });
    const { options, multiple, values } = this.$props;
    this.addEventListener("keydown", (evt) => {
      const keys = ["Enter", "ArrowUp", "ArrowDown"];

      if (keys.includes(evt.key)) {
        evt.preventDefault();
        evt.stopPropagation();
      } else {
        return false;
      }
      const $lis = this.#searchKey
        ? this.$$("li.option.match")
        : this.$$("li.option");

      if ($lis.length) {
        $lis.forEach(($li, index) => {
          if ($li.classList.contains("active")) {
            this.#activeIndex = index;
          }
          $li.classList.remove("active");
        });
        if (evt.key == "Enter") {
          if (this.#activeIndex === false) {
            this.#activeIndex = 0;
          }
          this.#searchKey = null;

          this.hideOptions();
        } else if (evt.key == "ArrowUp") {
          if (this.#activeIndex === false) {
            this.#activeIndex = $lis.length - 1;
          } else if (this.#activeIndex > 0) {
            this.#activeIndex--;
          }
        } else if (evt.key == "ArrowDown") {
          if (this.#activeIndex === false) {
            this.#activeIndex = 0;
          } else if (this.#activeIndex < $lis.length - 1) {
            this.#activeIndex++;
          }
          this.showOptions();
        } else if (evt.key == "Backspace") {
          // if (multiple && values.length > 0) {
          //   values.splice(values.length - 1, 1)
          //   this.updateSelf();
          //   return
          // }
        }
        const $active = $lis[this.#activeIndex];
        if ($active) {
          $active.classList.add("active");
          if (!multiple || evt.key == "Enter") {
            const activeOption = options.at($active.dataset.index);
            this.toggleOption(activeOption, false);
          }
          // this.value = activeOption?.value;
          // this.updateSelf();
        }
      }
    });
  }
  toggleOption(option, hideOptions = true) {
    const { values, multiple } = this.$props;

    if (multiple) {
      const findIndex = values.indexOf(option.value);
      if (findIndex == -1) {
        values.push(option.value);
      } else {
        values.splice(findIndex, 1);
      }
    } else {
      this.value = option.value;
      if (hideOptions) this.hideOptions();
    }
    if (hideOptions) this.#searchKey = null;
    this.updateSelf();
    if (this.#checked) this.checkValidity();
    this.fire("change", multiple ? { values } : { value: this.value });
  }
  #searchKey;
  #activeIndex = false;

  render() {
    let {
      values,
      value,
      searchable,
      options,
      preserveOrder,
      createSelected,
      createOption,
      multiple,
    } = this.$props;
    createOption = createOption.bind(this);
    createSelected = createSelected.bind(this);
    values = values ?? [];
    if (preserveOrder && multiple) {
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
          :host slot:not([name]) {
            display: block;
          }
          :host slot[name="menu"] {
            width: 100%;
          }
        `}
      >
        <div
          class="selected d-flex"
          onClick={(evt) => {
            this.$("input.value").focus();
            evt.stopImmediatePropagation();
            this.showOptions();
          }}
        >
          {multiple ? (
            <ul class="values d-flex flex-wrap">
              {values.map((value, index) => {
                const option = options.find((option) => option.value == value);
                if (option) {
                  return createSelected(option, index);
                }
              })}
              <li className="input">
                <input
                  className="value"
                  readOnly={!searchable}
                  // onFocus={(evt) => {
                  //   this.showOptions();
                  // }}
                  value={this.#searchKey}
                  onInput={(evt) => {
                    this.#searchKey = evt.target.value;
                    this.#activeIndex = false;
                    this.updateSelf();
                  }}
                />
              </li>
            </ul>
          ) : (
            <input
              className="value w-100"
              readOnly={!searchable}
              value={
                this.#searchKey ??
                options.find((option) => option.value == value)?.text
              }
              // onFocus={(evt) => {
              //   this.showOptions();
              // }}
              onInput={(evt) => {
                this.#searchKey = evt.target.value;
                this.#activeIndex = false;
                this.updateSelf();
              }}
            />
          )}
          <oi-icon
            class="expander ms-auto"
            name="keyboard_arrow_down"
            onClick={(evt) => {
              this.showOptions();
            }}
          />
        </div>

        <ul
          className={classNames("dropdown-menu", {
            searching: this.#searchKey,
            multiple,
          })}
          slot="menu"
        >
          {options.map((option, index) => (
            <li
              data-index={index}
              className={classNames("option", {
                match: option.text.includes(this.#searchKey),
                active: multiple
                  ? values.includes(option.value)
                  : value == option.value,
              })}
              onClick={(evt) => {
                this.toggleOption(option);
              }}
            >
              {createOption(option, index)}
            </li>
          ))}
        </ul>
      </oi-dropdown>
    );
  }
}
