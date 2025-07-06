import { motion } from "framer-motion";
import { ProjectComponent } from "./ProjectComponent"

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with React and Framer Motion featuring smooth animations and dark theme design.",
        image: "/public/Homepage.jpg",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/mukezh/portfolio",
        liveUrl: "#"
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
        image: "/public/Homepage.jpg",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
        githubUrl: "https://github.com/mukezh",
        liveUrl: "#"
    },
    {
        id: 3,
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates and team collaboration features.",
        image: "/public/Homepage.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        githubUrl: "https://github.com/mukezh",
        liveUrl: "#"
    },
    {
        id: 4,
        title: "Data Analytics Dashboard",
        description: "Interactive dashboard for data visualization and analytics with Power BI integration and custom charts.",
        image: "/public/Homepage.jpg",
        technologies: ["React", "D3.js", "Power BI", "Express.js"],
        githubUrl: "https://github.com/mukezh",
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