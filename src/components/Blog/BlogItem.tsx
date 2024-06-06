// BlogItem
import { Link } from 'react-router-dom'

interface blogitemProps {
  title: string
  previewText: string
  link: string
  date: string
}

const BlogItem: React.FC<blogitemProps> = ({
  title,
  previewText,
  link,
  date
}) => (
  <Link to={link} className='group block'>
    <h2 className='text-lg font-semibold mb-2 hover:underline'>{title}</h2>
    <p className='line-clamp-2 mb-2 font-medium opacity-60'>{previewText}</p>
    <div className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700'>
      Read post
      <svg
        className='size-4 transition-all'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='none'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9'
        />
      </svg>
    </div>
  </Link>
)

export default BlogItem
