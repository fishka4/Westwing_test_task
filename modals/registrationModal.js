import Button from "../elements/button";
import LoginModal from "./loginModal";
import Modal from "./modal";

class RegistrationModal extends Modal {
    get loginBtn() {
        return new Button($('[data-testid="login_reg_switch_btn"]'));
    }

    switchToLoginModal() {
        this.loginBtn.click();
        return LoginModal;
    }
}

export default new RegistrationModal();
