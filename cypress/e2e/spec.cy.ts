
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.logitravel.com/')
    cy.contains('Destino')
  })
})