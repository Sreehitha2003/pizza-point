import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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


const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
        variants={Variantcontainers}
        initial="hidden"
        animate ="visible"
        exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <div
        className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}

    </motion.div>
  )
}

export default Base;