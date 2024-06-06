import { useNavigate, useParams } from 'react-router-dom'
import blogs from '../data/blogs'
import parse from 'html-react-parser'

const BlogDetailsPage = () => {
  const { slug } = useParams()
  const blog = blogs.find(blog => blog.slug === slug)

  const navigate = useNavigate()
  const goBack = () => {
    navigate('/blog')
  }
  return (
    <div>
      <div className='container mx-auto'>
        <button
          onClick={goBack}
          className='flex items-center gap-1 text-lg font-semibold text-blue-800 hover:text-black hover:gap-2  mb-4 transition-all'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='size-6'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M14 16L10 12L14 8'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          Back
        </button>
        <div className='max-w-screen-md mx-auto'>
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
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsPage
