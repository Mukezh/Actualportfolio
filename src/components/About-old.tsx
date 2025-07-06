import { motion } from "framer-motion";
import { IconCloudDemo } from "./Icon-cloud";
import TechStackButton from "./techstack-btn";


export default function About() {
  return (
    <div className="size-full bg-black py-8">
        <div className="p-8 mx-24 h-[40vh] border-1 rounded-2xl flex flex-col justify-center text-white text-lg text-wrap font-bold">
            
            <motion.span
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="font-thin"
            >
                <div className="flex pb-4  text-2xl font-serif ">
                About Me
                </div>
                Hi, I’m Mukesh! I’m a passionate full stack developer, I bring creative and efficient solutions to life through code. With a strong foundation in front-end development and a solid understanding of back-end technologies, I thrive on building seamless, user-friendly applications that make an impact.
                When I’m not coding, you’ll find me pushing my limits—whether it’s benching 100kgs (a feat only a few can achieve!), cycling through scenic routes, hiking up challenging trails, or diving into the captivating worlds of books, manga, and anime. I believe in balancing a strong mind with a strong body, and I’m always up for a new adventure or a good story.
                My ultimate goal? To become exceptional at coding continuously learning, growing, and mastering my craft. 
                I live by the motto: "
                <span className="italic text-emerald-400"> 
                As long as I live, anything is possible. 
                </span>
                " This mindset drives me to tackle challenges head-on and turn dreams into reality.
            </motion.span>
        </div>

        <div className="my-8 p-8 mx-24 h-[40vh] border-1 rounded-2xl flex justify-between text-white text-lg text-wrap ">
            <div>
                <div className="pb-4 text-2xl font-serif">
                    Skills
                </div>
                <div className="flex gap-6 flex-wrap ">
                    <TechStackButton name="React" icon="bg-cyan-400" />
                    <TechStackButton name="Next.js" icon="bg-green-400" />
                    <TechStackButton name="JavaScript" icon="bg-yellow-300" />
                    <TechStackButton name="Typescript" icon="bg-rose-400" />
                    <TechStackButton name="Express.js" icon="bg-indigo-500" />
                    <TechStackButton name="Node.js" icon="bg-orange-400" />
                    <TechStackButton name="Tailwind CSS" icon="bg-lime-200" />
                    <TechStackButton name="PostgreSQL" icon="bg-teal-500" />
                    <TechStackButton name="Prisma" icon="bg-pink-500" />
                    <TechStackButton name="MongoDB" icon="bg-green-500" />
                    <TechStackButton name="Framer Motion" icon="bg-fuchsia-400" />
                    <TechStackButton name="shadcn/ui" icon="bg-stone-300" />
                    <TechStackButton name="Git" icon="bg-lime-200" />
                    <TechStackButton name="Docker" icon="bg-blue-500" />
                    <TechStackButton name="PowerBi" icon="bg-pink-500" />
                  </div>
            </div>
            <div className="flex flex-col justify-center">
                <IconCloudDemo />
            </div>
        </div>
        <div className="p-8 mx-24 h-[40vh] border-1 rounded-2xl flex flex-col justify-center text-white text-lg text-wrap font-bold">
            
            <motion.span
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="font-thin"
            >
                <div className="flex pb-4  text-2xl font-serif ">
                Experience
                </div>
                <div className="flex pb-2 justify-between text-2xl font-serif ">
                <div>
                Accenture Solutions Pvt. Ltd.
                </div>
                <div>
                    Aug,2021 - Present
                </div>
                </div>
                <div className="flex pb-4  text-lg italic font-serif ">
                Full Stack Developer
                </div>
                <ul className="list-disc px-4">
                    <li>
                        Led migration of a React-based analytics dashboard to Power BI, reducing front-end maintenance costs by 30% and improving data visualization capabilities.
                    </li>
                    <li>    
                        Authored complex SQL views and stored procedures to streamline data extraction for reporting needs.
                    </li>
                    <li>
                        Debugged and resolved 15+ UI/UX issues in multiple React applications, improving cross-browser compatibility and load times.
                    </li>
                    <li>
                        Collaborated with backend teams to integrate .NET APIs with front-end components, ensuring seamless data flow and functionality.
                    </li>
                    <li>
                        Optimized SQL queries and database structures to improve data retrieval efficiency for front-end applications.
                    </li>
                    <li>
                        Implemented responsive design fixes and feature enhancements based on stakeholder feedback, improving user satisfaction.
                    </li>
                </ul>
            </motion.span>
        </div>
    </div>
  );
}
