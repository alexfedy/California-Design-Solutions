import React from "react";
import { motion } from "framer-motion";

const Hero = (props) => {
  return (
    <>
      {/* <main
        className="text-center flex justify-center items-center mb-16 bg-[url('/home-design.jpg')] bg-fixed bg-cover bg-no-repeat w-100 h-100"
        style={{ height: "90vh" }}> */}
      <main className="relative text-center flex justify-center items-center mb-16 w-full h-[90vh]">
        <img
          src="/home-design.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex flex-col items-center justify-center border h-full w-full p-8 bg-black bg-opacity-50 rounded-md z-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tighter">
            Transform Your Home with Expert Design & Renovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:text-xl sm:text-lg mt-4 text-white max-w-2xl tracking-tight">
            Over 16 years of trusted expertise in kitchen, bathroom, and home
            remodel and renovation throughout Sacramento.
            <br />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row gap-3">
            {props.children}
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Hero;
