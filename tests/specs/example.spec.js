import { expect } from 'chai';
import MainPage from '../../pageObjects/main.page';
import WishListPage from '../../pageObjects/wishList.page';

describe('Wish list suite', () => {
    it('Wish list actions: Add/Remove product', () => {
        const searchItem = "möbel";
        const testLogin = "cat09890@cuoly.com";
        const testPassword = "123123123Qwerty";
        const expectedWishCounter = '1';
        const expectedProductIndex = 0;

        MainPage.open()
            .acceptCookies();

        MainPage.inHeader()
            .searchFor(searchItem);

        MainPage.offerModal()
            .closeOfferModal();

        MainPage.productsList()
            .getProduct(expectedProductIndex)
            .addToWishList();

        MainPage.registrationModal()
            .switchToLoginModal()
            .setLogin(testLogin)
            .setPassword(testPassword)
            .submit();

        const wishListCounter = MainPage.inHeader()
            .wishListLink()
            .getCounterText();

        expect(expectedWishCounter).to.equal(wishListCounter);

        MainPage.inHeader()
            .wishListLink()
            .open();

        WishListPage.getProduct(expectedProductIndex)
            .removeFromWishList();

        expect(WishListPage.isListEmpty()).to.be.true;

        const isCounterDisplayed = WishListPage.inHeader()
            .wishListLink()
            .isCounterAvailable();

        expect(isCounterDisplayed).to.be.false;
    });
});
