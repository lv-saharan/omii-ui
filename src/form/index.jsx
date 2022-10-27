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
  validateElement(evt.target);
  form.classList.add("was-validated");
}
function validate(form) {
  const valid = form.checkValidity();
  const others = [...form.querySelectorAll("[data-validate")];

  [...form.elements, ...others].forEach((el) => {
    validateElement(el);
  });
  form.classList.add("was-validated");
  return (
    others.every((other) =>
      other.checkValidity ? other.checkValidity() : true
    ) && valid
  );
}
function submitHandler(evt) {
  const form = evt.target;

  form.removeEventListener("input", inputingHandler);
  form.addEventListener("input", inputingHandler, false);

  if (!validate(form)) {
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

  reset() {
    super.reset();
    this.classList.remove("was-validated");
  }
  validate() {
    return validate(this);
  }
  connectedCallback() {
    this.constructor.validate(this);
  }
}
