describe('App', () => {
  it('finds the content "type"', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Learn React');
  });
});
