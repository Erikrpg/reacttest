import { useSelector, useDispatch } from "react-redux";
import BookList from "../components/BookList";
import "./BooksPage.css";

import { addBook, removeBook, clearBooks } from "../application/booksSlice";

export default function BooksPage() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  function handleAddBook() {
    const newBook = {
      id: Date.now(),
      title: "ვეფხისტყაოსანი",
      author: "შოთა რუსთაველი",
    };

    dispatch(addBook(newBook));
  }

  function handleRemoveBook(id) {
    dispatch(removeBook(id));
  }

  function handleClearBooks() {
    dispatch(clearBooks());
  }

  return (
    <div className="books-page">
      <h1>წიგნების სია</h1>

      <button onClick={handleAddBook}>წიგნის დამატება</button>

      <button onClick={handleClearBooks}>სიის გასუფთავება</button>

      <BookList books={books} onRemove={handleRemoveBook} />
    </div>
  );
}
