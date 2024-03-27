import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getWishListBooks,
  saveReadBooks,
  saveWishListBooks,
} from "../../Utility/localStorage";

const BookDetails = () => {
  const allBooksDetails = useLoaderData();
  //   Distructering with useParams
  const {
    id,
    review,
    book_image,
    book_name,
    category,
    total_pages,
    publisher,
    year_of_publishing,
    rating,
    tags,
  } = useParams();
  //   Distructering with useParams
  const convertId = parseInt(id);
  const singleBookDetail = allBooksDetails.find(
    (singleBookDetail) => singleBookDetail.id === convertId
  );
  console.log(singleBookDetail);

  const handleRead = () => {
    saveReadBooks(convertId);

    toast.success("Add to the booklist");
  };

  const handleWishlist = () => {
    saveWishListBooks(convertId);
    const storedWishListBooks = getWishListBooks();
    // toast.success("WishList added Successfully");
    if (storedWishListBooks.includes(id)) {
      toast.warn("Already added to the wishlist");
    }
  };

  return (
    <div className="flex gap-x-12 max-w-7xl mx-auto mt-6">
      <div className="w-[573px] border p-16 bg-slate-200 rounded-2xl">
        <img
          className="w-[425px] h-[564px]"
          src={singleBookDetail.book_image}
          alt=""
        />
      </div>
      <div className="w-[600px] border bg-[#FFAC3326] p-4 rounded-2xl">
        <h1 className="text-4xl font-bold">{singleBookDetail.book_name}</h1>
        <p className="text-xl font-medium mt-5">
          By:{singleBookDetail.author_name}
        </p>
        <p className="text-xl font-medium mt-5">{singleBookDetail.category}</p>
        <p className="text-base font-normal mt-10">
          <span className="text-base font-bold">Review:</span>{" "}
          {singleBookDetail.review}
        </p>
        <div className="flex gap-x-7 text-[#23BE0A] mt-14">
          {singleBookDetail.tags.map((tag) => (
            <p>#{tag}</p>
          ))}
        </div>
        <div className="flex gap-x-16 mt-12">
          <p className="text-base font-medium text-[#131313B3]">
            Number of Pages:
          </p>
          <p className="text-base font-semibold">
            {singleBookDetail.total_pages}
          </p>
        </div>
        <div className="flex gap-x-32 mt-3">
          <p className="text-base font-medium text-[#131313B3]">Publisher:</p>
          <p className="text-base font-semibold">
            {singleBookDetail.publisher}
          </p>
        </div>
        <div className="flex gap-x-16 mt-3">
          <p className="text-base font-medium text-[#131313B3]">
            Year of Publishing:
          </p>
          <p className="text-base font-semibold">
            {singleBookDetail.year_of_publishing}
          </p>
        </div>
        <div className="flex gap-x-36 mt-3">
          <p className="text-base font-medium text-[#131313B3]">Rating:</p>
          <p className="text-base font-semibold">{singleBookDetail.rating}</p>
        </div>
        <div className="flex gap-x-4 mt-8">
          <button onClick={handleRead} className="btn text-black">
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="btn bg-[#50B1C9] text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />,
    </div>
  );
};

export default BookDetails;
