import * as locator from '../locators/locators';

describe('A user in Blockstream Explorer', () => {
  beforeEach(() => {
    cy.visit('https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732')
  })
  
  it('should be able to validate the transaction count', () => {
    cy.get(locator.TRANSACTION_COUNT).should('have.text', '25 of 2875 Transactions');
  })

  it('should be able to print transactions hash name which has exactly 1 input and 2 outputs', () => {
    cy.get('#transaction-box .vouts').filter((index, element) => {
      return Cypress.$(element).children().length === 2;
    }).each((element) => {
      cy.wrap(element).find('.vout-header').invoke('text').then((text) => {
        console.log(text)
      })
    })
  })
})