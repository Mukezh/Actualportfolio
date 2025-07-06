import { motion } from "framer-motion";
import { IconCloudDemo } from "./Icon-cloud";
import TechStackButton from "./techstack-btn";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};

export default function About() {
  return (
    <div className="min-h-screen bg-black py-16">
        <motion.div 
            className="max-w-7xl mx-auto px-8 space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* About Me Section */}
            <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
            >
                <h2 className="text-3xl font-serif text-white mb-6">About Me</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                        Hi, I'm Mukesh! I'm a passionate full stack developer who brings creative and efficient solutions to life through code. With a strong foundation in front-end development and a solid understanding of back-end technologies, I thrive on building seamless, user-friendly applications that make an impact.
                    </p>
                    <p>
                        When I'm not coding, you'll find me pushing my limits—whether it's benching 100kgs (a feat only a few can achieve!), cycling through scenic routes, hiking up challenging trails, or diving into the captivating worlds of books, manga, and anime. I believe in balancing a strong mind with a strong body, and I'm always up for a new adventure or a good story.
                    </p>
                    <p>
                        My ultimate goal? To become exceptional at coding, continuously learning, growing, and mastering my craft. I live by the motto: 
                        <span className="italic text-emerald-400 font-semibold"> "As long as I live, anything is possible." </span>
                        This mindset drives me to tackle challenges head-on and turn dreams into reality.
                    </p>
                </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                variants={itemVariants}
            >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6">Skills & Technologies</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[
                                { name: "React", icon: "bg-cyan-400" },
                                { name: "Next.js", icon: "bg-gray-400" },
                                { name: "JavaScript", icon: "bg-yellow-400" },
                                { name: "TypeScript", icon: "bg-blue-500" },
                                { name: "Express.js", icon: "bg-green-400" },
                                { name: "Node.js", icon: "bg-green-600" },
                                { name: "Tailwind CSS", icon: "bg-teal-400" },
                                { name: "PostgreSQL", icon: "bg-blue-600" },
                                { name: "Prisma", icon: "bg-indigo-500" },
                                { name: "MongoDB", icon: "bg-green-500" },
                                { name: "Framer Motion", icon: "bg-purple-500" },
                                { name: "Docker", icon: "bg-blue-400" }
                            ].map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <TechStackButton name={skill.name} icon={skill.icon} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 2 }}
                        >
                            <IconCloudDemo />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
            >
                <h2 className="text-3xl font-serif text-white mb-6">Experience</h2>
                
                <div className="border-l-2 border-blue-500 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-0"></div>
                    
                    <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <h3 className="text-xl font-bold text-white">Accenture Solutions Pvt. Ltd.</h3>
                            <span className="text-sm text-gray-400">Aug 2021 - Present</span>
                        </div>
                        <p className="text-lg text-blue-400 mb-4 italic">Full Stack Developer</p>
                        
                        <ul className="space-y-3 text-gray-300">
                            <motion.li 
                                className="flex items-start space-x-3"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-blue-400 text-lg">•</span>
                                <span>Led migration of a React-based analytics dashboard to Power BI, reducing front-end maintenance costs by 30% and improving data visualization capabilities.</span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start space-x-3"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-blue-400 text-lg">•</span>
                                <span>Authored complex SQL views and stored procedures to streamline data extraction for reporting needs.</span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start space-x-3"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-blue-400 text-lg">•</span>
                                <span>Debugged and resolved 15+ UI/UX issues in multiple React applications, improving cross-browser compatibility and load times.</span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start space-x-3"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-blue-400 text-lg">•</span>
                                <span>Collaborated with backend teams to integrate .NET APIs with front-end components, ensuring seamless data flow and functionality.</span>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </div>
  );
}
