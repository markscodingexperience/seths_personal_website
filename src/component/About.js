import { motion } from "framer-motion";

const About = () => {
    return ( 
        <motion.div 
            initial={{opacity: 0, scale: 0}}
            animate={{
                opacity: 1, 
                scale: 1, 
                transition:{
                    type: "spring",
                    bounce: 0.123,
                    staggerChildren: 1,
                    delayChildren: 1
                }
            }}
            exit={{y:"-100%", opacity: 0}}
            className="mx-auto grid grid-cols-1 md:grid-cols-2 px-0 lg:mx-28">
            <div className="bg-custom-gray md:order-1 order-2">
                <div className="p-4 text-wrap">
                    <h1 className="text-4xl font-medium"><span className="underline decoration-red-700">Imaginative.</span> <span className="underline decoration-cyan-700">Adventurous.</span> <span className="underline decoration-rose-700">Fun.</span></h1>
                </div>
                <div className="p-4 text-pretty">
                    <p className="text-lg mb-4">I am an <span className="text-blue-700">artist</span> who likes to explore and have fun while doing it so.
                    Studied <span className="text-rose-700">2D Animation</span> and finished vocational <span className="text-purple-700">3D Animation</span> course. Worked at <span className="text-amber-900">Desk Thingy Stationeries (2019)</span>, <span className="text-indigo-800">PlayPen Media(2019-2021)</span>, and <span className="text-sky-700">Ken'Koi Studios (2023-2024)</span> as probationary graphic artist and <span className="text-teal-800">Jomcret Trade & Development</span> as full time graphic artist and social media handler.
                    I love exploring my creative side through adobe photoshop, autodesk sketchbook, canva, to name a few</p>

                    <p className="text-lg mb-4">I am an <span className="text-blue-700">artist</span> who likes to explore and have fun while doing it so.
                    Studied <span className="text-rose-700">2D Animation</span> and finished vocational <span className="text-purple-700">3D Animation</span> course. Worked at <span className="text-amber-900">Desk Thingy Stationeries (2019)</span>, <span className="text-indigo-800">PlayPen Media(2019-2021)</span>, and <span className="text-sky-700">Ken'Koi Studios (2023-2024)</span> as probationary graphic artist and <span className="text-teal-800">Jomcret Trade & Development</span> as full time graphic artist and social media handler.
                    I love exploring my creative side through adobe photoshop, autodesk sketchbook, canva, to name a few</p>
                    <p className="text-lg mb-4">I am an <span className="text-blue-700">artist</span> who likes to explore and have fun while doing it so.
                    Studied <span className="text-rose-700">2D Animation</span> and finished vocational <span className="text-purple-700">3D Animation</span> course. Worked at <span className="text-amber-900">Desk Thingy Stationeries (2019)</span>, <span className="text-indigo-800">PlayPen Media(2019-2021)</span>, and <span className="text-sky-700">Ken'Koi Studios (2023-2024)</span> as probationary graphic artist and <span className="text-teal-800">Jomcret Trade & Development</span> as full time graphic artist and social media handler.
                    I love exploring my creative side through adobe photoshop, autodesk sketchbook, canva, to name a few</p>

                    <p className="text-lg mb-4">I am an <span className="text-blue-700">artist</span> who likes to explore and have fun while doing it so.
                    Studied <span className="text-rose-700">2D Animation</span> and finished vocational <span className="text-purple-700">3D Animation</span> course. Worked at <span className="text-amber-900">Desk Thingy Stationeries (2019)</span>, <span className="text-indigo-800">PlayPen Media(2019-2021)</span>, and <span className="text-sky-700">Ken'Koi Studios (2023-2024)</span> as probationary graphic artist and <span className="text-teal-800">Jomcret Trade & Development</span> as full time graphic artist and social media handler.
                    I love exploring my creative side through adobe photoshop, autodesk sketchbook, canva, to name a few</p>
                </div>
            </div>
            <div className="w-full grid md:order-2 order-1 w-full lg:grid items-center">
                <img className="w-screen" src="images/seth.png" alt="profile" />
            </div>
        </motion.div>
     );
}
 
export default About;