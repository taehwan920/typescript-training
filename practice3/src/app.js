import { NormalElement, BoardComponent, NumberButton, OperatorButton, CButton } from "./component/base.js";

const numbers = [...Array(10)].map((_, idx) => idx);
const operators = ["+", "-", "*", "/", "="];

class App {
  constructor(appRoot) {
    const appContainer = new NormalElement("article", "calculator-box");
    appContainer.attachTo(appRoot);

    const resultBoard = new BoardComponent();
    appContainer.addChild(resultBoard);

    numbers.forEach(num => {
      const numBtn = new NumberButton("num-btn", num);
      appContainer.addChild(numBtn);
    });
    operators.forEach(operator => {
      const operatorBtn = new OperatorButton("operator-btn", operator);
      appContainer.addChild(operatorBtn);
    });
    const CBtn = new CButton();
    appContainer.addChild(CBtn);
  };
};

new App(document.querySelector("main"))