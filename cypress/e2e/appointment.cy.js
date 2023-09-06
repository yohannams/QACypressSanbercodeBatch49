describe('make appointment', () => {
    beforeEach(()=>{
      cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })
  
    it('success make appointment', () => {
      cy.get('#menu-toggle > .fa').click()
      cy.get('[href="profile.php#login"]').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()
      cy.url().should('eq','https://katalon-demo-cura.herokuapp.com/#appointment')
    })
  
    it('failed make appointment', () => {
      cy.get('#menu-toggle > .fa').click()
      cy.get('[href="profile.php#login"]').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsAPassword')
      cy.get('#btn-login').click()
      cy.get('body').contains('Login failed! Please ensure the username and password are valid.')
    })
})