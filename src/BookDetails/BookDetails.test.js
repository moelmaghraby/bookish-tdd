import { fireEvent, render } from "@testing-library/react";
import React from "react";
import BookDetails from './BookDetails';

describe('BookDetails', () =>{
    it('renders title', () =>{
        const props = {
            book:{
                name:'Refactoring'
            }
        }
        const {container} = render(<BookDetails {...props} />);
        const title = container.querySelector('.book-title');
        expect(title.innerHTML).toEqual('Refactoring');
    })

    it('renders description', () =>{
        const props = {
            book:{
                name:'Refactoring',
                description:'Refactoring book description'
            }
        }
        const {container} = render(<BookDetails {...props} />);
        const description = container.querySelector('.book-description');
        expect(description.innerHTML).toEqual('Refactoring book description');
    })

    it('displays the book name when book description is not provided', () =>{
        const props = {
            book:{
                name:'Refactoring'
            }
        }
        const {container} = render(<BookDetails {...props} />);
        const description = container.querySelector('.book-description');
        expect(description.innerHTML).toEqual('Refactoring');

    })

    it('shows more link when description is longer than 300 characters', () =>{
        const props = {
            book:{
                name:'test book name',
                description: new Array(302).join('i'),
            }
        }
        const {container} = render(<BookDetails {...props} />);
        const link = container.querySelector('.more-link');
        expect(link.innerHTML).toEqual('Show more');
    })

    it('shows full description when clicking on show more link', () =>{
        const description = new Array(302).join('i');
        const props={
            book:{
                name:'test name',
                description
            }
        }
        const {container} = render(<BookDetails {...props} />);
        const link = container.querySelector('.more-link');
        fireEvent.click(link);
        const bookDescription = container.querySelector('.book-description');
        expect(bookDescription.innerHTML).toEqual(description);

    })
})