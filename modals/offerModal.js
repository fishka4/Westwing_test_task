class OfferModal {
    get offerModal() {
        return $('[data-testid="popup-backdrop"]');
    }

    /**
     * Performs click outside of Offer modal to make it dissappear
     */
    closeOfferModal() {
        this.offerModal.click({ x: 200, y:300});
    }
}

export default new OfferModal();
