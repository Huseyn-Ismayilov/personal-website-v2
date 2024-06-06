import { Link } from 'react-router-dom'
import profileBg from '../assets/profileBG3.jpeg'
import photo from '../assets/photo.png'
import ProfilePhoto from './ProfilePhoto'
import SocialMedia from './SocialMedia/SocialMedia'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const Profile = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <div className='overflow-hidden sm:rounded-xl shadow-md bg-white -mx-4 sm:mx-0'>
      <div className='relative'>
        <img src={profileBg} className='w-full h-[120px] object-cover' alt='' />
        <div className='absolute sm:right-6 right-2 sm:bottom-5 top-3 lg:top-auto flex items-center gap-4'>
          <Link
            to='/portfolio'
            className='items-center rounded-lg font-semibold bg-white bg-opacity-95 pr-4 h-10 hover:bg-opacity-100 hidden sm:flex'
          >
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.6447 29H28.3569C30.4393 29 31.5 27.974 31.5 25.9451V16.5926C31.5 14.5635 30.4393 13.5377 28.3569 13.5377H11.6447C9.56868 13.5377 8.5 14.5635 8.5 16.5926V25.9451C8.5 27.974 9.56868 29 11.6447 29ZM14.9029 14.3173H16.665V12.6676C16.665 11.9811 17.0712 11.5978 17.7864 11.5978H22.2136C22.9288 11.5978 23.3271 11.9827 23.3271 12.6676V14.3016H25.0908V12.6677C25.0908 10.8613 24.0962 10 22.265 10H17.7235C15.974 10 14.9029 10.8613 14.9029 12.6677V14.3173Z'
                fill='currentColor'
              />
            </svg>
            Portfolio
          </Link>
          <a className='flex items-center gap-2 rounded-lg font-semibold bg-white bg-opacity-95 px-3 h-10 hover:bg-opacity-100'>
            <svg
              width='16'
              viewBox='0 0 606 800'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M459.373 580.41H145.795C136.002 580.41 128 588.307 128 598.205C128 607.998 135.898 616 145.795 616H459.479C469.272 616 477.274 608.102 477.274 598.205C477.168 588.308 469.272 580.41 459.373 580.41Z'
                fill='currentColor'
              />
              <path
                d='M303.251 184C261.131 184 226.699 218.328 226.699 260.552C226.699 302.672 261.131 336.998 303.251 336.998C345.371 336.998 379.803 302.67 379.803 260.446C379.803 218.222 345.371 184 303.251 184ZM303.251 301.304C280.822 301.304 262.395 282.877 262.395 260.448C262.395 238.019 280.716 219.592 303.251 219.592C325.786 219.592 344.107 238.019 344.107 260.448C344.107 282.875 325.68 301.304 303.251 301.304Z'
                fill='currentColor'
              />
              <path
                d='M404.864 375.433C339.894 350.162 266.817 350.162 201.849 375.433C180.578 383.752 166.363 404.917 166.363 428.188V500.422C166.257 510.215 174.262 518.217 184.054 518.217H422.554C432.347 518.217 440.349 510.32 440.349 500.422V428.188C440.349 404.917 426.135 383.752 404.864 375.433ZM404.864 482.731H201.849V428.292C201.849 419.658 207.009 411.655 214.696 408.707C271.451 386.7 335.262 386.7 392.019 408.707C399.705 411.761 404.865 419.554 404.865 428.292V482.731H404.864Z'
                fill='currentColor'
              />
              <path
                d='M541.077 0H170.985C153.857 0 137.783 6.58696 125.663 18.7093L19.2053 125.165C7.08509 137.287 0.496094 153.359 0.496094 170.487V735.704C0.496094 771.145 29.3507 799.998 64.7903 799.998H541.208C576.649 799.998 605.502 771.143 605.502 735.704V64.2942C605.109 28.8546 576.254 0 541.077 0ZM131.326 75.8886V130.961H76.2543L131.326 75.8886ZM560.708 238.076V245C560.708 255 560.708 248.117 560.708 260.5C560.708 272.753 560.708 269.5 560.708 279.5V282.608V322.133V325C560.708 333 560.708 331.115 560.708 343.5C560.708 355.753 560.708 357.5 560.708 365V366.665V735.834C560.708 746.77 551.881 755.597 541.077 755.597H64.397C53.5933 755.597 44.7665 746.77 44.7665 735.967V175.362H153.594C165.847 175.362 175.86 165.481 175.86 153.096V44.2684H541.077C551.881 44.2684 560.708 53.0952 560.708 63.8988V238.076Z'
                fill='currentColor'
              />
            </svg>
            Download Cv
          </a>
        </div>
      </div>
      <div className='relative'>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0 }}
          className='w-full'
        >
          <div className='w-full'>
            <div className='absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 z-10 px-8'>
              <ProfilePhoto src={photo} active={true} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className='flex text-center items-center justify-center px-8 pt-12 sm:pb-8 pb-5'>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <div>
            <h1 className='text-2xl font-bold mb-2'>👋 I’m Huseyn Ismayilov</h1>
            <h3 className='text-gray-400 mb-3'>
              I’m a Front-End developer based in Azerbaijan, Baku
            </h3>
            <SocialMedia variant='variant2' />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
