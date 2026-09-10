class ContactPage {

    visit() {
        cy.visit('/contact/')
    }

    firstName() {
        return cy.get('#form-field-name')
    }

    lastName() {
        return cy.get('#form-field-field_e95027c')
    }

    email() {
        return cy.get('#form-field-email')
    }

    message() {
        return cy.get('#form-field-message')
    }

    submitButton() {
        return cy.get('button[type="submit"]')
    }

    fillForm(first, last, email, message) {

        this.firstName().clear().type(first)
        this.lastName().clear().type(last)
        this.email().clear().type(email)
        this.message().clear().type(message)

    }

    submit() {
        this.submitButton().click()
    }

}

export default new ContactPage()