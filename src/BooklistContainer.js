import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BookList from './Booklist';
import { useRemoteService } from './hooks';
const BookListContainer = () => {
    const {data,loading,error} = useRemoteService([]);
  return <BookList books={data} loading={loading} error={error} />
}
export default BookListContainer;