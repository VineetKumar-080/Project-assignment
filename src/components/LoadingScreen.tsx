import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        className="flex flex-col items-center"
      >
        <motion.div
          className="text-amber-500 mb-8"
          animate={{ 
            rotate: [0, 45, 0, -45, 0],
            scale: [1, 1.2, 1, 1.2, 1] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        >
          <Scissors size={60} />
        </motion.div>
        
        <h1 className="text-3xl font-bold mb-4 font-serif text-white">PMC BARBER</h1>
        
        <div className="w-48 h-1 bg-dark-800 rounded-full overflow-hidden mt-4">
          <motion.div 
            className="h-full bg-amber-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;