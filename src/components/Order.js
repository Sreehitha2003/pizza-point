import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { useEffect } from 'react';


const containerVariants = {
  hidden : {
    opacity : 0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:"spring",
      mass:0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildres: 0.4
    },
    exit:{
      x:'-100vw',
      transition:{ease: 'easeInOut'}
    }
  }
}


const Order = ({ pizza , setshowModal}) => {
  useEffect(()=>{
    setTimeout(()=>{
      setshowModal(true);
    }, 5000)
  }, [setshowModal])
  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
      >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
  )
}

export default Order;