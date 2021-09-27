import Product from '../components/product';
import Page from './page';

class WishListPage extends Page {
    open() {
        super.open('/customer/wishlist/index/')
    }

    get wishProducts() {
        return $$('.qaBlockListProduct');
    }

    get noProductsInfo() {
        return $('.qaWishlistNoProducts');
    }

    getProduct(index) {
        const product = this.wishProducts[index];
        return new Product(product);
    }

    isListEmpty() {
        return this.noProductsInfo.waitUntil(async function() {
            return this.isDisplayed();
        }, {
            timeout: 2000
        });
    }
}

export default new WishListPage();
