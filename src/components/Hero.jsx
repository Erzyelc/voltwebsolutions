import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
      className="hero py-10 sm:py-20 flex justify-center"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="hero-content gap-10 md:gap-0 flex-col lg:flex-row-reverse"
      >
        <img
          // src="https://images.unsplash.com/photo-1552960562-daf630e9278b?q=100&w=900"
          // src="/images/logo/vwsHeader.svg"
          src="/images/logo/hero.svg"
          alt="hero image"
          className="max-w-xs rounded-box  shadow-2xl  md:max-w-md"
        />
        <div className="text-center lg:text-start">
          {/* <span className="badge badge-outline badge-lg">
            Award winning digital agency
          </span> */}
          <h1 className="pt-4 sm:pt-0 font-poppins text-3xl font-black uppercase md:text-7xl bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
            Digital marketing solutions
            <span className="text-base-content/30"> for ambitious brands</span>
          </h1>
          <p className="py-6 font-poppins lg:max-w-lg">
            Empowering Your Digital Presence with Cutting-Edge Web Solutions and
            Marketing Strategies to Drive Growth.
          </p>
          <div className="flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-poppins shadow-md"
            >
              Get Started
            </a>
            {/* <a
              href="/"
              className="btn btn-ghost md:btn-lg rounded-full font-poppins font-light"
            >
              Read success stories
            </a> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

// "At [Agency Name], we're passionate about empowering brands to thrive in the digital landscape. With a dedicated team of experienced professionals, we specialize in crafting tailored web development solutions that propel businesses forward. Our mission is simple: to help brands grow exponentially by harnessing the power of innovative digital marketing strategies.

// From sleek and responsive website designs to cutting-edge e-commerce platforms, we leverage the latest technologies and industry best practices to deliver results that exceed expectations. We understand that every brand is unique, which is why we take a personalized approach to every project we undertake.

// Our process begins with a comprehensive analysis of your brand's objectives and target audience, allowing us to develop customized strategies that drive growth and engagement. Whether you're a startup looking to establish your online presence or a seasoned enterprise seeking to optimize performance, we have the expertise and resources to elevate your brand to new heights.

// At [Agency Name], we're more than just a web development agency — we're your trusted partner in success. With a relentless focus on innovation, creativity, and measurable results, we're committed to helping you achieve your goals and stand out in today's competitive marketplace. Let's collaborate and unlock the full potential of your brand together."
