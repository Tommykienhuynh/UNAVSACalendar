/// <reference types="cypress" />

describe("Initial Site", () => {
  beforeEach(() => {
    cy.visit("https://event-cal.glitch.me/");
  });
  it("Load site", () => {
    // cy.visit('localhost:4200')
    cy.contains("Submit Page");
  });
});

describe("Validate home status lookup", () => {
  it("Pass", () => {
    // Click on item/Type
    cy.get("#accessCodeEntry").type("amlkm2lkm");
    // Click the button
    cy.get("#searchAccess").click();
    // I expect that it should populate the fields
    cy.get("#name").should("have.value", "First event");
    // TODO other elements
  });

  it("Fail", () => {
    cy.get("#accessCodeEntry").clear();
    cy.get("#accessCodeEntry").type("thisshouldnwork");
    cy.get("#name").should("have.value", "First event");
    // TODO check if there's a visual message
  });
});
