import { BaseComponent, Component } from "../baseComponent.js";

export class StatusBoard extends BaseComponent<HTMLHeadingElement> implements Component {
  constructor() {
    super(`<h1 class="status-board">0</h1>`);
  }
};