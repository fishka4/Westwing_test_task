import Button from "../elements/button";
import Icon from "../elements/icon";

class WishList {
    get wishListButton() {
        return new Button($('[data-testid="wishlist-bubble"]'));
    }

    get counterIcon() {
        return new Icon($('[data-testid=wishlist-counter]'));
    }

    open() {
        this.wishListButton.click();
    }

    getCounterText() {
        return this.counterIcon.getIconText();
    }

    isCounterAvailable() {
        return this.counterIcon.isIconExisting();
    }
}

export default new WishList();
