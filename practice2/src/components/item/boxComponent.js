import { BaseComponent } from "../component.js";

export class BoxComponent extends BaseComponent {
  constructor(tagName, className) {
    super(`<${tagName} class="${className}"></${tagName}>`);
  };
  addText(txt) {
    this.element.innerHTML = txt;
  };
  addChild(child) {
    child.attachTo(this.element);
  };
};
