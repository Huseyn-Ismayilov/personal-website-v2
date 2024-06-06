import React from 'react'
import BlogItem from './BlogItem'
import parse from 'html-react-parser'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface BlogProps {
  grid: boolean
  blogs: {
    title: string
    content: string
    date: string
    previewText: string
    slug: string
  }[]
}

const BlogList: React.FC<BlogProps> = ({ blogs, grid }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className='flex flex-wrap gap-y-8 -mx-4 overflow-hidden'>
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`px-4 ${grid ? 'sm:w-1/2' : 'w-full'}`}
        >
          <div key={index}
           
           >
            <BlogItem
              title={blog.title}
              content={parse(blog.content)}
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
