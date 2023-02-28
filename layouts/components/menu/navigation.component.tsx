import { motion } from 'framer-motion'
import * as React from 'react'

import { MenuItem } from './menu-item.component'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => (
  <motion.ul variants={variants} className="p-[25px] w-full top-[100px] absolute">
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
)

const itemIds = [0, 1, 2, 3, 4]
