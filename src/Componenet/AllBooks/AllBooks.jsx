import { useEffect, useState } from "react";
import Book from "../Book/Book";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://pronoy656.github.io/assignment-9-json/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-24">
      <h1 className="text-4xl font-bold text-center">Books List</h1>
      {books.map((book) => (
        <Book key={book.id} book={book}></Book>
      ))}
    </div>
  );
};

export default AllBooks;
