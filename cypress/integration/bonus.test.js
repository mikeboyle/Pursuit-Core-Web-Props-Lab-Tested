describe("Bonus", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays percentage progress", () => {
    cy.get("input[type=range]").contains("44.10%");
  });
});
