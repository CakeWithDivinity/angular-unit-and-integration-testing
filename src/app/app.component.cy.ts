import { AppComponent } from "./app.component"

describe('AppComponent', () => {
  beforeEach(() => {
    cy.mount(AppComponent);
  })

  it('shows count', () => {
    cy.get('[data-cy="count"]').should('be.visible').and('have.text', 0);
  });

  it('increases count when clicking the increase button', () => {
    const button = cy.get('[data-cy="increase"]');
    button.should('be.visible');

    button.click();
    cy.get('[data-cy="count"]').should('have.text', '1')
  });

  it('decreases count when clicking the decrease button', () => {
    const button = cy.get('[data-cy="decrease"]');
    button.should('be.visible');

    button.click();
    cy.get('[data-cy="count"]').should('have.text', '-1');
  });
})
