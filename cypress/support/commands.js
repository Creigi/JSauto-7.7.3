// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createUser', (user) => {
    cy.request({
        method: 'POST',
        url: '/user',
        body: user
    }).then((response) => {
        expect(response.status).be.eq(200)
        })
      
}) 

Cypress.Commands.add('updateUser', (user)=> {
    cy.request({
        method: 'PUT',
        url: `/user/${user.username}`,
        body: user
    }).then((response) => {
        expect(response.status).be.eq(200)
        }) 
})

Cypress.Commands.add('deleteUser', (user)=> {
    cy.request({
        method: 'DELETE',
        url: `/user/${user.username}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('checkBody', (user) => {
    cy.request(`/user/${user.username}`).then((response) => {
        expect(response.body).be.eqls(user)
      })
})

Cypress.Commands.add('checkResponse404', (user) => {
    cy.request({
        url: `/user/${user.username}`,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).be.eq(404)
      })
})