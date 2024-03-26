import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getReadBooks } from "../../Utility/localStorage";

let ListedBooks = () => {
  let allListedBooks = useLoaderData();
  let { id } = useParams();
  const [bookAdd, setBookAdd] = useState([]);
  useEffect(() => {
    let storeBookListId = getReadBooks();

    if (allListedBooks.length > 0) {
      let addReadBooks = [];
      for (id of storeBookListId) {
        let singleLoopBook = allListedBooks.find(
          (singleLoopBook) => singleLoopBook.id === id
        );
        if (singleLoopBook) {
          addReadBooks.push(singleLoopBook);
        }
      }
      setBookAdd(addReadBooks);
      // console.log(allListedBooks, storeBookListId, addReadBooks);
    }
  }, []);
  return (
    <div>
      <h1>THIS IS LISTED BOOKS PAGE{bookAdd.length}</h1>
      {bookAdd.map((book) => (
        <p key={book.id}>
          <div className="flex gap-x-6 border-2 border-red-300 mt-6 p-6 w-[1160px]">
            <div>
              <img
                className="w-[230px] h-[230px]"
                src={book.book_image}
                alt=""
              />
            </div>
            <div>
              <span>{book.book_name}</span>
              <p>{book.author_name}</p>
              <p>{book.publisher}</p>
              <p>{book.total_pages}</p>
              <p>{book.category}</p>
              <p>{book.rating}</p>
              <button>View Details</button>
            </div>
          </div>
        </p>
      ))}
    </div>
  );
};

export default ListedBooks;
