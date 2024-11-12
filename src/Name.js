import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

function Name() {
  return (
    <div className=" mt-3">
      <div className='w-full h-2 rounded '>

      <motion.div
        // This corresponds to the w-1/12
        animate={{ width: '100%',scale:0.5,rotate:(20,80) }}
        transition={{ duration: 5, }} // Set a shorter duration to see the effect
        className="h-full w-1/12 bg-red-400"
      ></motion.div>
    </div></div>
  );
}

export default Name;
