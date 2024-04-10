class Register {
  go() {
    cy.visit('/')
    cy.title().should('contain', 'TDD Frontend Example')
  }

  fillTitle(title) {
    title 
        ? cy.get('#title').type(`${title}{enter}`) 
        : cy.log('Title Null')
  }

  fillUrl(url) {
    url
      ? cy.get('#imageUrl').type(url, { delay: 0 })
      : cy.log('Url Null')
  }

  hitEnter() {
    cy.focused().wait(500).type('{enter}')
  }

  submitForm() {
    cy.get('#btnSubmit').click()
  }

  validateEmpyFields() {
    cy.get('#title').should('have.value', '')
    cy.get('#imageUrl').should('have.value', '')
  }

  validateError(text) {
    cy.get('.invalid-feedback')
      .should('be.visible')
      .then(($el) => {
        if (typeof text === 'string') {
          // Se a validação é uma string
          expect($el.text()).to.contain(text)
        } else if (Array.isArray(text)) {
          // Se a validação é um array
          text.forEach((expectedMessage, index) => {
            expect($el.eq(index).text()).to.contain(expectedMessage)
          })
        } else {
          // Se a validação não é nem string nem array
          cy.log(
            'Mensagem de validação não é uma string ou array. Verifique os dados de teste.'
          )
        }
      })
  }

  fieldsContainCss(payload) {
    if (Array.isArray(payload.fields)) {
      cy.get('.form-control').each(($el, index, $list) => {
        cy.wrap($el).should('have.css', payload.element, payload.color)
      })
    } else if (payload.fields === 'url') {
      cy.get('#imageUrl').should('have.css', payload.element, payload.color)
    } else {
      cy.get('#title').should('have.css', payload.element, payload.color)
    }
  }

  searchNewCard(payload) {
    cy.get('.card-img-top.card-img')
      .last()
      .should('have.attr', 'src', payload.url)
      .parent()
      .find('h4')
      .should('contain.text', payload.title)
  }

  validateLocalStorage(payload) {
    cy.reload()
    cy.getAllLocalStorage().then((ls) => {
      const currentLs = ls[window.location.origin]
      const elements = JSON.parse(Object.values(currentLs))

      expect(elements[0].title).to.eql(payload.title)
      expect(elements[0].imageUrl).to.eql(payload.url)
    })
  }
}

export default new Register()
