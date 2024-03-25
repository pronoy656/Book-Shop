import AllBooks from "../AllBooks/AllBooks";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllBooks></AllBooks>
      <h1 className="text-3xl">THis is home page</h1>
    </div>
  );
};

export default Home;
