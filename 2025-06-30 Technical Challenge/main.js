document.addEventListener("DOMContentLoaded", () => {
    // it is now safe to access the DOM
    // so set up the event listeners
    const joinNewsletterOpenButton = document.getElementById("join-newsletter-open-button");
    const joinNewsletterModalDialog = document.getElementById("join-newsletter-modal-dialog");
    const joinNewsletterCloseButton = document.getElementById("join-newsletter-close-button");
    const joinNewsletterFullNameInput = document.getElementById("join-newsletter-full-name-input");
    const joinNewsletterEmailInput = document.getElementById("join-newsletter-email-input");
    const joinNewsletterSubmitButton = document.getElementById("join-newsletter-submit-button");

    const enableOrDisableTheSubmitButton = (event) => {
        event.preventDefault = true;
        if (!joinNewsletterFullNameInput.checkValidity() || !joinNewsletterEmailInput.checkValidity()) {
            // at least one input is invalid
            // so disable the submit button
            joinNewsletterSubmitButton.disabled = true;
            return;
        }
        // no input is invalid
        // so enable the submit button
        joinNewsletterSubmitButton.disabled = false;
    }

    joinNewsletterOpenButton.addEventListener("click", () => {
        joinNewsletterModalDialog.showModal();
    });

    joinNewsletterCloseButton.addEventListener("click", () => {
        joinNewsletterModalDialog.close();
    });

    joinNewsletterFullNameInput.addEventListener("input", (event) => {
        enableOrDisableTheSubmitButton(event);
    });

    joinNewsletterEmailInput.addEventListener("input", (event) => {
        enableOrDisableTheSubmitButton(event);
    });

    joinNewsletterSubmitButton.addEventListener("click", (event) => {
        event.preventDefault = true;
        joinNewsletterModalDialog.close();
    });

});
