import { useState } from "react";

export default function BookEdit({ book, handleSub }) {
  const [title, setTitle] = useState(book.title, book);
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    handleSub(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleInput} />
      <button className="button is-primary">Save</button>
    </form>
  );
}
