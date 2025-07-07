import { motion } from "framer-motion";
import { ProjectComponent } from "./ProjectComponent"

const projectsData = [
    
    {
        id: 1,
        title: "NBA 96'",
        description: "A RAG chatbot which provides information about the NBA 96' season, built with Next.js, TypeScript, and OpenAI API.",
        image: "/public/snip.png",
        technologies: ["Reactjs", "TypeScript", "OpenAI API", "Tailwind CSS"],
        githubUrl: "https://github.com/mukezh/nba96",
        liveUrl: "#"
    },
    {
        id: 2,
        title: "Pensieve",
        description: "A real-time chat application built with React, Node.js, and Socket.io, allowing users to communicate in real-time with a modern UI.",
        image: "/public/snip.png",
        technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
        githubUrl: "https://github.com/mukezh/chat-app",
        liveUrl: "#"
    },
    {
        id: 3, 
        title: "Remember",
        description: "A personal note-taking application that allows users to create, edit, and delete notes with a clean and intuitive interface.",
        image: "/public/snip.png",
        technologies: ["React","Tailwind CSS", "MongoDB", "Express.js", "Node.js"],
        githubUrl: "",
        liveUrl: "#"
    }
];

export const Projects = () => {
    return (
        <div className="min-h-screen bg-black py-16">
            <motion.div 
                className="text-4xl font-serif text-white text-center pb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Featured Projects
            </motion.div>
            <div className="flex px-8 lg:px-24 justify-center flex-wrap gap-8">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ProjectComponent 
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            githubUrl={project.githubUrl}
                            liveUrl={project.liveUrl}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}