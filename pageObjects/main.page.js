import Page from './page';
import ProductsListing from '../components/productsListing';
import RegistrationModal from '../modals/registrationModal';
import OfferModal from '../modals/offerModal';

class MainPage extends Page {
    open() {
        super.open('/');
        return this;
    }

    productsList() {
        return ProductsListing;
    }

    offerModal() {
        return OfferModal;
    }

    registrationModal() {
        return RegistrationModal;
    }
}

export default new MainPage();
