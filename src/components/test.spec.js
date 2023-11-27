describe('TodoInput Component Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('renders the TodoInput component', () => {
      cy.get('.card').should('exist');
    });
  
    it('allows entering a new todo', () => {
      const todoText = 'Test Todo';
  
      cy.get('.form-control')
        .type(todoText)
        .should('have.value', todoText);
    });
  
    it('submits the form to add a new task', () => {
      const todoText = 'New Test Todo';
  
      cy.get('.form-control').type(todoText);
      cy.get('.btn-info').click();
    });
  
    it('submits the form to edit a task', () => {
      const editedTodoText = 'Edited Test Todo';
  
      cy.get('.btn-success').click();
      cy.get('.form-control').type(editedTodoText);
      cy.get('.btn-success').click();
    });
  });
  