/// <reference types="cypress"/>
import { faker } from 'faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('láele')
        cy.get(':nth-child(4) > .button').click()
    });
    
});