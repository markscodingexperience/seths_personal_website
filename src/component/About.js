import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ y: 50, scale: 1.5 }}
      animate={{
        y: 0,
        scale: 1,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.25,
        },
      }}
      exit={{ y: "-100%", opacity: 0 }}
      className="mx-auto grid grid-cols-1 md:grid-cols-2 px-0 lg:mx-28"
    >
      <div className="bg-custom-gray md:order-1 order-2 lg:p-7">
        <div className="p-3 text-wrap flex justify-center space-x-3 md:p-4 pt-10 lg:mt-10">
          <div className="">
            <h1 className="text-9xl font-bold font-serif leading-none md:text-6xl lg:text-8xl">
              “
            </h1>
          </div>
          <div className=" leading-relaxed">
            <h1 className="text-3xl font-extrabold font-baskerville pb-2 md:text-3xl lg:text-4xl ">
              Imaginative.
            </h1>
            <h1 className="text-3xl font-extrabold font-baskerville pb-2 md:text-3xl lg:text-4xl ">
              Adventurous.
            </h1>
            <h1 className="text-3xl font-extrabold font-baskerville md:text-3xl lg:text-4xl ">
              Fun.
            </h1>
          </div>
        </div>
        <div className="p-4 text-pretty">
          <p className="text-lg mb-4">
            I am an <span className="text-blue-700">artist</span> who likes to
            explore and have fun while doing it so. Studied{" "}
            <span className="text-rose-700">2D Animation</span> and finished
            vocational <span className="text-purple-700">3D Animation</span>{" "}
            course. Worked at{" "}
            <span className="text-amber-900">
              Desk Thingy Stationeries (2019)
            </span>
            , <span className="text-indigo-800">PlayPen Media(2019-2021)</span>,
            and{" "}
            <span className="text-sky-700">Ken'Koi Studios (2023-2024)</span> as
            probationary graphic artist and{" "}
            <span className="text-teal-800">Jomcret Trade & Development</span>{" "}
            as full time graphic artist and social media handler. I love
            exploring my creative side through adobe photoshop, autodesk
            sketchbook, canva, to name a few
          </p>

          <p className="text-lg mb-4">
            Growing up, I found many hobbies including{" "}
            <span className="text-blue-700">drawing sketches</span> and music. I
            also love taking <span className="text-rose-700">photograph</span>{" "}
            of scenery while traveling and writing{" "}
            <span className="text-purple-700">poems </span> which I find useful
            in making catchy phrases or when I need some scenic backgrounds for
            a <span className="text-teal-800">poster art</span>. Luckily, there
            are plenty of tools that I can use as venue to express my creative
            side and share it to the world.
          </p>
        </div>
      </div>
      <div className="w-full grid md:order-2 order-1 w-full lg:grid items-center">
        <img className="w-screen" src="images/seth.png" alt="profile" />
      </div>
    </motion.div>
  );
};

export default About;
