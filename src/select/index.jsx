const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import { getCSSStyleSheets } from "../css";
import css from "./index.scss";

export default class extends uiBase {
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
    options: [], //value:text
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

          <label class="form-check-label flex-grow-1">{option.text}</label>
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

  get value() {
    return this.$props.value;
  }
  set value(val) {
    this.$props.value = val;
  }
  get validity() {
    const { required, values, min, max } = this.$props;
    const result = {
      valid: true,
    };
    if (required && (!values || values.length == 0)) {
      result.valid = false;
      result.valueMissing = true;
    }
    if (result.valid) {
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
      this.showOptions();
    });
    const { options } = this.$props;
    this.addEventListener("keydown", (evt) => {
      const keys = ["Enter", "ArrowUp", "ArrowDown"];

      if (keys.includes(evt.key)) {
        evt.preventDefault();
        evt.stopPropagation();
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
        }
        const $active = $lis[this.#activeIndex];
        if ($active) {
          $active.classList.add("active");
          const activeOption = options.at($active.dataset.index);
          this.value = activeOption?.value;
          this.updateSelf();
        }
      }
    });
  }
  toggleOption(option) {
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
      this.hideOptions();
    }

    this.#searchKey = null;
    this.updateSelf();
    if (this.#checked) this.checkValidity();
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
          slot[name="menu"] {
            width: 100%;
          }
        `}
      >
        {multiple ? (
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
        ) : (
          <div
            className="selected d-flex"
            onClick={(evt) => {
              evt.stopImmediatePropagation();
            }}
          >
            <input
              className="value  flex-grow-1"
              readOnly={!searchable}
              value={
                this.#searchKey ??
                options.find((option) => option.value == value)?.text
              }
              onFocus={(evt) => {
                this.showOptions();
              }}
              onBlur={(evt) => {
                this.#activeIndex = false;
                this.#searchKey = null;
                this.updateSelf();
              }}
              onInput={(evt) => {
                this.#searchKey = evt.target.value;
                this.#activeIndex = false;
                this.updateSelf();
              }}
            />
            <div
              class="expander"
              onClick={(evt) => {
                this.showOptions();
              }}
            ></div>
          </div>
        )}
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
