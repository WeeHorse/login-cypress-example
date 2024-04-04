import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the login page', () => {
  cy.visit('/login.html')
});

When('I type {string} in {string}', (a, selector) => {
  cy.get(selector).type(a)
});

When('I click the submit button', () => {
  cy.get('[type="submit"]').click()
});

Then('I should see a logout button', () => {
  cy.get("[onclick=\"location.href='/logout'\"]")
});