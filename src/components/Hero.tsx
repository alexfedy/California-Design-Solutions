import React from "react";
import {motion} from "framer-motion";

const Hero = (props)=> {
  return(
<>
  <main
    className="text-center flex justify-center items-center mb-16 bg-[url('/kitchen-resized-compressed.jpeg')] bg-cover w-100 h-100"
    style={{ height: "90vh" }}>
    <div
      className="flex flex-col items-center justify-center border h-full w-full p-8 bg-black bg-opacity-40 rounded-md">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl lg:text-4xl xl:text-5xl font-bold text-white">
        Sacramento Remodeling and Renovation Contractor
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:text-xl sm:text-lg mt-4 text-white max-w-xl">
        California Design Solutions offers kitchen, bathroom, counter, and any
        other interior remodeling and renovations.<br />
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
  )
};

export default Hero;


