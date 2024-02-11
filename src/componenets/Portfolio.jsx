import React from "react";
import madMamba from "../asset/portfolio/madMamba.png";
import disxplne from "../asset/portfolio/Disxplne.png";

const Portfolio = () => {
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Take a peek at my portfolio 🌟. More projects on the horizon, so
            keep your eyes peeled 👀!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
  {/* Item 1: madMamba */}
  <div className="shadow-md shadow-gray-600 rounded-lg">
    <a href="https://play.google.com/store/apps/details?id=com.hdesigngaming.madmambarun">
      <img
        src={madMamba}
        alt="Mad Mamba Game"
        className="rounded-md duration-200 hover:scale-105"
      />
    </a>
  </div>

  {/* Item 2: disxplne */}
  <div className="shadow-md shadow-gray-600 rounded-lg">
    <a href="https://www.disxplne.com/">
      <img
        src={disxplne}
        alt="Disxplne"
        className="rounded-md duration-200 hover:scale-105"
      />
    </a>
  </div>
</div>
          
              
            </div>
          </div>
       
  );
};

export default Portfolio;
