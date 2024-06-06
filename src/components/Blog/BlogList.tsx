import React from 'react'
import BlogItem from './Card'
import parse from 'html-react-parser'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface BlogProps {
  grid: boolean
  blogs: {
    title: string
    date: string
    previewText: string
    slug: string
  }[]
}

const BlogList: React.FC<BlogProps> = ({ blogs, grid }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className='flex flex-wrap gap-y-8 -mx-4 overflow-hidden' ref={ref}>
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }} 
          transition={{ duration: 0.2, delay: index * 0.05 }}
          className={`px-4 ${grid ? 'sm:w-1/2' : 'w-full'}`}
        >
          <div key={index}
           
           >
            <BlogItem
              title={blog.title}
              date={blog.date}
              previewText={blog.previewText}
              link={`/blog/${blog.slug}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default BlogList
