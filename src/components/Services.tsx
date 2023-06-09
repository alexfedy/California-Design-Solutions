import React from "react";
import { motion } from "framer-motion";




const Services = () => {
  
const servicesCollection = [
  {
    name: "Bathroom Remodel",
    title: "",
    img: {
      src: "/unsplash/b.jpg",
      alt: "Image of bathroom remodel",
    },
    publishDate: "2022-11-08 15:39",
    to: "/projects/bathrooms",
  },
  {
    name: "Major Renovation - Multiple Rooms",
    title: "",
    img: {
      src: "/unsplash/o.jpg",
      alt: "Image of interior major renovation",
    },
    publishDate: "2022-11-07 15:39",
    to: "/projects/kitchens",
  },
  {
    name: "Kitchen Remodel",
    title: "",
    img: { src: "/unsplash/k.jpg", alt: "Image of kitchen remodel" },
    publishDate: "2022-11-09 15:39",
    to: "/projects/other",
  },
];

  return(
<>
<div
  className="flex flex-col gap-3 mx-auto max-w-4xl mt-16 text-center items-center">
  <h2 className="font-bold text-3xl text-gray-800">What services we offer</h2>
  <p className="text-lg leading-relaxed text-slate-500">
    We're a multi-cultural team from around the world! We come from diverse
    backgrounds, bringing different personalities, experiences and skills to the
    job. This is what makes our team so special.
  </p>
  <a className="text-lg leading-relaxed text-slate-500 border w-fit px-8 bg-slate-100 rounded"
    href="/projects">View All Projects</a>
</div>
<div className="grid md:grid-cols-3 gap-1 mx-auto mt-12 px-5">
  {
    servicesCollection.map((item, i) => (
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: i * 0.3, duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
      className="group relative overflow-hidden">
        <div className="transition group-hover:scale-105 group-hover:shadow-xl">
          <a href={item.to}>
            <div
              className="mt-4 text-center absolute top-1/2 left-1/2 z-10"
              style={{transform: 'translate(-50%,-50%)'}}>
              <h2 className="text-xl text-gray-800 text-bold">{item.name}</h2>
            </div>
            <div className="w-full aspect-square">
              <img
                src={item.img.src}
                alt={item.img.alt}
                className="rounded w-full h-full object-cover overflow-hidden"
              />
            </div>
          </a>
        </div>
      </motion.div>
    ))
  }
</div>
</>
  )
};

export default Services;

