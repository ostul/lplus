exports.TodoPage = require('./cypress/page_objects/todo-page').TodoPage

exports.HomePage = {
    login: () => {
        cy.log('Log In')
    }
}
exports.LoginPage = {
    logout: () => {
        cy.log('Log Out')
    }
}