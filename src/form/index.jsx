const { h, classNames, extractClass, createRef } = omii;

export default class OIForm extends HTMLFormElement {
  static validate(form) {
    form.noValidate = true;
    form.removeEventListener("submit", this.submitHandler);
    form.addEventListener("submit", this.submitHandler, false);
    form.removeEventListener("input", this.inputingHandler);
    form.addEventListener("input", this.inputingHandler, false);
    // form.addEventListener(
    //   "invalid",
    //   (evt) => {
    //     console.log("invalid");
    //   },
    //   true
    // );
  }
  static validateElement(el) {
    const { validity } = el;
    if (!validity.valid) {
      const invalids = [];
      for (let p in validity) {
        if (p !== "valid" && validity[p] === true) {
          invalids.push(p);
        }
      }
      el.dataset.invalid = invalids.join(" ");
      el.dataset.validationMessage = el.validationMessage;
    } else {
      delete el.dataset.invalid;
      delete el.dataset.validationMessage;
    }
  }
  static inputingHandler(evt) {
    const form = evt.currentTarget;
    form.checkValidity();
    OIForm.validateElement(evt.target);
    form.classList.add("was-validated");
  }
  static submitHandler(evt) {
    const form = evt.target;
    if (!form.checkValidity()) {
      evt.preventDefault();
      evt.stopPropagation();
    }
    Array.from(form.elements).forEach((el) => {
      OIForm.validateElement(el);
    });
    form.classList.add("was-validated");
  }
  connectedCallback() {
    this.constructor.validate(this);
  }
}
