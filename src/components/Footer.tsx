import { motion } from "framer-motion"
import { Email } from "../assets/icons/email"
import { Github } from "../assets/icons/github"
import { LinkedIn } from "../assets/icons/linkedIn"

export const Footer = () => {
    return (
        <div className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-8 sm:py-12">
            <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Connect with me
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl">
                <motion.div 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Github />
                    <a 
                        href="https://github.com/Mukezh" 
                        className="hover:text-blue-400 transition-colors text-sm sm:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        mukezh
                    </a>
                </motion.div>
                
                <motion.div 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <a 
                        href="https://x.com/tattakkaaee" 
                        className="hover:text-blue-400 transition-colors text-sm sm:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @tattakkaaee
                    </a>
                </motion.div>
                
                <motion.div 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                >
                    <LinkedIn />
                    <a 
                        href="https://www.linkedin.com/in/mukeshbabu/" 
                        className="hover:text-blue-400 transition-colors text-sm sm:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mukesh Babu
                    </a>
                </motion.div>
                
                <motion.div 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Email />
                    <a 
                        href="mailto:mukesh.offcl@gmail.com" 
                        className="hover:text-blue-400 transition-colors text-sm sm:text-base break-all"
                    >
                        mukesh.offcl@gmail.com
                    </a>
                </motion.div>
            </div>
            
            {/* <motion.div 
                className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
            >
                © {new Date().getFullYear()} Mukesh.
            </motion.div> */}
        </div>
    )
}