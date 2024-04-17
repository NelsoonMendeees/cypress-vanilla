import register from '../../support/pages/register'
import data from '../../fixtures/data.json'
import testDescription from '../../support/gherkin/scenario.description'

describe('Image Registration - Page Objects - Section', () => {
  context('Invalid inputs', () => {
    const { nullFields } = data
    it('Submitting an image with invalid inputs', () => {
      cy.allure().addDescriptionHtml(testDescription.nullFields)

      cy.section('Given I am on the image registration page')
      register.go()

      cy.section('When I enter "" in the title field')
      register.fillTitle(nullFields.title)

      cy.section('Then I enter "" in the URL field')
      register.fillUrl(nullFields.url)

      cy.section('Then I click the submit button')
      register.submitForm()

      cy.section('Then I should see "Please type a title for the image" message above the title field')
      register.validateError(nullFields.validateTitle)

      cy.section('And I should see "Please type a valid URL" message above the imageUrl field')
      register.validateError(nullFields.validateUrl)

      cy.section('And I should see an exclamation icon in the title and URL fields')
      register.fieldsContainCss(nullFields)
    })
    after(() => {
      cy.clearLocalStorage()
    })
  })

  context('Submit image with enter key', () => {
    const { registerEnterKey } = data

    it('Submitting an image with valid inputs using enter key', () => {
      cy.allure().addDescriptionHtml(testDescription.registerEnterKey)

      cy.section('Given I am on the image registration page')
      register.go()

      cy.section(`When I enter "${registerEnterKey.title}" in the title field`)
      register.fillTitle(registerEnterKey.title)

      cy.section('Then I should see a check icon in the fields')
      register.fieldsContainCss(registerEnterKey)

      cy.section(`When I enter "${registerEnterKey.url}" in the URL field`)
      register.fillUrl(registerEnterKey.url)

      cy.section('Then I can hit enter to submit the form')
      register.hitEnter()

      cy.section('And the list of registered images should be updated with the new item')
      register.searchNewCard(registerEnterKey)

      cy.section('And the new item should be stored in the localStorage')
      cy.reload()
      register.validateLocalStorage(registerEnterKey)

      cy.section('Then The inputs should be cleared')
      register.validateEmpyFields()
    })
    after(() => {
      cy.clearLocalStorage()
    })
  })

  context('Update List', () => {
    const { registerSubmit } = data

    it('Submitting an image and updating the list', () => {
      cy.allure().addDescriptionHtml(testDescription.registerSubmit)

      cy.section('Given I am on the image registration page')
      register.go()

      cy.section(`When I enter "${registerSubmit.title}" in the title field`)
      register.fillTitle(registerSubmit.title)

      cy.section(`When I enter "${registerSubmit.url}" in the URL field`)
      register.fillUrl(registerSubmit.url)

      cy.section('Then I click the submit button')
      register.submitForm()

      cy.section('And the list of registered images should be updated with the new item')
      register.searchNewCard(registerSubmit)

      cy.section('And the new item should be stored in the localStorage')
      cy.reload()
      register.validateLocalStorage(registerSubmit)

      cy.section('Then The inputs should be cleared')
      register.validateEmpyFields()
    })
    after(() => {
      cy.clearLocalStorage()
    })
  })

  context('Refreshing the page after submitting', () => {
    const { submitRefresh } = data
    
    it('Refreshing the page after submitting an image clicking in the submit button', () => {
      cy.allure().addDescriptionHtml(testDescription.submitRefresh)

      cy.section('Given I am on the image registration page')
      register.go()

      cy.section('Then I have submitted an image by clicking the submit button')
      register.fillTitle(submitRefresh.title)
      register.fillUrl(submitRefresh.url)
      register.submitForm()

      cy.section('When I refresh the page')
      cy.wait(500)
      cy.reload()

      cy.section('Then I should still see the submitted image in the list of registered images')
      register.searchNewCard(submitRefresh)
    })
    after(() => {
      cy.clearLocalStorage()
    })
  })
})
