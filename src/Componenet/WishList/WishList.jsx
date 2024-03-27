import { saveWishListBooks } from "../../Utility/localStorage";

const WishList = () => {
  return <div>{saveWishListBooks()}</div>;
};

export default WishList;
