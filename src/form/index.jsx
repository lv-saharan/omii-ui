const { h, classNames, extractClass, createRef } = omii;

function validateElement(el) {
  const { validity } = el;
  if (!validity) return;
  if (!validity.valid) {
    const invalids = [];
    for (let p in validity) {
      if (p !== "valid" && validity[p] === true) {
        invalids.push(p);
      }
    }
    if (invalids.length) el.dataset.invalid = invalids.join(" ");
    if (el.validationMessage)
      el.dataset.validationMessage = el.validationMessage;
  } else {
    delete el.dataset.invalid;
    delete el.dataset.validationMessage;
  }
}
function inputingHandler(evt) {
  const form = evt.currentTarget;
  form.checkValidity();
  form.classList.add("was-validated");
}
/**
 * 自定义验证，所有标记 data-validate 属性的元素
 * @param {HTMLFormElement} form
 * @returns
 */
function checkCustomValidity(form) {
  const others = [...form.querySelectorAll("[data-validate]")];

  [...form.elements, ...others].forEach((el) => {
    validateElement(el);
  });
  const validities = others.map((other) =>
    other.checkValidity ? other.checkValidity() : true
  );
  return validities.every((ok) => ok);
}

function submitHandler(evt) {
  const form = evt.target;

  form.removeEventListener("input", inputingHandler);
  form.addEventListener("input", inputingHandler, false);

  if (!OIForm.checkValidity(form)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}
export default class OIForm extends HTMLFormElement {
  static validate(form) {
    form.noValidate = true;
    form.removeEventListener("submit", submitHandler);
    form.addEventListener("submit", submitHandler, true);
  }
  static checkValidity(form) {
    form.classList.add("was-validated");
    return form.checkValidity() && checkCustomValidity(form);
  }

  static reset(form) {
    form.classList.remove("was-validated");
    form.reset();
  }

  reset() {
    this.classList.remove("was-validated");
    super.reset();
  }
  validate() {
    return this.checkValidity();
  }
  checkValidity() {
    this.classList.add("was-validated");
    return super.checkValidity() && checkCustomValidity(this);
  }

  connectedCallback() {
    this.constructor.validate(this);
  }
}
