import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className=" h-[50vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-lg lg:text-3xl">Hello ,Redux Application User</h1>
        <h3 className="mt-2 text-base lg:text-xl">
          If you want show all Books
          <Link to="/show-books" className="text-red-500 ml-2">
            Click Here
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Home;
