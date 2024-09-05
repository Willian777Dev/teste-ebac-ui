/// <reference types="cypress"/>

describe('funcionalidade= Login', () => {

it('Deve fazer login com sucesso', () => {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('andreduarte@yahoo.com')
cy.get('#password').type('dmenor007')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, andreduarte (não é andreduarte? Sair)')
})

})