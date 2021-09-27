import Input from '../elements/input';

class SearchField {
    get searchInput() {
        return new Input($('[data-testid="search-input"]'));
    }

    typeQuery(query) {
        this.searchInput.type(query);
        return this;
    }

    applySearch() {
        browser.keys("Enter");
    }
}

export default new SearchField();
