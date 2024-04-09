import register from '../support/pages/register'

describe('Image Registration', () => {
  context('Submitting an image with invalid inputs', () => {
    const nullFields = {
      title: '',
      url: '',
      validateTitle: 'Please type a title for the image.',
      validateUrl: 'Please type a valid URL',
      element: 'border-color',
      color: 'rgb(220, 53, 69)'
    }

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

  context.skip('Submitting an image with valid inputs using enter key', () => {
    const fillFields = {
      title: 'Humanoide E.T',
      url: 'https://static.vecteezy.com/ti/fotos-gratis/t1/22911203-estrangeiro-humanoide-retrato-em-sombrio-fundo-invasao-do-extraterrestre-estrangeiro-rapto-criada-com-generativo-ai-gratis-foto.jpg',
      element: 'border-color',
      color: 'rgb(25, 135, 84)'
    }

    it('Given I am on the image registration page', () => {
      register.go()
    })
    it(`When I enter "${fillFields.title}" in the title field`, () => {
      register.fillTitle(fillFields.title)
    })
    it('Then I should see a check icon in the fields', () => {
      register.validarCamposComCorEspecifica(fillFields)
    })
    it(`When I enter "${fillFields.url}" in the URL field`, () => {
      register.fillUrl(fillFields.url)
    })

    it('And the list of registered images should be updated with the new item')
    it('And the new item should be stored in the localStorage')
    it('Then The inputs should be cleared')

    after(() => {
      cy.clearLocalStorage()
    })
  })
})
