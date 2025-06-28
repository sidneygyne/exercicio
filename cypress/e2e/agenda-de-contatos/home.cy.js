/// <reference types="cypress" />

describe('Teste para home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar 1 contato = Teste', () => {
        cy.get('input[placeholder="Nome"]').type('Teste');
        cy.get('input[placeholder="E-mail"]').type('teste@teste.com.br');
        cy.get('input[placeholder="Telefone"]').type('62999999999');
        cy.get('button[type="submit"]').click();

        // Verifica que o contato foi adicionado
        cy.contains('li', 'Teste').should('exist');
    });

    it('Deve alterar dados do contato', () => {
        // Localiza o contato pelo nome
        cy.contains('li', 'Teste')
            .parents('.contato')
            .within(() => {
                cy.get('button.edit').click();
            });

        // Edita os dados
        cy.get('input[placeholder="Nome"]').clear().type('Teste Teste');
        cy.get('input[placeholder="Telefone"]').clear().type('1198765999');
        cy.get('input[placeholder="E-mail"]').clear().type('teste2@ebac.com.br');
        cy.get('button[type="submit"]').click();

        // Verifica que os dados foram atualizados
        cy.contains('li', 'Teste Teste').should('exist');
    });

    it('Exclui o contato de nome Teste Teste', () => {
        cy.contains('li', 'Teste Teste')
            .parents('.contato')
            .within(() => {
                cy.get('button.delete').click();
            });

        // Verifica que o contato foi removido
        cy.contains('li', 'Teste Teste').should('not.exist');
    });
});
