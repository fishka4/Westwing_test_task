import Product from "./product";

class ProductsListing {
    get results() {
        return $$('[data-testid="generic-product"]');
    }

    getProduct(index) {
        const product = this.results[index];
        return new Product(product);
    }
}

export default new ProductsListing();
