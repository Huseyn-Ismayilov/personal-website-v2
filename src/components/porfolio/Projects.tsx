import { projects } from '../../data/projects';
import Card from './Card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className='grid md:grid-cols-2 gap-x-5 gap-y-9' ref={ref}>
      {projects.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }} 
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Card
            image={item.image}
            title={item.name}
            desc={item.desc}
            link={item.link}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
