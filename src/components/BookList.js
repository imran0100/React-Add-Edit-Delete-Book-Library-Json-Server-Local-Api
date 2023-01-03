import React from "react";
import BookShow from "./BookShow";

export default function BookList({ books, onDelete, editBookById }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        editBookById={editBookById}
        onDelete={onDelete}
        key={book.id}
        book={book}
      />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
}
