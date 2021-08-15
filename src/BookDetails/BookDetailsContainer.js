import React from 'react';
import BookDetails from './BookDetails';
import { useRemoteService } from '../hooks';
const BookDetailsContainer = ({ match }) => {
    const { data, loading, error } = useRemoteService([], `http://localhost:8080/books/${match.params.id}`);
    return <BookDetails book={data}></BookDetails>
}

export default BookDetailsContainer;