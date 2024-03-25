const Banner = () => {
  return (
    <div className="flex items-center gap-x-20 mt-14 bg-slate-300 justify-center py-20">
      <div>
        <p className="text-6xl font-bold">Books to freshen </p>
        <p className="text-6xl font-bold mt-6">up your bookshelf</p>
        <div className="mt-12">
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
      <div>
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
