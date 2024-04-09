class Register {
  go() {
    cy.visit('/')
    cy.title().should('contain', 'TDD Frontend Example')
  }

  fillTitle(title) {
    title ? cy.get('#title').type(`${title}{enter}`) : cy.log('Title Null')
  }

  fillUrl(url) {
    url ? cy.get('#imageUrl').type(url, { delay: 0 }) : cy.log('Url Null')
  }

  submitForm() {
    cy.get('#btnSubmit').click()
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

  fieldsContainCss(fields) {
    cy.get('.form-control').each(($el, index, $list) => {
      cy.wrap($el).should('have.css', fields.element, fields.color)
    })

    // cy.get('.form-control').should('')
    // cy.get('#title').should('have.css', fields.css, fields.style)

    // cy.get('#imageUrl').should('have.css', fields.css, fields.style)
  }
}

export default new Register()
