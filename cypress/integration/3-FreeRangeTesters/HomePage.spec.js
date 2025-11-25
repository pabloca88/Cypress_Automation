describe('Home de www.freerangetesters.com', () => {
    beforeEach(()=> {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('Should have title and click on "Acceder" ', () => {
        cy.title().should('include', 'Free Range Testers');
        cy.get('[data-testid="desktop-menu"] > .sc-dJkDXt').should('be.visible')
        .click();
        cy.url().should('include', '/login');
        

    });

    it('Login with unaccurate data, returns error message', () => {
        cy.contains('Acceder').should('be.visible').click();
        cy.get('#email').type('pablo@test.com');
        cy.get('#password').type('test');
        cy.get('.btn').click();
        cy.get('.toast-header')
        .contains('Correo electrónico o contraseña inválidos.')
        .should('be.visible');
    })

    it('El campo de email para La Guia 2025, posee clase sc-jdabBK jjJSyU', () => {
        cy.get('#email-form-email').should('have.class', 'sc-jdabBK jjJSyU');
    });

    it('Existe un link llamado Udemy en la barra de navegación', () => {
        cy.get(':nth-child(7) > .sc-hORkcV')
        .should('exist')
        .and('have.text', 'Udemy');
    });
});