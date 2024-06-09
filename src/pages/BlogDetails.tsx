import { useNavigate, useParams } from 'react-router-dom'
import blogs from '../data/blogs'
import parse from 'html-react-parser'
import { motion } from 'framer-motion'

const BlogDetailsPage = () => {
  const { slug } = useParams()
  const blog = blogs.find(blog => blog.slug === slug)

  const navigate = useNavigate()
  const goBack = () => {
    navigate('/blog')
  }
  return (
    <section className='pb-10'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <button
            onClick={goBack}
            className='flex items-center gap-2 text-lg font-semibold text-blue-800 hover:text-black hover:gap-3 mb-4 transition-all'
          >
            <svg
              width='6'
              viewBox='0 0 6 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 9L1 5L5 1'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            Back
          </button>
        </motion.div>
        <motion.div
          className='max-w-screen-md mx-auto'
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {blog ? (
            <div>
              <h2 className='text-5xl font-bold leading-tight mb-6'>
                {blog.title}
              </h2>
              <div className='text-lg mb-4 leading-relaxed'>
                {parse(blog.content)}
              </div>
              <p className='font-semibold'>{blog.date}</p>
            </div>
          ) : (
            <p>Blog not found</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default BlogDetailsPage
