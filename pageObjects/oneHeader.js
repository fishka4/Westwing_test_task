import SearchField from "../components/searchField";
import WishList from "../components/wishList";

class OneHeader {
    get searchField() {
        return SearchField;
    }

    get wishList() {
        return WishList;
    }

    searchFor(query) {
        this.searchField
            .typeQuery(query)
            .applySearch();
    }

    wishListLink() {
        return this.wishList;
    }
}

export default new OneHeader();
