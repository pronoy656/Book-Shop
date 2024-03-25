import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBooks } from "../../Utility/localStorage";

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
    saveReadBooks(id);
    toast.success("WishList added Successfully");
  };

  return (
    <div className="flex gap-x-12">
      <div className="w-[573px] border-2 border-purple-500 p-16">
        <img
          className="w-[425px] h-[564px]"
          src={singleBookDetail.book_image}
          alt=""
        />
      </div>
      <div className="w-[600px] border-2 border-green-500">
        <h1>{singleBookDetail.book_name}</h1>
        <p>{singleBookDetail.author_name}</p>
        <p>{singleBookDetail.category}</p>
        <p>{singleBookDetail.review}</p>
        <p>{singleBookDetail.total_pages}</p>
        <p>{singleBookDetail.publisher}</p>
        <p>{singleBookDetail.year_of_publishing}</p>
        <p>{singleBookDetail.rating}</p>
        <div className="flex gap-x-4">
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
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
