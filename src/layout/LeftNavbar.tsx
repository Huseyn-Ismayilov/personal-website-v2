import { NavLink } from 'react-router-dom'
import { useModal } from '../context/ModalContext'
import { motion } from 'framer-motion'
import avatar from '../assets/avatar.jpeg'
import photo from '../assets/photo.png'
import SocialMedia from '../components/SocialMedia/SocialMedia'

interface itemTypes {
  text: string
  to: string
  color: string
  icon: any
}
const LinkItems: itemTypes[] = [
  {
    text: 'Home',
    to: '/',
    color: 'blue-700',
    icon: (
      <svg
        className='w-full'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3.00117 10.0983V16.4021C2.94656 18.8821 4.80557 20.94 7.15478 21H16.8452C19.1944 20.94 21.0535 18.8821 20.9988 16.4021V10.0983C21.0015 8.2383 20.1795 6.4842 18.7774 5.35786L14.8436 2.84042C13.0961 1.71986 10.9028 1.71986 9.15508 2.84042L5.2226 5.35786C3.82052 6.4842 2.99851 8.2383 3.00117 10.0983Z'
          stroke='currentColor'
          stroke-width='1.8'
        />
        <path
          d='M15 16C14.2968 16.6289 13.1835 17 12 17C10.8166 17 9.7032 16.6289 9 16'
          stroke='currentColor'
          stroke-width='1.8'
        />
      </svg>
    )
  },
  {
    text: 'About',
    to: '/about',
    color: 'purple-600',
    icon: (
      <svg
        className='w-full'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 10C14.2092 10 16 8.20914 16 6C16 3.79086 14.2092 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z'
          stroke='currentColor'
          stroke-width='1.8'
        />
        <path
          d='M5 17.5714C5 15.0467 7.0467 13 9.57143 13H14.4286C16.9533 13 19 15.0467 19 17.5714C19 19.465 17.465 21 15.5714 21H8.42857C6.53502 21 5 19.465 5 17.5714Z'
          stroke='currentColor'
          stroke-width='1.8'
        />
      </svg>
    )
  },
  {
    text: 'Portfolio',
    to: '/portfolio',
    color: 'green-600',
    icon: (
      <svg
        className='w-full'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17 7C17 6.07003 17 5.60504 16.8978 5.22354C16.6204 4.18827 15.8117 3.37962 14.7765 3.10222C14.395 3 13.93 3 13 3C12.07 3 11.605 3 11.2235 3.10222C10.1883 3.37962 9.37962 4.18827 9.10222 5.22354C9 5.60504 9 6.07003 9 7M6.2 21H19.8C20.9201 21 21.4802 21 21.908 20.782C22.2843 20.5903 22.5903 20.2843 22.782 19.908C23 19.4802 23 18.9201 23 17.8V10.2C23 9.07989 23 8.51984 22.782 8.09202C22.5903 7.71569 22.2843 7.40973 21.908 7.21799C21.4802 7 20.9201 7 19.8 7H6.2C5.07989 7 4.51984 7 4.09202 7.21799C3.71569 7.40973 3.40973 7.71569 3.21799 8.09202C3 8.51984 3 9.07989 3 10.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z'
          stroke='currentColor'
          stroke-width='1.8'
        />
      </svg>
    )
  },
  {
    text: 'Blog',
    to: '/blog',
    color: 'red-600',
    icon: (
      <svg
        className='w-full'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.65 5H8.95C4.7 5 3 6.6 3 10.6V15.4C3 19.4 4.7 21 8.95 21H14.05C18.3 21 20 19.4 20 15.4V13.8'
          stroke='currentColor'
          stroke-width='1.7'
        />
        <path
          d='M16.0971 4.91996L9.87702 10.6225C9.64019 10.8396 9.40336 11.2666 9.35605 11.5778L9.01662 13.7561C8.89031 14.5449 9.49808 15.0949 10.3585 14.9863L12.7345 14.6752C13.066 14.6317 13.5317 14.4146 13.7764 14.1975L19.9965 8.49494C21.0701 7.51074 21.5752 6.36732 19.9965 4.91996C18.4179 3.4726 17.1706 3.93576 16.0971 4.91996Z'
          stroke='currentColor'
          stroke-width='1.6'
        />
        <path
          d='M15.2955 5.64711C15.6158 7.17815 17.0199 8.58095 19.0045 9.3529'
          stroke='currentColor'
          stroke-width='1.4'
        />
      </svg>
    )
  }
]

