import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" >
          <p className="text-4xl font-bold inline border-b-4 border-gray-700">About</p>
        </div>
        <p className="text-xl mt-20">
          I hold a degree in software engineering, a discipline that captivates
          me, especially in the realm of crafting impactful software solutions.
          My journey through academia and various freelance projects has endowed
          me with substantial experience, particularly in the arenas of web and
          mobile application development. I harbor a deep-seated passion for
          diving into technologies like HTML, CSS, JavaScript, Tailwind CSS,
          GraphQL, C#, and React. These tools empower me to develop and refine
          web applications, continually challenging the limits of my
          capabilities in software creation. I am perpetually seeking innovative
          methods to hone my abilities and broaden my expertise in the
          technology sector. My commitment to contributing to the advancement
          and prosperity of any team I'm part of is unwavering, and I eagerly
          anticipate the chance to forge meaningful collaborations.
        </p>
      </div>
    </div>
  );
};

export default About;
