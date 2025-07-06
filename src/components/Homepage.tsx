import { motion } from 'framer-motion';
import { Github } from '../assets/icons/github';
import { LinkedIn } from '../assets/icons/linkedIn';
import { Email } from '../assets/icons/email';
import { Arrow } from '../assets/icons/arrow';
import LoadingScreen from './Landing';
import About from './About';

const Homepage = () => {
    // Reduce stars on mobile for better performance
    const starCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 100;
    const stars = Array.from({ length: starCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
      }));
    
      return (
        <>
        <div className="relative inset-0 overflow-hidden h-screen bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Improved Stars Animation */}
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.y}%`,
                left: `${star.x}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
            />
          ))}
          
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
          
          <div className="relative z-10">
            <div className='pt-6 sm:pt-12'>
              <LoadingScreen />
            </div>
            
            <motion.div 
              className='text-white flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-7xl justify-center items-center h-screen font-serif px-4'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            > 
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-center"
              >
                <motion.div
                  className="text-white"
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  Mukesh
                </motion.div>
              </motion.div>
              
              <motion.div 
                className='text-lg sm:text-xl md:text-2xl py-4 text-gray-300'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Full Stack Developer
                </motion.span>
              </motion.div>
              
              <motion.div 
                className='flex flex-col py-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <div className='flex space-x-4 sm:space-x-6'>
                  <motion.a 
                    href="https://github.com/mukezh"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-blue-400 transition-colors p-2"
                  >
                    <Github />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/mukeshbabu/"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-blue-400 transition-colors p-2"
                  >
                    <LinkedIn />
                  </motion.a>
                  <motion.a 
                    href="mailto:mukesh.offcl@gmail.com"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-blue-400 transition-colors p-2"
                  >
                    <Email />
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.a 
                href="#about" 
                className='absolute text-white flex justify-center items-center bottom-4 sm:bottom-8 pb-4 sm:pb-8 cursor-pointer'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Arrow />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        <div id='about'>
          <About />
        </div>
        </>
      );
}

export default Homepage;