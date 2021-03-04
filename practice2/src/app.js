import { BoxComponent } from "./components/item/boxComponent.js";

const options = [
  "라이언",
  "죠르디",
  "어피치",
];

class App {
  constructor(appRoot) {
    const container = new BoxComponent("div", "container");
    container.attachTo(appRoot);

    const optionSelect = new BoxComponent("select", "option-box");
    options.forEach(item => {
      const optionItem = new BoxComponent("option", "option-item"); // ? 클릭이벤트 달아보기
      optionItem.addText(item);
      optionItem.attachTo(optionSelect.element);
    });
    container.addChild(optionSelect);
    // ? 카운터 만들기
    // ? 가격 달아보기
  };
};


new App(document.querySelector(".main-doc"));
