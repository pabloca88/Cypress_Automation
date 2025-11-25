const LoginPage = require('../../pages/LoginPage');

describe('Login Tests', () => {

    beforeEach(() => {
        LoginPage.visit();
    })

    it('Login with inaccurate data shows error message', () => {
        LoginPage.typeUsername('Pablo@test.com');
        LoginPage.typePassword('test');
        LoginPage.clickLogin();
        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain.text', 'Correo electrónico o contraseña inválidos.');
    })
})