const LeftNavbar = () => {
  const { openModal } = useModal()

  return (
    <div className='fixed left-0 top-0 h-dvh 2xl:w-96 w-80 border-r border-black/10 flex flex-col'>
      <div className='w-full max-w-64 ml-auto pr-6 pt-6'>
        <div className='mb-6 text-center'>
          <motion.div
            className='inline-block relative size-20 group perspective-1000 rounded-full cursor-pointer'
            whileHover='hover'
          >
            <motion.img
              src={avatar}
              alt=''
              className='absolute inset-0 w-full h-full rounded-full shadow-lg transition-shadow duration-500 border border-black/10'
              initial={{ opacity: 1, rotateY: 0, visibility: 'visible' }}
              variants={{
                hover: { opacity: 0, rotateY: 180, visibility: 'hidden' }
              }}
              transition={{ duration: 0.8 }}
            />
            <motion.img
              src={photo}
              alt='Your '
              className='absolute inset-0 w-full h-full rounded-full shadow-lg opacity-0 transition-opacity duration-500 border border-black/10 backface-hidden'
              initial={{ opacity: 0, rotateY: -180, visibility: 'hidden' }}
              variants={{
                hover: { opacity: 1, rotateY: 0, visibility: 'visible' }
              }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          <h1 className='text-2xl font-semibold text-black/85'>
            Huseyn Ismayilov
          </h1>
          <h3 className='text-base font-medium text-black/40'>
            Front End Developer.
          </h3>
        </div>
        <div className='mb-4'>
          {LinkItems.map((item, index) => (
            <div className='relative group mb-3' key={index}>
              <NavLink key={index} to={item.to} preventScrollReset={true}>
                {({ isActive }) => {
                  return (
                    <div
                      className={`flex items-center gap-3 px-4 h-10 rounded-xl text-md border border-black/5 transition-all ${
                        isActive
                          ? `hover:border-gray-200 bg-black/80 text-white`
                          : `text-black/60 hover:bg-black/5`
                      }`}
                    >
                      <div className='shrink-0 w-5 h-auto'>{item.icon}</div>
                      {item.text}
                    </div>
                  )
                }}
              </NavLink>
            </div>
          ))}
          <div className='relative group'>
            <button
              onClick={openModal}
              className='flex items-center gap-3 px-4 h-11 border border-black/5 text-black/60 hover:bg-black/5 w-full rounded-xl'
            >
              <svg
                className='w-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.82495 6.68957L11.5 11.5824L20.1751 6.68957C19.9817 6.12279 19.4353 5.71429 18.7917 5.71429H4.20833C3.56466 5.71429 3.01839 6.12279 2.82495 6.68957ZM20.25 8.62543L11.9366 13.3143C11.6664 13.4666 11.3337 13.4666 11.0634 13.3143L2.75 8.62543V16.8571C2.75 17.6462 3.40291 18.2857 4.20833 18.2857H18.7917C19.5971 18.2857 20.25 17.6462 20.25 16.8571V8.62543ZM1 7.14286C1 5.40711 2.43642 4 4.20833 4H18.7917C20.5636 4 22 5.40711 22 7.14286V16.8571C22 18.5929 20.5636 20 18.7917 20H4.20833C2.43642 20 1 18.5929 1 16.8571V7.14286Z'
                  fill='currentColor'
                />
              </svg>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className='mt-auto'>
        <div className='h-px w-full bg-black/5'></div>
        <div className='w-full max-w-64 ml-auto pr-6 py-6 mb-4'>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default LeftNavbar
