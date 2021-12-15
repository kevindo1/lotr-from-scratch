import React, { useState, useEffect } from 'react';
import BooksList from '../../../src/components/Books/BooksList';
import { fetchBooks } from '../../services/books';

export default function Films() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const resp = await fetchBooks();
      setBooks(resp);
    };
    getBooks();
  }, []);
  return (
    <div>
      <h1>Books</h1>
      <BooksList books={books} setBooks={setBooks} />
    </div>
  );
}
