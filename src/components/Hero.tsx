import React from "react";
import { Picture } from "@astrojs/image/components";
import heroImage from "assets/hero.jpg";
import Link from "@components/ui/link.astro";
import { Icon } from "astro-icon";
import { motion } from "framer-motion";


const Hero = (props) => {
  return(
  <main className="text-center flex justify-center items-center bg-[url('/kitchencollection.jpg')] bg-cover mb-16"
    style={{height: '90vh'}}>
    <div
      className="flex flex-col items-center justify-center border h-full w-full p-8 bg-black bg-opacity-40 rounded-md">
      <motion.h1 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }} className="text-4xl lg:text-4xl xl:text-5xl font-bold text-white">
        Sacramento Remodeling and Renovation Contractor
      </motion.h1>
      <motion.p 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }} className="md:text-xl sm:text-lg mt-4 text-white max-w-xl">
        California Design Solutions offers kitchen, bathroom, counter, and any
        other interior remodeling and renovations.<br />
      </motion.p>
      <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.9, duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }} className="mt-6 flex flex-col sm:flex-row gap-3">
        {props.children}
      </motion.div>
    </div>
  </main>
  )
};

export default Hero;