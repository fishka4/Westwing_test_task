import Button from "../elements/button";
import Input from "../elements/input";

class Modal {
    get emailInput() {
        return new Input($('[data-testid="long-register-email-field"]'));
    }

    get passwordInput() {
        return new Input($('[data-testid="long-register-password-field"]'));
    }

    get submitButton() {
        return new Button($('[data-testid="login_reg_submit_btn"]'));
    }

    setLogin(login) {
        this.emailInput.type(login);
        return this;
    }

    setPassword(password) {
        this.passwordInput.type(password);
        return this;
    }

    submit() {
        this.submitButton.click();
    }
}

export default Modal;
