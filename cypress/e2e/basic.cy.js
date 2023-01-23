describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens the index page', () => {
    cy.get('h1').contains('AMAP Helia')
  })

  it('navigates to the Principes page', () => {
    cy.get('a[href="/principes"]').eq(0).click();
    cy.url().should("include", "/principes")
    cy.get('h1').contains(/Principes/i)
  })

  // it('navigates to the values page', () => {
  //   cy.get('a[href="/values"]').eq(0).click();
  //   cy.url().should("include", "/values")
  //   cy.get('h1').contains(/Values/i)
  // })

  // it('navigates to the blog page', () => {
  //   cy.get('a[href="/post"]').eq(0).click();
  //   cy.url().should("include", "/post")
  //   cy.get('h1').contains(/Latest Stories/i)
  // })
  })

describe('validate Nouvelles', () => {
  it('should have only 4 posts', () => {
    cy.visit('/nouvelles')
    cy.get('ul#blog-list li').should('have.length', 4);
  })
})