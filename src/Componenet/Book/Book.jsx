const Book = ({ book }) => {
  const {
    id,
    book_image,
    book_name,
    author_name,
    category,
    rating,
    tags,
    total_pages,
  } = book;
  return (
    <div>
      <h1>book:{book.length}</h1>
      <img src={book_image} alt="" />
    </div>
  );
};

export default Book;
