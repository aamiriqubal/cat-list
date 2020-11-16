describe('Testing Cat-List application', () => {
  const username = 'test-app@peevr.com';
  const password = 'mD1hV8sX3vG1';

  // Utility to login
  const loginCatList = () => {
    cy.get(selectors.usernameInput).type(username);
    cy.get(selectors.signInPasswordInput).click({ force: true });
    cy.wait(1000);
    cy.get(selectors.signInPasswordInput).type(password);
    cy.get(selectors.signInSignInButton).contains('Sign In').click();
  }

  beforeEach(() => {
    cy.visit('/');
  })
  it('Load the page and see for login screen', () => {
    cy.get(selectors.signInHeader).should('have.text', 'Sign in to your account');
  });

  it('Test login and log out', () => {
    // Take an action (Sign in)
    loginCatList();

    // Make an assertion (Check for sign-out text)
    cy.get(selectors.signOutButton).contains('Sign Out'); //catListHeader
    cy.get(selectors.signOutButton).click();
  });

  it('Test Navigate to catlist page', () => {
    loginCatList();
    cy.get(selectors.navigateToCatList).click();
    cy.url().should('include', '/cat-app')
    cy.get(selectors.catListHeader).should('have.text', 'Cat list');
  });

  it('Test Add a cat to list', () => {
    loginCatList();
    cy.get(selectors.navigateToCatList).click();
    cy.get(selectors.addNewCat).click();
    cy.get(selectors.catNameTextInput).type('Kitty');
    cy.get(selectors.catOwnerTextInput).type('John Doe');
    cy.get(selectors.catDescriptionTextAreaInput).type(`This is very sweet kitty, I am in love with her. these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands.`);
    cy.get(selectors.addCatSubmitButton).click();

    // verify that success notification bar
    cy.get('.cat-app-notification--content').should('have.text', 'Added Successfully!');
    cy.get('.cat-app-notification.cat-app-notification--success').should('be.visible');
    cy.wait(2000);
    cy.get('.cards-container>.card').eq(1).find(selectors.catOwnerName).should('have.text', 'Owner : John Doe');
  });

  it('Test Delete list catlist page', () => {
    loginCatList();
    cy.get(selectors.navigateToCatList).click();
    cy.get(selectors.addNewCat).click();
    cy.get(selectors.catNameTextInput).type('New Kitty');
    cy.get(selectors.catOwnerTextInput).type('Aamir Iqubal');
    cy.get(selectors.catDescriptionTextAreaInput).type(`This is very sweet kitty, though I need to delete the record`);
    cy.get(selectors.addCatSubmitButton).click();
    // verify that success notification bar
    cy.get('.cat-app-notification--content').should('have.text', 'Added Successfully!');
    cy.get('.cat-app-notification.cat-app-notification--success').should('be.visible');
    cy.wait(2000);
    cy.get('.cards-container>.card').eq(1).find(selectors.catOwnerName).should('have.text', 'Owner : Aamir Iqubal');

    cy.wait(500);
    // Delete cat record
    cy.get('.cards-container>.card').eq(1).find(selectors.catDeleteButton).focus().click({ force: true });

    // verify that success notification bar
    cy.get('.cat-app-notification--content').should('have.text', 'Deleted Successfully!');
    cy.get('.cat-app-notification.cat-app-notification--success').should('be.visible');
    cy.wait(2000);
    cy.get('.cards-container>.card').eq(1).find(selectors.catOwnerName).should('have.text', 'Owner : John Doe');

    // Clean up
    cy.get('.cards-container>.card').eq(1).find(selectors.catDeleteButton).focus().click({ force: true });
  });


})
export const selectors = {
  // Auth component classes
  signInHeader: '[data-test="sign-in-header-section"]',
  navigateToCatList: '.cat-app-hero__button-container button',
  catListHeader: '.cat-app-cat-list--header',
  addNewCat: '.card__add-new',
  usernameInput: '[data-test="sign-in-username-input"]',
  catNameTextInput: '[data-test="input-cat-name"]',
  catOwnerTextInput: '[data-test="input-cat-owner"]',
  catDescriptionTextAreaInput: '[data-test="input-cat-description"]',
  catOwnerName: '[data-test="cat-owner-name"]',
  addCatSubmitButton: '[data-test="button-add-cat-submit"]',
  catDeleteButton: '[data-test="cat-delete-button"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  signOutButton: '[data-test="sign-out-button"]'
}