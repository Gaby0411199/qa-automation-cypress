describe('Login - Sauce Demo', () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com')
    })
  
    it('Login exitoso con credenciales válidas', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory')
      cy.get('.title').should('contain', 'Products')
    })
  
    it('Login fallido con contraseña incorrecta', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('password_incorrecta')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('be.visible')
    })
  
    it('Login fallido con usuario bloqueado', () => {
      cy.get('[data-test="username"]').type('locked_out_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('contain', 'locked out')
    })
  
  })