import { saveWishListBooks } from "../../Utility/localStorage";

const WishList = () => {
  return (
    <div>
      <h1>Ami wish List</h1>
      {saveWishListBooks()}
    </div>
  );
};

export default WishList;
