import { Selector } from 'testcafe';

fixture(`Here we go! Testing our Cat list application`)
  .page(`http://localhost:8080/`);

const ShadowSelector = Selector(
  (selector, element = document, separator = '|>') => {
    const segments = selector.split(separator);

    for (const segment of segments) {
      element = element.querySelector(segment);

      if (!element) {
        return null;
      }

      if (!!element.shadowRoot) {
        element = element.shadowRoot;
      }
    }

    return element;
  },
);
const getAwsAmplifyForm = async () => {
  const form = await window.document.querySelector('amplify-container')
    .shadowRoot
    .querySelector('amplify-authenticator')
    .shadowRoot
    .querySelector('amplify-sign-in')
    .shadowRoot
    .querySelector('amplify-form-section')
    .shadowRoot
    .querySelector('amplify-auth-fields');
  return form;
}

const getAwsUserNameField = async () => {
  /* const form = await getAwsAmplifyForm();
  console.log(form
    .shadowRoot
    .querySelector('amplify-username-field')
    .shadowRoot
    .querySelector('amplify-form-field')
    .querySelector('input#username').innerHTML)
  const usernameField = Selector(
    () => form
      .shadowRoot
      .querySelector('amplify-username-field')
      .shadowRoot
      .querySelector('amplify-form-field')
      .querySelector('input#username')); */
  const usernameField = ShadowSelector(`amplify-container|>amplify-authenticator|>amplify-sign-in|>amplify-form-section|>amplify-auth-fields|>amplify-username-field|>amplify-form-field|>input#username`)
  return usernameField;
}
test('Power Ranger main page load test.', async t => {

  /* const demoPage = getAwsUserNameField(); */
  // @ts-ignore: Cannot find name 'demoPageSelector'.
  const AWS_USERNAME_FIELD_SELECTOR = getAwsUserNameField();
  console.log(await AWS_USERNAME_FIELD_SELECTOR.textContent);
  await t.typeText(AWS_USERNAME_FIELD_SELECTOR, 'Aamir Iqubal');
});