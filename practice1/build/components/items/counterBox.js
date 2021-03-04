import { BaseComponent } from "../baseComponent.js";
;
export class CounterBox extends BaseComponent {
    constructor() {
        super(`<div class="counter-box">box</div>`);
    }
    ;
    addChild(child) {
        child.attachTo(this.element);
    }
}
;
