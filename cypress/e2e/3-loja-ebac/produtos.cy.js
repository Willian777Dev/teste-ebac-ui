/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Ariel Roll Sleeve Sweatshirt')
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')
    });

    it('Deve adicionar o produto ao carrinho', () => {
        let qtd = 3
        produtosPage.buscarProduto('Zoltan Gym Tee')
        produtosPage.addProdutoCarrinho('XS', 'Green', qtd)

        cy.get('.woocommerce-message').should('contain', qtd + ' × “Zoltan Gym Tee” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)

        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
    });

        })

        
});