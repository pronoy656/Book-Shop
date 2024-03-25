import { Link } from "react-router-dom";

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
    <Link to={`/bookDetails/${id}`}>
      <div className=" border-2 border-red-400 w-[354px] mt-3 p-3 rounded-2xl">
        <img className="w-[326px] h-[270px]" src={book_image} alt="" />
        <h1>{book_name}</h1>
        <h1>By:{author_name}</h1>
        <h1>{category}</h1>
        <h1>{rating}</h1>
      </div>
    </Link>
  );
};

export default Book;
