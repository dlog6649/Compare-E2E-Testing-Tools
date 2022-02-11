import { test, Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
  .page `localhost:3000`;  // specify the start page

test('My first test', async (t) => {
  await t
    .click('[data-testid=plus-btn]')
    .click('[data-testid=plus-btn]')
    .click('[data-testid=plus-btn]')
    .click('[data-testid=plus-btn]')
    .click('[data-testid=plus-btn]')
    .click('[data-testid=plus-btn]')
    .click('[data-testid=plus-btn]')
    .click('[data-testid=minus-btn]')

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('[data-testid=counter]').value).eql("6");
});
