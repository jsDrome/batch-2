
describe('Cypress tests', function () {
  it('Checks title', function () {
    cy.visit('https://jsdrome.com');
    cy.title().should('eq', 'jsDrome | Mentor driven open source transformation');
  });

  it('Checks payment', function () {
    cy.visit('https://jsdrome.com');
    cy.wait(2000);
    cy.get('#paytm-payment-btn').click();
    cy.contains('jsDrome Order');
    cy.get('.backbtn button').click();
  });

});