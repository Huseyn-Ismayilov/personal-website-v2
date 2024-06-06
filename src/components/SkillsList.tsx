import skills from '../data/skills'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkillList = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <ul className='flex flex-wrap gap-x-2 gap-y-3 max-w-[800px]'>
      {skills.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0}}
          animate={inView ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <li
            key={index}
            className='px-3 py-2 border border-gray-300 rounded-lg text-gray-400 bg-white shadow-md'
          >
            {item}
          </li>
        </motion.li>
      ))}
    </ul>
  )
}

export default SkillList
