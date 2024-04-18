import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const services = [
  {
    name: "Web development + Design",
    bg: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Shopify Development.",
    bg: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "SEO + Branding",
    bg: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Framer and Webflow Development",
    bg: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Logo Design",
    bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Consulting",
    bg: "https://images.unsplash.com/photo-1552960504-34e1e1be3f53?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="services"
      className="mt-10 flex flex-col items-center justify-center md:mt-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-center font-poppins text-2xl font-semibold md:text-5xl  bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
          Our Services
        </h1>
        <span className="text-md mt-2 px-2 text-center font-poppins md:mt-4 md:px-5 md:text-xl">
          We offer a variety of services to help you grow your business
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mt-10 grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((item, index) => (
          <div
            key={index}
            className="card image-full bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1"
          >
            <figure className="object-cover">
              <img src={item.bg} alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title mt-auto font-poppins text-4xl font-semibold contrast-200">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
