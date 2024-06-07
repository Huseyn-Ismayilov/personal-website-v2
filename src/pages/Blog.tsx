import BlogList from '../components/Blog/BlogList'
import blogs from '../data/blogs'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Block from '../components/Block'

export default function Blog () {
  const [visibleBlogs, setVisibleBlogs] = useState(8)

  const showMoreBlogs = () => {
    setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 4)
  }

  return (
    <>
      <section>
        <div className='container mx-auto'>
          <Block>
            <div className='flex flex-wrap gap-4 justify-between items-center bg-white'>
              <div>
                <h1 className='text-3xl font-semibold mb-2'>
                All Blogs
                </h1>
                <p className='max-w-72 text-gray-400'>
                Ready for an innovative journey filled with insightful writings?
                </p>
              </div>
            </div>
          </Block>
        </div>
      </section>
      <section className='pb-8'>
        <div className='container mx-auto'>
          {/* <div className='mb-10'>
            <h1 className='text-3xl font-semibold mb-4'>All Blogs</h1>
            <p className='text-gray-400 max-w-72'>
              Ready for an innovative journey filled with insightful writings?
            </p>
          </div> */}
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
