import BlogList from '../components/Blog/BlogList'
import blogs from '../data/blogs'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Blog () {
  const [visibleBlogs, setVisibleBlogs] = useState(8)

  const showMoreBlogs = () => {
    setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 4)
  }

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: -50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   exit={{ opacity: 0, y: 50 }}
    //   transition={{ ease: "circInOut", duration: .5 }}
    //   className="container mx-auto pb-14"
    // >
    <div>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-10'>All Blogs</h1>
        <BlogList blogs={blogs.slice(0, visibleBlogs)} grid={true} />
        <div className='text-center mt-10'>
          {visibleBlogs < blogs.length && (
            <motion.button
              onClick={showMoreBlogs}
              whileHover={{ scale: 1.1 }}
              className='px-4 py-2 rounded-lg bg-black text-white transition-all'
              whileTap={{ scale: 0.9 }}
            >
              More Blogs
            </motion.button>
          )}
        </div>
      </div>
    </div>
    // </motion.div>
  )
}
