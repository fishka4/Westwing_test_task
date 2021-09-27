import Button from "../elements/button";

class Product {
    #element;

    constructor(element) {
        this.#element = element;
    }

    get wishListButton() {
        return new Button(this.#element.$('[data-testid="wishlist-icon"]'));
    }

    get removeButton() {
        return new Button(this.#element.$('.qaBlockListProduct__delete'));
    }

    addToWishList() {
        this.wishListButton.click();
    }

    removeFromWishList() {
        this.removeButton.click();
    }
}

export default Product;
