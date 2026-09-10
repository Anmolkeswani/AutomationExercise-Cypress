describe('First Test', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('should not login with invalid credentials', () => {
    cy.visit('/')
    cy.get('body', { timeout: 15000 }).should('be.visible')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('wrongpassword')
    cy.get('#login-button').click()

    cy.get('h3[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service')
  })

  it('should show error with empty fields submission', () => {
    cy.visit('/')
    cy.get('body', { timeout: 15000 }).should('be.visible')

    cy.get('#login-button').click()

    cy.get('h3[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username is required')
  })

  it('should login with valid credentials and checkout process', () => {
    cy.visit('/')
    cy.get('body', { timeout: 15000 }).should('be.visible')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('#checkout').click()

    cy.get('#first-name').type('John')
    cy.get('#last-name').type('Doe')
    cy.get('#postal-code').type('75612')

    cy.get('#continue').click()
    cy.get('#finish').click()
  })

  it('should login with valid credentials using fixtures', () => {
    cy.fixture('user').then((data) => {

      cy.visit('/')
      cy.get('body', { timeout: 15000 }).should('be.visible')

      cy.get('[data-test="username"]').type(data.vusername)
      cy.get('[data-test="password"]').type(data.vpassword)
      cy.get('#login-button').click()

    })
  })

/* it('compare website image with local', () => {

  cy.fixture('user').then((data) => {

    cy.visit('/')
    cy.get('body').should('be.visible')

    cy.get('[data-test="username"]').type(data.vusername)
    cy.get('[data-test="password"]').type(data.vpassword)
    cy.get('#login-button').click()
    cy.get('[data-test="inventory-container"]', { timeout: 10000 })
      .should('be.visible')
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]')
      .screenshot('current-image')
    cy.wait(2000)
    cy.task('compareImages', {
      baseline: 'cypress/fixtures/images/sauce-bagpacl.png',
      current: 'cypress/screenshots/current-image.png'
    }).then((diff) => {
      expect(diff).to.equal(0)
    })
    })
  })*/

    it('save data from website to fixture and compare fixture data to website', () => {

      cy.visit('/')
      cy.get('.login_logo').invoke('text')
          .then((text) => {

        const data = {
          heading: text.trim()
        }

        // STEP 3: Save into JSON file
        cy.writeFile(
          'cypress/fixtures/user.json',
          data
        )

      })

    // STEP 4: Read saved file
    cy.readFile('cypress/fixtures/user.json')

      .then((savedData) => {

        // STEP 5: Get website text again
        cy.get('.login_logo')
          .invoke('text')

          .then((actualText) => {

            // STEP 6: Compare both values
            expect(actualText.trim())
              .to.equal(savedData.heading)

          })

      })

  })
    })

