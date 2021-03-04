import { BaseComponent, Component } from "../baseComponent.js";

export interface Composable {
  addChild(child: Component): void;
};

export class CounterBox extends BaseComponent<HTMLDivElement> implements Composable {
  constructor() {
    super(`<div class="counter-box">box</div>`);
  };
  addChild(child: Component) {
    child.attachTo(this.element);
  }
};