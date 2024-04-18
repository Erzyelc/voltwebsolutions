import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="contactus"
      className="mt-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex w-full flex-col justify-center"
      >
        <h1 className="text-center font-poppins text-2xl font-semibold md:text-5xl  bg-gradient-to-r from-[#2563EB]  to-[#ECBE44] inline-block text-transparent bg-clip-text">
          Get in touch
        </h1>
        <span className="text-md mt-2 px-2 text-center font-poppins md:mt-4 md:px-5 md:text-xl">
          Contact us now and scale your business
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mx-auto px-6 py-10"
      >
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <div className="lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-center">
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="-mx-2 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-base-400 mx-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 w-72 truncate font-poppins text-base-content">
                  Philadelphia, PA
                </span>
              </p>

              <p className="-mx-2 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-base-400 mx-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 w-72 truncate font-poppins text-base-content">
                  +1 (267) 670-6953
                </span>
              </p>

              <p className="-mx-2 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-base-400 mx-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 w-72 truncate font-poppins text-base-content">
                  voltwebsolutions@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-base-400 ">Follow us</h3>

              <div className="-mx-1.5 mt-4 flex ">
                <a
                  className="btn mx-1.5 rounded-full bg-base-100"
                  href="https://www.twitter.com/volt_web"
                  aria-label="twitter"
                >
                  <svg
                    className="h-10 w-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="card mt-8 lg:mx-6 lg:w-1/2">
            <div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl">
              <h1 className="card-title">What do you want to ask</h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label htmlFor="name" className="mb-2 block text-sm">
                    Full Name
                  </label>
                  <input
                    id="name"
                    autoComplete="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="mt-6 flex-1">
                  <label htmlFor="email" className="mb-2 block text-sm">
                    Email address
                  </label>
                  <input
                    id="email"
                    autoComplete="email"
                    type="email"
                    placeholder="abcd@example.com"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="mt-6 w-full">
                  <label htmlFor="message" className="mb-2 block text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    autoComplete="message"
                    className="textarea textarea-bordered w-full"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300  ">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center py-10 font-poppins text-sm lg:text-lg">
        <h1>© {currentYear} voltwebsolutions. All rights reserved. </h1>
      </div>
    </motion.section>
  );
};

export default Contact;
