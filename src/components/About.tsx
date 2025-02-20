import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="h-screen bg-black py-8">
        <div className="p-8 mx-24  bg-blue-400 rounded-2xl flex flex-col justify-center text-white text-lg text-wrap font-bold">
            
            <motion.span
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="font-thin"
            >
                <div className="flex py-2 text-2xl font-serif ">
                About Me
            </div>
                Hi, I’m Mukesh! I’m a passionate React Developer currently working at Accenture, where I bring creative and efficient solutions to life through code. With a strong foundation in front-end development and a solid understanding of back-end technologies, I thrive on building seamless, user-friendly applications that make an impact.

When I’m not coding, you’ll find me pushing my limits—whether it’s benching 100kgs (a feat only a few can achieve!), cycling through scenic routes, hiking up challenging trails, or diving into the captivating worlds of books, manga, and anime. I believe in balancing a strong mind with a strong body, and I’m always up for a new adventure or a good story.

My ultimate goal? To become exceptional at coding continuously learning, growing, and mastering my craft. 
I live by the motto: 
<span className="italic text-red-900"> 
"As long as I live, anything is possible." 
</span>
This mindset drives me to tackle challenges head-on and turn dreams into reality.
            </motion.span>
        </div>

        <div>
            
        </div>
    </div>
  );
}
