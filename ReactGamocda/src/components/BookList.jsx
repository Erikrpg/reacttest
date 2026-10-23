export default function BookList({ books, onRemove }) {
  if (books.length <= 0) {
    return (
      <>
        <h2>წიგნები არ მოიძებნა</h2>
      </>
    );
  }

  return (
    <>
      <h2>წიგნების სია</h2>

      {books.map((book) => {
        return (
          <>
            <div key={book.id}>
              <p>სახელი: {book.title}</p>
              <p>ავტორი: {book.author}</p>
              <button onClick={() => onRemove(book.id)}>წაშლა</button>
            </div>
          </>
        );
      })}
    </>
  );
}
