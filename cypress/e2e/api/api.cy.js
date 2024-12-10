describe('Testes Mouts', () => {
    beforeEach(() => {
        cy.fixture('cypress.env.json').then((userData) => {
            cy.wrap(userData).as('userData');
        });
    });

    afterEach(function () {
        // Verifica se o teste falhou
        if (this.currentTest.state === 'failed') {
            cy.screenshot(`Test failed: ${this.currentTest.title}`, { capture: 'runner' });
        }
    });


    it('Login não autorizado', function () {
        cy.fixture('cypress.env.json').then(({ invalidUser }) => {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',  
                body: {
                    email: invalidUser.invalid,
                    password: invalidUser.invalidpassword
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.have.property('message', 'Email e/ou senha inválidos'); 
            });
        });
    });


    it('Login autorizado', function () {
        cy.fixture('cypress.env.json').then(({ validUser }) => {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',  
                body: {
                    email: validUser.user,  
                    password: validUser.password
                },
                failOnStatusCode: false  
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });


    it('Buscar produto', function () {
        cy.fixture('cypress.env.json').then(({ validUser, validProduct }) => {
            // Realiza o login para obter o token
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',
                body: {
                    email: validUser.user,
                    password: validUser.password
                }
            }).then((loginResponse) => {
                expect(loginResponse.status).to.eq(200);
                const token = loginResponse.body.authorization;
                cy.request({
                    method: 'GET',
                    url: `https://serverest.dev/produtos/${validProduct._id}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((getProductResponse) => {
                    expect(getProductResponse.status).to.eq(200);
                });
            });
        });
    });
});



