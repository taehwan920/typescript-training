import { Component } from "./components/baseComponent.js";
import { Composable, CounterBox } from "./components/items/counterBox.js";
import { OperatorBtn } from "./components/items/operator.js";
import { StatusBoard } from "./components/items/statusBoard.js";

class App {
  private element: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.element = new CounterBox();
    this.element.attachTo(appRoot);

    const statusBoard = new StatusBoard();
    this.element.addChild(statusBoard);

    const plusBtn = new OperatorBtn("+");
    this.element.addChild(plusBtn);

    const minusBtn = new OperatorBtn("-");
    this.element.addChild(minusBtn);
  };
};

new App(document.querySelector(".board")! as HTMLElement);