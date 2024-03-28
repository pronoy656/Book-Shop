import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="md:flex items-center gap-x-20 mt-14 bg-slate-300 justify-center py-7 md:py-20 max-w-7xl mx-auto">
      <div className="ml-10">
        <p className="text-6xl font-bold">Books to freshen </p>
        <p className="text-6xl font-bold mt-6">up your bookshelf</p>
        <div className="mt-12">
          <Link to={"/listedBooks"}>
            <button className="btn bg-[#23BE0A] text-white">
              View The List
            </button>
          </Link>
        </div>
      </div>
      <div className="ml-6 mt-5 md:mt-0">
        <img
          className="w-[388px] h-[394px]"
          src="https://i.ibb.co/0jFW00L/19021605.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
