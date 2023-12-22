import React from "react";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col my-16">
      <div className="flex">
        <div className="flex-1 flex justify-end">
          <h1 className="pr-16 font-alliance text-xl font-extrabold">
            About Me
          </h1>
        </div>
        <div className="flex-1">
          <p className="font-alliance text-xl">
            I am currently pursuing a B.S. in Computer Science <br />
            at the University of Texas at Austin! HOOKEM
          </p>

          <p className="font-alliance text-xl">
            I enjoy learning new technologies and have been exploring web
            application development. Recently, I've enjoyed learning about
            system design and how to build scalable applications. I hope to
            build my skillsets to one day become a Software Architect.
          </p>
        </div>
      </div>

      <div>
        <ul>
          <li>
            I love travelling, recently went overseas for the first time to
            Italy!
          </li>
          <li>
            I enjoy sports, epsecially Formula One and anything Texas Football.
          </li>
          <li>
            I have been learning how to cook, and started an Instagram food
            blog. @munchinwithmendo
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
