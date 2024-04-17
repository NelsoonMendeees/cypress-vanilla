import register from '../../support/pages/register'
import data from '../../fixtures/data.json'

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
    const { registerEnterKey } = data

    it('Given I am on the image registration page', () => {
      register.go()
    })
    it(`When I enter "${registerEnterKey.title}" in the title field`, () => {
      register.fillTitle(registerEnterKey.title)
    })
    it('Then I should see a check icon in the fields', () => {
      register.fieldsContainCss(registerEnterKey)
    })
    it(`When I enter "${registerEnterKey.url}" in the URL field`, () => {
      register.fillUrl(registerEnterKey.url)
    })
    it('Then I can hit enter to submit the form', () => {
      register.hitEnter()
    })
    it('And the list of registered images should be updated with the new item', () => {
      register.searchNewCard(registerEnterKey)
    })
    it('And the new item should be stored in the localStorage', () => {
      cy.reload()
      register.validateLocalStorage(registerEnterKey)
    })
    it('Then The inputs should be cleared', () => {
      register.validateEmpyFields()
    })

    after(() => {
      cy.clearLocalStorage()
    })
  })

  context('Submitting an image and updating the list', () => {
    const { registerSubmit } = data

    it('Given I am on the image registration page', () => {
      register.go()
    })
    it(`Then I have entered "${registerSubmit.title}" in the title field`, () => {
      register.fillTitle(registerSubmit.title)
    })
    it(`Then I have entered "${registerSubmit.url}" in the URL field`, () => {
      register.fillUrl(registerSubmit.url)
    })
    it('Then I click the submit button', () => {
      register.submitForm()
    })
    it('And the list of registered images should be updated with the new item', () => {
      register.searchNewCard(registerSubmit)
    })
    it('And the new item should be stored in the localStorage', () => {
      cy.reload()
      register.validateLocalStorage(registerSubmit)
    })
    it('Then The inputs should be cleared', () => {
      register.validateEmpyFields()
    })

    after(() => {
      cy.clearLocalStorage()
    })
  })

  context('Refreshing the page after submitting an image clicking in the submit button', () => {
    const { submitRefresh } = data
    
    it('Given I am on the image registration page', () => {
      register.go()
    })
    it('Then I have submitted an image by clicking the submit button', () => {
      register.fillTitle(submitRefresh.title)
      register.fillUrl(submitRefresh.url)
      register.submitForm()
    })
    it('When I refresh the page', () => {
      cy.wait(500)
      cy.reload()
    })
    it('Then I should still see the submitted image in the list of registered images', () => {
      register.searchNewCard(submitRefresh)
    })

    after(() => {
      cy.clearLocalStorage()
    })
  })
})
