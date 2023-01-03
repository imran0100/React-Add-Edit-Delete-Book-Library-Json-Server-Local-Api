import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

export default function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBooksById } = useContext(BooksContext);
  const handleDeleteClick = () => {
    deleteBooksById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  //need to delete this
  const handleSub = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit handleSub={handleSub} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
