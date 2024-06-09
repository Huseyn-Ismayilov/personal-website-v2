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
    <>
      <section className='mb-10'>
        <div className='container'>
          <div className='flex flex-wrap gap-4 justify-between items-center bg-white'>
            <div>
              <h1 className='text-4xl font-semibold'>All Blogs</h1>
              <p className='text-md max-w-72 text-gray-400'>
                Ready for an innovative journey filled with insightful writings?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-8'>
        <div className='container'>
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
      </section>
    </>
  )
}
