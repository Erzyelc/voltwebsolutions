import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
// import { Link } from "react-router-dom";

const team = [
  {
    name: "JC-Carpentry Remodeling",
    profile: "/images/projects/jcarpentrylaptop.svg",
    link: "https://jc-carpentry.vercel.app/",
  },
  {
    name: "Morrent",
    profile: "/images/projects/morrentlaptop.svg",
    link: "https://www.figma.com/file/z5cVdCFsALDqMKOeTArv6Z/Morrent?type=design&t=mS2vY5x9fG4jkYnN-6",
  },
  {
    name: "Jobit",
    profile: "/images/projects/jobitlaptop.svg",
    link: "https://www.figma.com/file/dsu8EThOMyRzZWq5FW4Wpi/Jobit?type=design&t=c0Slut0ULDOUZY0n-6",
  },
  {
    name: "DevOverflow",
    profile: "/images/projects/devoverflowlaptop.svg",
    link: "https://www.figma.com/file/k1SxfUMAHPQi2AFEFicJzB/DevOverflow?type=design&t=mS2vY5x9fG4jkYnN-6",
  },
  {
    name: "Filmpire",
    profile: "/images/projects/filmpirelaptop.svg",
    link: "https://filmpirerjc.netlify.app/",
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
        <h1 className="mt-2 text-3xl font-bold tracking-tight  md:text-5xl bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
          Our Projects
        </h1>
        <span className="text-md mt-2 px-2 text-center font-poppins md:mt-4 md:px-5 md:text-xl">
          Some of our work we are proud of
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {team.map((item, index) => (
          <div key={index} className="card w-80 bg-base-100 lg:w-96 shadow-2xl">
            <figure className="px-10 pt-20">
              <img src={item.profile} alt="Shoes" className="h-44 w-80" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-poppins">{item.name}</h2>
              <p>
                <a
                  href={item.link}
                  target="_blank"
                  className="font-poppins rounded-md btn btn-neutral px-3.5 py-2.5 text-sm font-semibold  shadow-lg hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View Project
                </a>
              </p>
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
        {/* <img src="/images/scribbles/line.svg" alt="line" className="w-20" /> */}
        <button className="btn btn-neutral md:btn-lg rounded-full font-poppins shadow-md shadlow-xl">
          <a href="/Projects">See More</a>
        </button>
      </div>
    </motion.div>
  );
};

export default Team;
