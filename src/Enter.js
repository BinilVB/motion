import React from 'react';
import { motion } from 'framer-motion';

function Enter() {
  return (
    <div className="bg-red-700 h-32 w-32 rounded-full mx-auto mt-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 1, }}
        animate={{ opacity: .7, y: -200,x:300 }}
        transition={{ duration: 1.5 ,delay:3.5 }}
        className="bg-blue-900 h-24 w-24 rounded-full"
      >
      </motion.div>
      
    </div>
  );
}

export default Enter;
