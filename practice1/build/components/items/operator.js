import { BaseComponent } from "../baseComponent.js";
export class OperatorBtn extends BaseComponent {
    constructor(type) {
        super(`<button class="operator">${type}</button>`);
        this.element.onclick = () => {
            this.doOperation && this.doOperation(type);
        };
    }
    ;
    doOperation(type) {
        const board = document.querySelector(".status-board");
        const boardNumber = Number(board.innerHTML);
        if (type === "+") {
            board.innerHTML = String(boardNumber + 1);
        }
        else {
            board.innerHTML = String(boardNumber - 1);
            // const newNumber = boardNumber - 1 === -1 ? 0 : boardNumber - 1;
            // board.innerHTML = String(newNumber);
        }
        ;
    }
    ;
}
;
