import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { getReadBooks } from "../../Utility/localStorage";
import { IoBookSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { MdEditLocationAlt } from "react-icons/md";

let ListedBooks = () => {
  let allListedBooks = useLoaderData();
  let { id } = useParams();
  const [bookAdd, setBookAdd] = useState([]);
  const [selecteddisplay, setSelectedDisplay] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const handleBookFilter = (filter) => {
    if (filter === "All") {
      setSelectedDisplay(bookAdd);
    } else if (filter === "Thriller") {
      const thriller = bookAdd.filter((booka) => booka.category === "Thriller");
      setSelectedDisplay(thriller);
    } else if (filter === "Fantasy") {
      const fantasy = bookAdd.filter((booka) => booka.category === "Fantasy");
      setSelectedDisplay(fantasy);
    } else if (filter === "Romance") {
      const romance = bookAdd.filter((booka) => booka.category === "Romance");
      setSelectedDisplay(romance);
    } else if (filter === "Historical_Fiction") {
      const historicalFiction = bookAdd.filter(
        (booka) => booka.category === "Historical_Fiction"
      );
      setSelectedDisplay(historicalFiction);
    } else if (filter === "Mystery") {
      const mystery = bookAdd.filter((booka) => booka.category === "Mystery");
      setSelectedDisplay(mystery);
    } else if (filter === "Science_Fiction") {
      const scienceFiction = bookAdd.filter(
        (booka) => booka.category === "Science_Fiction"
      );
      setSelectedDisplay(scienceFiction);
    }
  };
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
      setSelectedDisplay(addReadBooks);
      // console.log(allListedBooks, storeBookListId, addReadBooks);
    }
  }, []);
  return (
    <div className="mt-6 max-w-7xl mx-auto">
      <div className="text-center bg-slate-200 p-9 rounded-2xl">
        <p className="text-3xl font-bold ">Selected Books List</p>
        <h1 className="text-xl font-medium mt-3">
          Select Item:{" "}
          <span className="text-red-600 font-semibold"> {bookAdd.length} </span>
        </h1>
      </div>
      <div className="flex justify-center mt-8">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#23BE0A]">Sort by</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleBookFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleBookFilter("Thriller")}>
              <a>Thriller</a>
            </li>
            <li onClick={() => handleBookFilter("Fantasy")}>
              <a>Fantasy</a>
            </li>
            <li onClick={() => handleBookFilter("Romance")}>
              <a>Romance</a>
            </li>
            <li onClick={() => handleBookFilter("Historical_Fiction")}>
              <a>Historical_Fiction</a>
            </li>
            <li onClick={() => handleBookFilter("Mystery")}>
              <a>Mystery</a>
            </li>
            <li onClick={() => handleBookFilter("Science_Fiction")}>
              <a>Science_Fiction</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist</span>
        </Link>
      </div>
      <Outlet></Outlet>
      {selecteddisplay.map((book) => (
        <p key={book.id}>
          <div className="flex items-center gap-x-9 border bg-[#FFAC3326] rounded-2xl mt-6 p-6 w-[1160px]">
            <div className="bg-slate-300 w-[270px] h-[270px] py-5 px-8 rounded-2xl ">
              <img
                className="w-[230px] h-[230px] rounded-2xl"
                src={book.book_image}
                alt=""
              />
            </div>
            <div>
              <span className="text-2xl font-bold">{book.book_name}</span>
              <p className="mt-5 text-base font-medium">
                by:{book.author_name}
              </p>
              <div>
                <p className="mt-5 text-base font-medium">
                  Category:{book.category}
                </p>
              </div>
              <div className="flex items-center mt-6 gap-x-6">
                <div className="flex gap-x-4 text-[#23BE0A]">
                  {book.tags.map((tag) => (
                    <p tag={tag}>
                      <p>#{tag}</p>
                    </p>
                  ))}
                </div>
                <div className="flex gap-x-2 items-center ">
                  <MdEditLocationAlt />
                  <p>Year of Publishing:{book.year_of_publishing}</p>
                </div>
              </div>
              <div className="flex gap-x-6 mt-6">
                <div className="flex gap-x-2 items-center">
                  <IoPeopleSharp />
                  <p>Publisher:{book.publisher}</p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <IoBookSharp />
                  <p>{book.total_pages}</p>
                </div>
              </div>
              <div className="border border-b-black mt-4 w-[800px]"></div>

              <div className="flex gap-x-4 mt-8">
                <p className="bg-[#328EFF26] p-2 rounded-2xl">
                  Category:{book.category}
                </p>
                <p className="bg-[#FFAC3326] p-2 rounded-2xl">
                  Rating:{book.rating}
                </p>
                <Link to={`/bookDetails/${book.id}`}>
                  {" "}
                  <button className="bg-[#23BE0A] p-2 rounded-2xl text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </p>
      ))}
    </div>
  );
};

export default ListedBooks;
