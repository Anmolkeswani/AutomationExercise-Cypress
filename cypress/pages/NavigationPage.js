class NavigationPage {

    menuItems() {
        return cy.get('header nav a')
    }

    clickMenu(menuName) {
        cy.contains('header nav a', menuName).click()
    }

    logo() {
        return cy.get('header img')
    }

    mobileMenu() {
        return cy.get('.elementor-menu-toggle')
    }

}

export default new NavigationPage()