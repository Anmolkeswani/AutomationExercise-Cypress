class HomePage {

    visit() {
        cy.visit('/')
    }

    heroSection() {
        return cy.get('main')
    }

    header() {
        return cy.get('header')
    }

    footer() {
        return cy.get('footer')
    }

    allImages() {
        return cy.get('img')
    }

    allLinks() {
        return cy.get('a')
    }

    h1() {
        return cy.get('h1')
    }

}

export default new HomePage()