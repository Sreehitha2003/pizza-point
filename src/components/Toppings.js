import { MotionContext } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const buttonvariants = {
  hover:{
    scale:1.1, 
    textShadow : "0px 0px 8px rgb(255,255,255)",
    boxShadow : "0px 0px 8px rgb(255,255,255)",
    transition : {
      duration : 0.3,
      yoyo: 10
    }
  }
}
const Variantcontainers = {
  hidden:{
    opacity:0,
    x:"100vw"
  },
  visible:{
    opacity:1,
    x:"0vw"
  },
  transition:{
    type:"spring",
    delay:0.5
  },
  exit:{
    x:'-100vw',
    transition:{ease: 'easeInOut'}
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
    variants={Variantcontainers}
    initial="hidden"
    animate="visible"
    exit="exit">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover={{scale:1.5, color:"yellow", originX:0}}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
         variants={buttonvariants}
         whileHover="hover">
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;