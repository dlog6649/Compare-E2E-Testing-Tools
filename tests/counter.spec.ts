describe("Counter", () => {
  beforeEach(()=> {
    cy.visit("localhost:3000")
  })

  it("counter value should be increased when plus button clicked", () => {
    cy.get('[data-testid=counter]').should("have.value", "0")

    cy.get('[data-testid=plus-btn]')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()

    cy.get('[data-testid=counter]').should("have.value", "6")
  })

  it("counter value should be decreased when minus button clicked", () => {
    cy.get('[data-testid=counter]').should("have.value", "0")

    cy.get('[data-testid=minus-btn]')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()

    cy.get('[data-testid=counter]').should("have.value", "-6")
  })
})
