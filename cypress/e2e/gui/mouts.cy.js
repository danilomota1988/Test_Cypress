describe('Testes Mouts', () => {
  beforeEach(() => {
    cy.fixture('cypress.env.json').then((userData) => {
      cy.wrap(userData).as('userData');
    });
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`Test failed: ${this.currentTest.title}`, { capture: 'runner' });
    }
  });


  it('Deve realizar login com sucesso', function () {
    cy.fixture('cypress.env.json').then(({ validUser }) => {
      cy.login(validUser.user, validUser.password);
      cy.url().should('include', '/home');
      cy.get('h1').should('be.visible').contains('Bem Vindo');
      cy.screenshot();
    });
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.fixture('cypress.env.json').then(({ validUser }) => {
      cy.login(validUser.user, validUser.password);
      cy.url().should('include', '/home');
      cy.get('[data-testid="cadastrar-usuarios"]').contains('Cadastrar Usuários').click();
      cy.get('h1').contains('Cadastro de usuários')
      cy.get('[data-testid="nome"]').should('be.visible').type('Usuario Test 3');
      cy.get('[data-testid="email"]').should('be.visible').type('user03test@test.com');
      cy.get('[data-testid="password"]').should('be.visible').type('UserTest@#3');
      cy.get('[data-testid="cadastrarUsuario"]').should('be.visible').click({ force: true })
      cy.get('h1').contains('Lista dos usuários')
      cy.screenshot();
    });
  });

  it('Não deve cadastrar um novo usuário com sucesso utilizando o mesmo e-mail', () => {
    cy.fixture('cypress.env.json').then(({ validUser }) => {
      cy.login(validUser.user, validUser.password);
      cy.url().should('include', '/home');
      cy.get('[data-testid="cadastrar-usuarios"]').contains('Cadastrar Usuários').click();
      cy.get('h1').contains('Cadastro de usuários')
      cy.get('[data-testid="nome"]').should('be.visible').type('Usuario Test 3');
      cy.get('[data-testid="email"]').should('be.visible').type('user03test@test.com');
      cy.get('[data-testid="password"]').should('be.visible').type('UserTest@#3');
      cy.get('[data-testid="cadastrarUsuario"]').should('be.visible').click({ force: true })
      cy.get('.alert > :nth-child(2)').contains('Este email já está sendo usado')
      cy.screenshot();
    });
  });
});



