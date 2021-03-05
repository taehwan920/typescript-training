export class BaseComponent {
  constructor(htmlString) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild;
  };
  attachTo(parent, position = "beforeend") {
    parent.insertAdjacentElement(position, this.element);
  };
  addChild(child) {
    child.attachTo(this.element);
  };
  addText(txt) {
    this.element.innerHTML = txt;
  };
};

export class NormalElement extends BaseComponent {
  constructor(tagName, className) {
    super(`<${tagName} class="${className}"></${tagName}>`);
  };
};

export class BoardComponent extends NormalElement {
  constructor() {
    super("h1", "result-board");
    this.addText("0")
  };
};

export class ButtonComponent extends NormalElement {
  constructor(className, innerTxt = "") {
    super("button", className);
    this.addText(innerTxt);
  };
  setBoard() {
    this.resultBoard = document.querySelector(".result-board");
  };
  deleteRemainData() {
    this.setBoard();
    this.resultBoard.dataset.lastoperator = "";
    this.resultBoard.dataset.lastnumber = "";
  };
};

export class NumberButton extends ButtonComponent {
  constructor(className, innerTxt) {
    super(className, innerTxt);
    this.element.onclick = () => {
      this.handleClickNumber();
    };
  };
  handleClickNumber() {
    this.setBoard();
    const lastOp = this.resultBoard.dataset.lastoperator;
    const newLastNumTxt = this.resultBoard.dataset.lastnumber || "" + this.element.innerHTML;
    if (!lastOp) this.resultBoard.dataset.lastnumber = newLastNumTxt;

    const newBoardTxt = this.resultBoard.innerHTML === "0"
      ? this.element.innerHTML
      : this.resultBoard.innerHTML + this.element.innerHTML
    console.log(newBoardTxt)
    this.resultBoard.innerHTML = newBoardTxt;
  };
};

export class CButton extends ButtonComponent {
  constructor() {
    super("c-btn", "C");
    this.element.onclick = () => {
      this.setBoard();
      this.resultBoard.innerHTML = "0";
      this.deleteRemainData();
    };
  };
};

export class OperatorButton extends ButtonComponent {
  constructor(className, operatorTxt) {
    super(className, operatorTxt);
    this.operator = operatorTxt;
    this.element.onclick = () => {
      this.setBoard();
      const lastOp = this.resultBoard.dataset.lastoperator;
      if (!lastOp) {
        this.resultBoard.dataset.lastoperator = this.operator;
        this.resultBoard.dataset.lastnumber = this.resultBoard.innerHTML;
        this.resultBoard.innerHTML = "";
        return;
      };
      this.operate();
      this.deleteRemainData();
    };
  };

  getBoardData() {
    return {
      nownumber: this.resultBoard.innerHTML,
      lastoperator: this.resultBoard.dataset.lastoperator,
      lastnumber: this.resultBoard.dataset.lastnumber,
    };
  };
  calculate(nowNum, lastNum, operator) {
    const numA = Number(lastNum);
    const numB = Number(nowNum);
    switch (operator) {
      case "+": return numA + numB;
      case "-": return numA - numB;
      case "*": return numA * numB;
      case "/": return numA / numB;
      case "=": return this.calculate(numA, numB, this.resultBoard.dataset.lastoperator);
    };
  };
  operate() {
    this.setBoard();
    const { lastoperator, lastnumber, nownumber } = this.getBoardData();
    if (!lastoperator || !lastnumber || !nownumber) return;
    const result = this.calculate(nownumber, lastnumber, lastoperator);
    this.resultBoard.innerHTML = result;
    switch (this.operator) {
      case "+":
      case "-":
      case "/":
        this.resultBoard.dataset.lastoperator = this.operator;
        break
      default:
        this.resultBoard.dataset.lastoperator = "";
    };
  };
};