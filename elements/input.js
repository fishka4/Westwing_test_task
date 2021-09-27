class Input {
    #element;

    constructor(element) {
        this.#element = element;
    }

    type(value) {
        this.#element.waitForDisplayed();
        this.#element.setValue(value);
    }
}

export default Input;
