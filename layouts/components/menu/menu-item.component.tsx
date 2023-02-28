import { motion } from 'framer-motion'
import * as React from 'react'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

export const MenuItem = ({ i }: any) => {
  const style = { border: `2px solid ${colors[i]}` }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer mb-[20px] flex align-middle list-none"
    >
      <div className="mr-[20px] flex-[40px 0] rounded-[50%] w-[40px] h-[40px]" style={style} />
      <div className="flex-1 w-[250] h-[20px] rounded-[5px]" style={style} />
    </motion.li>
  )
}
