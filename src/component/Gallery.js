import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const images = [
    {
      name: "avocado shake",
      image: "images/avocadoshake.jpg",
      height: 45,
    },
    {
      name: "earth hour",
      image: "images/Earth Hour.png",
      height: 45,
    },
    {
      name: "do it",
      image: "images/Do it.png",
      height: 60,
    },
    {
      name: "frozen products",
      image: "images/frozen products.jpg",
      height: 90,
    },
    {
      name: "mango graham shake",
      image: "images/mango graham shake.jpg",
      height: 70,
    },
    {
      name: "mask",
      image: "images/mask.jpg",
      height: 80,
    },
    {
      name: "music lesson",
      image: "images/MUSIC LESSONS (BBCM).png",
      height: 96,
    },
    {
      name: "Cabin",
      image: "images/The Cabins menu.png",
      height: 30,
    },
    {
      name: "La Virginia uniform",
      image: "images/La Virginia Uniform.png",
      height: 30,
    },
    {
      name: "The Cabins Uniform",
      image: "images/The Cabins Uniform.png",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = (e) => {
    e.stopPropagation();
    setSelectedImage(null); // Closes the modal by resetting selectedImage
  };

  const handleClick = (image) => {
    console.log("Clicked:", image);
    setSelectedImage(image); // Log click to ensure event is firing
  };

  return (
    <section className="mx-auto z-10 p-4 px-1 md:px-30 lg:px-40 scroll-smooth ">
      <div className="columns-1 relative gap-4 md:columns-2 gap-5 lg:columns-3 gap-7 space-y-7 xl:columns-3 [&>img:not(:first-child)]:mt-5 ">
        {images.map((image, index) => (
          <motion.div
            className="w-full mb-3 shadow-lg shadow-indigo-500/50"
            key={index}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: "-15%" },
              visible: {
                opacity: 1,
                y: 0,
                duration: 2.5,
                delay: index * 3,
                transition: {
                  type: "spring",
                  bounce: 0.25,
                },
              },
            }}
            whileHover={{ scale: 1.04, type: "spring", bounce: 0.5 }}
            whileInView="visible"
            viewport={{ once: false }}
          >
            <img
              src={image.image}
              alt={image.name}
              className="object-cover w-full h-90 cursor-pointer "
              loading="lazy"
              onClick={() => handleClick(image.image)}
            />
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <motion.div
            className="relative"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-4xl max-h-screen object-contain"
            />
          </motion.div>
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
