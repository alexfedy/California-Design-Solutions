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
    name: "Major Renovation",
    title: "",
    img: {
      src: "/unsplash/o.jpg",
      alt: "Image of interior major renovation",
    },
    publishDate: "2022-11-07 15:39",
    to: "/projects/other",
  },
  {
    name: "Kitchen Remodel",
    title: "",
    img: { src: "/unsplash/k.jpg", alt: "Image of kitchen remodel" },
    publishDate: "2022-11-09 15:39",
    to: "/projects/kitchens",
  },
];

  return(
<>
<div
  className="mx-auto max-w-5xl mt-16 items-center justify-center">
    <div className="mx-5 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="mb-4 font-bold text-3xl text-gray-800">Experts in Additions & Remodeling</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          <ul>
            <li><span className="text-base font-bold text-gray-800">Additions:</span> <br/>Expand your living space with expertly crafted additions that seamlessly blend with your home's existing structure.</li>
            <li><span className="text-base font-bold text-gray-800">Kitchen Remodels:</span>  <br/>Create a space tailored to your style and needs, with innovative designs and functional layouts.</li>
            <li><span className="text-base font-bold text-gray-800">Bathroom Renovations:</span>  <br/>Transform your bathrooms into luxurious retreats with our attention to detail and premium finishes.</li>
            <li><span className="text-base font-bold text-gray-800">Outdoor Living:</span> <br/> Enhance your outdoor spaces with stunning patios, decks, landscaping, and more.</li>
            <li><span className="text-base font-bold text-gray-800">General Home Improvements:</span>  <br/>From flooring to roofing, painting to electrical work, our skilled team covers all aspects of home improvement.</li>
          </ul>
        </p>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <img src="/unsplash/o.jpg"/>
      </div>
    </div>
  <div className="my-16 flex w-full items-center justify-center">
  <a className="text-lg leading-relaxed text-slate-500 border w-fit px-8 bg-slate-100 rounded"
    href="/projects">View All Projects</a></div>
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
              className="mt-4 text-center absolute top-1/2 left-1/2 z-10 font-bold"
              style={{transform: 'translate(-50%,-200%)'}}>
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

