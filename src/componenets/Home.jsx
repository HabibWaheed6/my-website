import React from "react";
import heroimage from "../asset/heroimage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a software Engineer
          </h2>
          <p className="text-gray-600 py-4 max-w-md">
            Hello👋! My name is Habib Waheed.I am a software engineer who loves to develop softwares and web applications
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-300 to-green-600">
              View Portfolio
              <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroimage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
