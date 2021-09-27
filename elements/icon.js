class Icon {
    #element

    constructor(element) {
        this.#element = element;
    }

    getIconText() {
        this.#element.waitForDisplayed();
        return this.#element.getText();
    }

    isIconExisting() {
        return this.#element == undefined;
    }
}

export default Icon;
