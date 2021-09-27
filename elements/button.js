class Button {
    #element

    constructor(element) {
        this.#element = element;
    }

    click() {
        this.#element.waitForDisplayed();
        this.#element.click();
    }
}

export default Button;
