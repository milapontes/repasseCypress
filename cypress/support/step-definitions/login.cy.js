Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When('realizo login no portal', () => {
    cy.acessarLogin()
    cy.realizarLogin()

})
Then('valido acesso a Home', () => {
    cy.validarLogin()
})
