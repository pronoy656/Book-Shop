import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

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
      <div className=" border-2  bg-[#FFAC3326] w-[384px] mt-3 p-5 rounded-2xl">
        <img className="w-[326px] h-[270px]" src={book_image} alt="" />
        <div className="flex gap-x-9 text-[#23BE0A] mt-6">
          {tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
        <h1 className="text-2xl font-bold mt-5">{book_name}</h1>
        <h1 className="text-base font-medium mt-4">By:{author_name}</h1>
        <div className="flex justify-between text-base font-medium mt-4">
          <h1>{category}</h1>
          <div className="flex items-center">
            <CiStar className="text-2xl font-normal" />
            <h1>{rating}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
