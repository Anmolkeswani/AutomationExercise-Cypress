class FooterPage {

    footer() {
        return cy.get('footer')
    }

    quickLinks() {
        return cy.get('footer a')
    }

    socialLinks() {
        return cy.get('footer a[href*="linkedin"], footer a[href*="facebook"], footer a[href*="instagram"]')
    }

    copyright() {
        return cy.get('footer')
    }

    backToTopButton() {
        return cy.get('.scroll-top, .back-to-top')
    }

}

export default new FooterPage()