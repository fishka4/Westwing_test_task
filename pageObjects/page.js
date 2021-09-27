import OneHeader from "./oneHeader";

export default class Page {
    open(path) {
        return browser.url(`https://www.westwingnow.de${path}`);
    }

    inHeader() {
        return OneHeader;
    }

    acceptCookies() {
        const applyCookiesBtn = $('[id="onetrust-accept-btn-handler"]');
        applyCookiesBtn.waitUntil(async function() {
            return this.isDisplayed();
        }, {
            timeout: 5000
        });

        applyCookiesBtn.click();
    }
}
