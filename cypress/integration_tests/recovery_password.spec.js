/// <reference types="Cypress" />
const successUser = "amin@gmail.com";
const failureUser = "123@gmail.com";
const successPath = "/forgot-password/success";
const failurePath = "/forgot-password/failure";

context("The Forgot Password Page", () => {
  beforeEach(() => {
    cy.visit("/forgot-password");
  });

  it("Suceess scenario - Should be able to recovery password: amin@gmail.com", () => {
    cy.get('input[name="email"]')
      // Delay each keypress by 0.1 sec
      .type(successUser, {
        delay: 100
      })
      .should("have.value", successUser);
    cy.get("form").submit();
    cy.get("#notification")
      .should("have.class", "notification")
      .should("have.attr", "style", "background-color: green;");
  });

  it("Failure scenario - Should not be able to recovery password: 123@gmail.com", () => {
    cy.get('input[name="email"]')
      // Delay each keypress by 0.1 sec
      .type(failureUser, {
        delay: 100
      })
      .should("have.value", failureUser);
    cy.get("form").submit();
    cy.get("#notification")
      .should("have.class", "notification")
      .should("have.attr", "style", "background-color: red;");
  });
});
