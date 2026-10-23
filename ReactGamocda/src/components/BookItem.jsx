export default function BookItem({ book, onRemove }) {
  return (
    <div className="book-item">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>ავტორი: {book.author}</p>
        <small>ID: {book.id}</small>
      </div>

      <button className="delete-btn" onClick={() => onRemove(book.id)}>
        წაშლა
      </button>
    </div>
  );
}
