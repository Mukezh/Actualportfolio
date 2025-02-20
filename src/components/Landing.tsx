import { motion } from 'framer-motion';
import enduranceImage from '../assets/endurance.png';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      <motion.img
        src={enduranceImage}
        alt="Endurance Ship"
        className="w-32 h-32"
        initial={{ x: '-100vw', rotate: 0 }}
        animate={{ x: '100vw', rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
    </div>
  );
};

export default LoadingScreen;
