import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="justify-center items-center">
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">
          Sorry This is error page
        </h1>
      </div>
      <div className="flex justify-center mt-6">
        <Link to={"/"}>
          <button className="btn bg-red-600 text-white">Go back Home</button>
        </Link>
      </div>
      <div className="mt-6 flex justify-center">
        <img
          className="w-[430px] h-[430px]"
          src="https://i.ibb.co/2sHBGHB/1-h-Fww-QAW45673-VGKr-MPE2q-Q.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
