// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
  it("Visits the app about url", () => {
    cy.visit("/#/about");
    cy.contains("This is an about page");
  });
});
