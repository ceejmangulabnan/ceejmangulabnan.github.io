import { motion } from "framer-motion"

const FloatingNav = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      className='absolute top-10 left-10 bg-red-500 w-10 h-10 rounded-full'></motion.div>
  )
}

export default FloatingNav
