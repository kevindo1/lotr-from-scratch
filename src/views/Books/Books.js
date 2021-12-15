import React from 'react';
import BooksList from '../../../src/components/Books/BooksList';

export default function BookList({ books }) {
  return (
    <section className="books">
      {books.map((book) => (
        <div className="book" key={book[0]}>
          <a href={book.wikiUrl}>{book[0]}</a>
          <p>{book[1]}</p>
          <p>{book[2]}</p>
        </div>
      ))}
    </section>
  );
}
