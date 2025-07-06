import { motion } from "framer-motion";
import { Github } from "../assets/icons/github";
import { ExternalLink } from "lucide-react";
import TechStackButton from "./techstack-btn";

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
}

export const ProjectComponent = ({ 
    title, 
    description, 
    image, 
    technologies, 
    githubUrl, 
    liveUrl 
}: ProjectProps) => {
    return (
        <motion.div 
            className="p-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="h-fit w-96 border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-white rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl">
                        <motion.img 
                            src={image} 
                            alt={title}
                            className="w-full h-48 object-cover rounded-xl" 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                        <div className="flex space-x-2">
                            <motion.a 
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                            >
                                <Github />
                            </motion.a>
                            {liveUrl && liveUrl !== "#" && (
                                <motion.a 
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-full bg-gray-800 hover:bg-green-600 transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </motion.a>
                            )}
                        </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                        {technologies.map((tech, index) => (
                            <TechStackButton key={index} name={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};