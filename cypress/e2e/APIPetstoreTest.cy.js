import user from '../fixtures/user.json'

describe('petstore API operation user', () => {
  beforeEach(() => {    
    cy.createUser(user.initialData)
  })

  afterEach(() => {
    cy.deleteUser(user.initialData)    
  })

  it('should create new user', () => {            
    cy.checkBody(user.initialData)    
  }) 

  it('should put additional information', () => {
    cy.checkBody(user.initialData)               
    cy.updateUser(user.changedData)    
    cy.checkBody(user.changedData)
  })    
   
  it('should delete user', () => {      
    cy.checkBody(user.initialData)
    cy.deleteUser(user.initialData)
    cy.checkResponse404(user.initialData)
  })
})
