import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getReadBooks } from "../../Utility/localStorage";

const ListedBooks = () => {
  const allListedBooks = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const storeBookListId = getReadBooks();

    if (allListedBooks.length > 0) {
      const addReadBooks = [];
      for (id of storeBookListId) {
        const singleLoopBook = allListedBooks.find(
          (singleLoopBook) => singleLoopBook.id === id
        );
        if (singleLoopBook) {
          addReadBooks.push(singleLoopBook);
        }
      }
      console.log(allListedBooks, storeBookListId, addReadBooks);
    }
  }, []);
  return (
    <div>
      <h1>THIS IS LISTED BOOKS PAGE</h1>
    </div>
  );
};

export default ListedBooks;
