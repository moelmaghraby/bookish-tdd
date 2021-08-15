
import axios  from 'axios';
describe('Bookish application', () =>{

    it('Visits the bookish',() =>{
        cy.visit('http://localhost:3000/');
        cy.get('h2[data-test="heading"]').contains('Bookish');
    })

    it('Shows a book list', () =>{
        cy.visit('http://localhost:3000/');
        cy.get('div[data-test="book-list"]').should('exist');
        cy.get('div.book-item').should('have.length',4);
        cy.get('div.book-item').should(books =>{
            expect(books).to.have.length(4);
            const titles = [...books].map(item => item.querySelector('h2').innerText)
            expect(titles).to.deep.equal(['Refactoring','Domain-driven design','Building Microservices','Acceptance Test Driven Development with React']);
        })
    })

    it('Goes to the detail page', () =>{
      cy.visit('http://localhost:3000/');
      cy.get('div.book-item').contains('View Details').eq(0).click();
      cy.url().should('include','/books/1')
      cy.get('.book-title').contains('Refactoring');
    })
})