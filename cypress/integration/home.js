describe('Home', () => {
    it('should have the navbar', () => {
        const url = 'http://localhost:3000';
        cy.visit(url);
        cy.get('.navigation').should('contain', 'Trimmr');
    });
});
