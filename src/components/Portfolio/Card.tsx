interface cardProps {
  image: string
  title: string
  desc: string
  link: string
}
const Card:React.FC<cardProps> = ({ image, title, desc, link }) => {
  return (
    <div className='group'>
      <div className='rounded-2xl overflow-hidden mb-3 relative bg-white border border-black/5'>
        <img src={image} className='group-hover:scale-105 transition-all' alt='' />
        <div className='group-hover:opacity-100 opacity-0 absolute inset-0 flex items-center justify-center bg-black/60 transition-all'>
          <a
            href={link}
            className='hover:gap-3 gap-1 transition-all flex items-center justify-center'
          >
            <span className='text-xl font-medium text-white'>
              Visit website
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                opacity='0.5'
                d='M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L5.46967 17.4697ZM6.53033 18.5303L18.5303 6.53033L17.4697 5.46967L5.46967 17.4697L6.53033 18.5303Z'
                fill='white'
              />
              <path
                d='M9 6H18V15'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h3 className='text-xl font-semibold text-black'>{title}</h3>
        <p className='text-gray-400'>{desc}</p>
      </div>
    </div>
  )
}

export default Card
