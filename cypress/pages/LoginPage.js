class LoginPage{
    elements = {
        username: () => cy.get('#email'),
        password: () => cy.get('#password'),
        loginButton: () => cy.get('.btn'),
        errorMessage: () => cy.get('.toast-header')
    }


    visit() {
        cy.visit('https://www.freerangetesters.com/login');
    }

    typeUsername(username) {
        this.elements.username().clear().type(username);
    }

    typePassword(password){
        this.elements.password().clear().type(password);
    }

    clickLogin(){
        this.elements.loginButton().click();
    }
}

module.exports = new LoginPage();