/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block')
                //.first()
                //.last()
                //.contains('Abominable Hoodie')
                .eq(5)
                .click()
        
                cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });
});