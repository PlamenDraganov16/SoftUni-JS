class Textbox {
  constructor(selector, invalidSymbols) {
    this._invalidSymbols = invalidSymbols;
    this.selector = selector;
    this._elements = Array.from(document.querySelectorAll(selector));

    this._onInput = this._onInput.bind(this);

    this._elements.forEach(el => el.addEventListener('input', this._onInput));
  }

  get elements() {
    return document.querySelectorAll(this.selector);
  }

  get value() {
    return this._elements.length > 0 ? this._elements[0].value : '';
  }

  set value(newValue) {
    this._elements.forEach(el => el.value = newValue);
  }

  isValid() {
    return !this._elements.some(el => this._invalidSymbols.test(el.value));
  }

  _onInput(event) {
    this.value = event.target.value;
  }
}


let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
