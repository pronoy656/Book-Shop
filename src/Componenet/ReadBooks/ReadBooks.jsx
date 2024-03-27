import { useLoaderData } from "react-router-dom";
import { saveReadBooks } from "../../Utility/localStorage";

const ReadBooks = () => {
  const readBooks = useLoaderData();
  return (
    <div>
      <h1>{readBooks.book_name}</h1>
      {/* {saveReadBooks()} */}
    </div>
  );
};

export default ReadBooks;
