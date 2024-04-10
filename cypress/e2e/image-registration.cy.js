import register from '../support/pages/register'
import data from '../fixtures/data.json'

describe('Image Registration', () => {
  context('Submitting an image with invalid inputs', () => {
    const { nullFields } = data

    it('Given I am on the image registration page', () => {
      register.go()
    })

    it('When I enter "" in the title field', () => {
      register.fillTitle(nullFields.title)
    })

    it('Then I enter "" in the URL field', () => {
      register.fillUrl(nullFields.url)
    })
    it('Then I click the submit button', () => {
      register.submitForm()
    })

    it('Then I should see "Please type a title for the image" message above the title field', () => {
      register.validateError(nullFields.validateTitle)
    })

    it('And I should see "Please type a valid URL" message above the imageUrl field', () => {
      register.validateError(nullFields.validateUrl)
    })

    it('And I should see an exclamation icon in the title and URL fields', () => {
      register.fieldsContainCss(nullFields)
    })

    after(() => {
      cy.clearLocalStorage()
    })
  })

  context('Submitting an image with valid inputs using enter key', () => {
    const { validFields } = data

    it('Given I am on the image registration page', () => {
      register.go()
    })
    it(`When I enter "${validFields.title}" in the title field`, () => {
      register.fillTitle(validFields.title)
    })
    it('Then I should see a check icon in the fields', () => {
      register.fieldsContainCss(validFields)
    })
    it(`When I enter "${validFields.url}" in the URL field`, () => {
      register.fillUrl(validFields.url)
    })
    it('Then I can hit enter to submit the form', () => {
      register.hitEnter()
    })
    it('And the list of registered images should be updated with the new item', () => {
      register.searchNewCard(validFields)
    })
    it('And the new item should be stored in the localStorage', () => {
      register.validateLocalStorage(validFields)
    })
    it('Then The inputs should be cleared', () => {
      register.validateEmpyFields()
    })

    after(() => {
      cy.clearLocalStorage()
    })
  })
})
