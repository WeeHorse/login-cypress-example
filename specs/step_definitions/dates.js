import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am logged in', () => {
  cy.login('exempel@school.net', 'abc123')
});

Given('I am on the schedule page', () => {
  // TODO: implement step
});

Then('the dates should be correct', () => {
  cy.get('aside > table > tbody > * > :nth-child(1)').each(($date) => {
    // cy.wrap($date).should('match', '2024-03-04')
    // cy.wrap($date).should('match', /\d{4,4}-\d{2,2}-\d{2,2}/)
    // cy.wrap($date).should('contain.text', "2024-03-04")
    // expect($date.text()).match(/\d{4,4}-\d{2,2}-\d{2,2}/)
    cy.wrap($date.text()).should('match', /\d{4,4}-\d{2,2}-\d{2,2}/)
  })
});

When('I click on today', () => {
  cy.get('#goToToday').click()
});

Then('the schedule should highlight today', () => {
  /* How to do this:
  1) Get TODAY: new Date() (format the date to yyyy-mm-dd)
  2) Find today in the date column using TODAY
  3) See if the today date has a <tr> parent with the class "today"
  */
});