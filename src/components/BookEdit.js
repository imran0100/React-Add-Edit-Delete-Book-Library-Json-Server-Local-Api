import { useState, useContext } from "react";
import BooksContext from "../context/books";

export default function BookEdit({ book, handleSub }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editBookById(book.id, title);
    handleSub();
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleInput} />
      <button className="button is-primary">Save</button>
    </form>
  );
}
