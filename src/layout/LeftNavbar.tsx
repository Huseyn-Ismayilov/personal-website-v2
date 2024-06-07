import { NavLink } from 'react-router-dom'
import { useModal } from '../context/ModalContext'
import { motion } from 'framer-motion'

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
        width='24'
        viewBox='0 0 17 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.50091 7.4673V12.1123C1.45843 13.9397 2.90451 15.4561 4.73191 15.5003H12.2699C14.0973 15.4561 15.5434 13.9397 15.5009 12.1123V7.4673C15.503 6.09674 14.8636 4.80422 13.7729 3.97427L10.7129 2.11927C9.3535 1.29358 7.6474 1.29358 6.2879 2.11927L3.22891 3.97427C2.13826 4.80422 1.49884 6.09674 1.50091 7.4673Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.6547 11.6831C10.1498 12.3666 9.35048 12.7699 8.50068 12.7699C7.65098 12.7699 6.85158 12.3666 6.34668 11.6831'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
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
        xmlns='http://www.w3.org/2000/svg'
        width='26'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          id='vector'
          d='M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='rec'
          d='M5 18.5714C5 16.0467 7.0467 14 9.57143 14H14.4286C16.9533 14 19 16.0467 19 18.5714C19 20.465 17.465 22 15.5714 22H8.42857C6.53502 22 5 20.465 5 18.5714Z'
          stroke='currentColor'
          strokeWidth='2'
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
        xmlns='http://www.w3.org/2000/svg'
        width='26'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          d='M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
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
        width='24'
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 4H9C4 4 2 6 2 11V17C2 22 4 24 9 24H15C20 24 22 22 22 17V15'
          stroke='currentColor'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18.28 3.17086L11.0232 10.4287C10.7469 10.705 10.4706 11.2484 10.4154 11.6445L10.0194 14.4168C9.87204 15.4208 10.5811 16.1208 11.5849 15.9826L14.3569 15.5866C14.7437 15.5313 15.287 15.255 15.5725 14.9787L22.8293 7.72083C24.0818 6.46821 24.6711 5.01295 22.8293 3.17086C20.9875 1.32877 19.5324 1.91824 18.28 3.17086Z'
          stroke='currentColor'
          strokeWidth='2.2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.9102 4.1499C17.5802 6.5399 19.4502 8.4099 21.8502 9.0899'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    )
  }
]

const LeftNavbar = () =>{
  const { openModal } = useModal()

  return (
    <div className='fixed bottom-10 left-1/2 -translate-x-1/2'>
      <span className='hidden bg-purple-600 bg-green-600 bg-blue-700 bg-red-600'></span>
      <motion.div
        className='flex items-center sm:gap-5 gap-3 p-4 border border-black/10 rounded-xl backdrop-blur-sm shadow-lg bg-white/80'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        {LinkItems.map((item, index) => (
          <div className='relative group' key={index}>
            <span className='group-hover:opacity-100 group-hover:-translate-y-4 pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-3 bottom-full leading-none px-2 py-1 rounded-md bg-black/80 text-white border border-black/10 opacity-0 transition-all md:block hidden'>
              {item.text}
            </span>
            <NavLink key={index} to={item.to} preventScrollReset={true}>
              {({ isActive }) => {
                const color = isActive ? item.color : ''
                return (
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl border transition-all ${
                      isActive
                        ? `hover:border-gray-200 bg-${color} border-${color} text-white `
                        : `text-black/60 hover:bg-black/5 border-gray-200`
                    }`}
                  >
                    {item.icon}
                  </div>
                )
              }}
            </NavLink>
          </div>
        ))}
        <div className='relative group'>
          <span className='group-hover:opacity-100 group-hover:-translate-y-4 absolute left-1/2 -translate-x-1/2 -translate-y-3 bottom-full leading-none px-2 py-1 rounded-md bg-black/80 text-white border border-black/10 opacity-0 transition-all'>
            Contact
          </span>
          <button
            onClick={openModal}
            className='flex items-center justify-center w-11 h-11 bg-gray-500 hover:bg-black rounded-xl'
          >
            <svg
              width='18'
              height='15'
              viewBox='0 0 18 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.88911 0.333313C1.10155 0.333313 0.439439 0.852646 0.207883 1.57009C0.140883 1.77787 0.249661 1.99287 0.434217 2.10942L8.69733 7.32576C8.88233 7.44253 9.11811 7.44253 9.30311 7.32576L17.5662 2.10942C17.7508 1.99287 17.8596 1.77787 17.7926 1.57009C17.561 0.852646 16.8989 0.333313 16.1113 0.333313H1.88911ZM0.981551 4.25176C0.603773 4.0132 0.111328 4.28476 0.111328 4.73153V12.9046C0.111328 13.8969 0.906884 14.7005 1.88911 14.7005H16.1113C17.0936 14.7005 17.8891 13.8969 17.8891 12.9046V4.73153C17.8891 4.28476 17.3967 4.0132 17.0189 4.25176L9.47066 9.01642C9.18266 9.19787 8.81777 9.19787 8.52977 9.01642L0.981551 4.25176Z'
                fill='#D9D9D9'
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default LeftNavbar