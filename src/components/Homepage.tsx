import { motion } from 'framer-motion';
import { Github } from '../assets/icons/github';
import { LinkedIn } from '../assets/icons/linkedIn';
import { Email } from '../assets/icons/email';
import { Arrow } from '../assets/icons/arrow';
import LoadingScreen from './Landing';
import About from './About';

const Homepage = () => {
    const stars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
      }));
    
      return (
        <>
        <div className="relative inset-0 overflow-hidden h-screen bg-black">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full text-white h-screen"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.y}%`,
                left: `${star.x}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
            </motion.div>
          ))}
          <div>
          <div className='pt-24'>
          <LoadingScreen />
            </div>
          <div className='text-white -mt-48 flex flex-col text-7xl justify-center items-center h-screen font-serif '>
            <div>
            Mukesh
            </div>
            <div className='text-2xl py-4 animate-pulse'>
                Developer
            </div>
            <div className='flex flex-col py-2'>
                <div className='flex space-x-4'>
                <a href="https://github.com/mukezh"><Github /></a>
                <a href="https://www.linkedin.com/in/mukeshbabu/"><LinkedIn /></a>
                <a href="mailto:mukesh.offcl@gmail.com"><Email /></a>
                </div>
            </div>
            {/* <div className='absolute text-white flex justify-center items-center bottom-0 pb-6'>
            <a href="">
                <Arrow />
            </a>
            </div> */}
            {/* <motion.div
                className="absolute text-white flex justify-center items-center bottom-0 pb-6"
                animate={{ y: [0, -10, 0] }} 
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                > */}
                <a href="#about" className='animate-bounce absolute text-white flex justify-center items-center bottom-0 pb-6'>
                    <Arrow />
                </a>
                {/* </motion.div> */}
          </div>
          </div>
          
        </div>
        <div id='about'>
        <About />
        </div>
        </>
      );
}

export default Homepage;