import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
// import { Link } from "react-router-dom";

const team = [
  {
    name: "JC-Carpentry Remodeling",
    profile: "/images/projects/jcarpentrylaptop.svg",
  },
  {
    name: "Morrent",
    profile: "/images/projects/morrentlaptop.svg",
  },
  {
    name: "Jobit",
    profile: "/images/projects/jobitlaptop.svg",
  },
  {
    name: "HipNode",
    profile: "/images/projects/hipnodelaptop.svg",
    // position: "App Developer",
  },
  {
    name: "Filmpire",
    profile: "/images/projects/filmpirelaptop.svg",
  },

  {
    name: "Virtue",
    profile: "/images/projects/virtuelaptop.svg",
  },
];

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="team"
      className="flex flex-col items-center justify-center"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-center font-poppins text-2xl font-semibold md:text-5xl">
          Our Projects
        </h1>
        <span className="text-md mt-4 px-2 text-center font-poppins md:mt-4 md:px-5 md:text-xl">
          Some of our work we are proud of
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {team.map((item, index) => (
          <div key={index} className="card w-80 bg-base-100 shadow-sm lg:w-96">
            <figure className="lpx-10 pt-10">
              <img src={item.profile} alt="Shoes" className="h-44 w-50 " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-poppins">{item.name}</h2>
              <h2 className="font-poppins">{item.position}</h2>
            </div>
          </div>
        ))}
        {/* <div className=" w-full flex items-center justify-center my-10">
          <button className="btn btn-neutral md:btn-lg rounded-full font-poppins shadow-md">
            <a href="/Projects">See More</a>
          </button>
        </div> */}
      </motion.div>
      <div className=" w-full flex items-center justify-center my-10">
        <button className="btn btn-neutral md:btn-lg rounded-full font-poppins shadow-md">
          <a href="/Projects">See More</a>
        </button>
      </div>
    </motion.div>
  );
};

export default Team;
