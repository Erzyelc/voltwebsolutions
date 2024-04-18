import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
const testimonials = [
  {
    name: "Jeffrey",
    position: "CEO",
    quote:
      "VWS has been a game changer for our business. They have helped us build a website that is both beautiful and functional. We could not be happier with the results.",
    image: "/images/logo/jc.svg",
  },
  {
    name: "Adrian Hajdin ",
    position: "JavaScript Mastery",
    quote:
      "I have had the pleasure of working with Ryan as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. ",
    image: "/images/profile/profilepic.svg",
  },
  {
    name: "Pamela Price",
    position: "Founder of Pamtech",
    quote:
      "I had the privilege of teaching Ryan at the Mimo Coding Bootcamp. Ryans commitment to his personal and professional development was evident from the outset. He meticulously created a learning schedule that not only allowed him to effectively manage his time but also ensured he maximized his understanding of the course material. This level of organization and discipline speaks volumes about his dedication to his career in technology.",
    image: "/images/profile/pam.jpg",
  },
  {
    name: "Asako Hayase",
    position: "Team Member",
    quote:
      "orking alongside Ryan in a coding program was an excellent experience. We collaborated closely on two major projects, joined by two other teammates. Ryan proved himself to be an invaluable team member, always willing to take on any task while maintaining positive communication with everyone.  I would be delighted to have the opportunity to work with Ryan again on future coding endeavors.",
    image: "/images/profile/asako.jpeg",
  },
];
const Testimonial = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="testimonial"
      className="my-20 flex flex-col items-center justify-center md:my-32"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-center font-poppins text-2xl font-semibold md:text-5xl  bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
          Testimonials
        </h1>
        <span className="text-md mt-2 px-2 font-poppins md:mt-4 md:px-5 md:text-xl">
          What Our Clients Says About Us
        </span>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="py-10">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="container mx-4 h-96 rounded-xl max-sm:max-w-sm"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide className="h-full bg-base-100" key={index}>
              <div className="flex h-full items-center justify-center">
                <figure className="mx-10 mt-10">
                  <blockquote className="text-center font-poppins font-semibold leading-8 text-base-content lg:text-2xl">
                    <p>“{item.quote}”</p>
                  </blockquote>
                  <div className="mt-10 flex flex-col items-center">
                    <img
                      className="mx-auto h-14 w-14 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="mt-4 flex justify-center gap-2 lg:tracking-widest">
                      <div>{item.name}</div>
                      <div className="text-base-content/50">
                        {item.position}
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
