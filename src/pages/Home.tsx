import BlockTitle from '../components/BlockTitle'
import BlogList from '../components/Blog/BlogList'
import blogs from '../data/blogs'
import { Link } from 'react-router-dom'
import Projects from '../components/Portfolio/Projects'
import { projects } from '../data/projects'
import callMe from '../assets/Call-Me.mp4'
import clapping from '../assets/Clapping.mp4'

const Home: React.FC = () => {
  // Date
  const today: Date = new Date('Sat Aug 31 2024')
  const startDate: Date = new Date('May 26, 2021')
  const diffDate: number = today.getTime() - startDate.getTime()
  const date: number = Math.floor(diffDate / 31557600000)

  return (
    <>
      <section className='md:mb-24 mb-14'>
        <div className='container'>
          <div className='inline-flex items-center text-sm bg-green-600/10 text-green-600 px-2 py-1 rounded-full font-medium gap-2 mb-3 leading-tight'>
            <div className='size-2 rounded-full bg-green-600'></div>
            <p>Available</p>
          </div>
          {/* <h1 className='sm:text-5xl text-3xl font-semibold text-black tracking-tight lg:mb-2 mb-1'>
            Hello I’m Huseyn👏
          </h1> */}
          {/* <h1 className='sm:text-5xl text-3xl font-semibold text-black tracking-tight lg:mb-2 mb-1'>
           <span className='relative z-10'> Hello I’m Huseyn{' '}</span>
            <div className='inline-flex items-end justify-start size-7 translate-y-3'>
              <video
                width={60}
                className='min-w-16 min-h-16 max-w-fit'
                autoPlay
                loop
                muted
              >
                <source src={callMe} />
              </video>
            </div>
          </h1> */}
          <h1 className='sm:text-5xl text-3xl font-semibold text-black tracking-tight lg:mb-2 mb-1'>
           <span className='relative z-10'> Hello I’m Huseyn</span>
            <div className='inline-flex items-end justify-start size-7 translate-y-4'>
              <video
                width={60}
                className='min-w-[70px] min-h-[70px] max-w-fit'
                autoPlay
                loop
                muted
              >
                <source src={callMe} />
              </video>
            </div>
          </h1>
          <p className='sm:text-3xl text-2xl font-semibold bg-gradient-to-tl from-[#333333] to-[#808389] text-transparent bg-clip-text tracking-tight sm:leading-8 leading-7 mb-8'>
            With {date}+ years of crafting high-performance, user-friendly web
            apps, I excel in elegant solutions with a user-centric approach. My
            focus is on creating seamless, intuitive digital experiences that
            prioritize usability and efficiency, surpassing user expectations in
            every project.
          </p>
          <div className='flex items-start gap-4'>
            <Link
              to='/about'
              className='inline-flex text-md font-medium items-center px-5 h-9 rounded-xl bg-black/80 hover:bg-black text-white'
            >
              About
            </Link>
            <Link
              to='https://drive.google.com/file/d/14TEUgxbYyL66JKnlXnUGjk8HAMnRLbZV/view'
              target='_blank'
              className='inline-flex items-center text-md font-medium gap-3 px-5 h-9 rounded-xl border border-black/40 hover:bg-black/5 text-black/80'
            >
              <svg
                className='text-black/60'
                width='14'
                viewBox='0 0 534 668'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M200.334 400.667H333.667M300.334 34H140.334C102.997 34 84.3283 34 70.0677 41.2663C57.5233 47.6577 47.3247 57.8563 40.9333 70.4007C33.667 84.6613 33.667 103.33 33.667 140.667V527.333C33.667 564.67 33.667 583.34 40.9333 597.6C47.3247 610.143 57.5233 620.343 70.0677 626.733C84.3283 634 102.997 634 140.334 634H393.667C431.004 634 449.674 634 463.934 626.733C476.477 620.343 486.677 610.143 493.067 597.6C500.334 583.34 500.334 564.67 500.334 527.333V234M300.334 34L500.334 234M300.334 34V180.667C300.334 199.335 300.334 208.669 303.967 215.8C307.164 222.072 312.26 227.171 318.534 230.367C325.664 234 334.997 234 353.667 234H500.334'
                  stroke='currentColor'
                  strokeWidth='50'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Resume
            </Link>
          </div>
        </div>
      </section>
      <section className='mb-14'>
        <div className='container'>
          <div className='mb-5'>
            <BlockTitle title='Selected Projects' />
          </div>
          <div className='mb-10'>
            <Projects projects={projects.slice(0, 2)} />
          </div>
          <div className='text-center'>
            <Link
              to='/portfolio'
              className='inline-flex items-center gap-3 hover:gap-5 px-4 py-2 rounded-xl bg-black/80 hover:bg-black text-white'
            >
              All Projects
            </Link>
          </div>
        </div>
      </section>
      <section className='mb-14'>
        <div className='container'>
          <div className='mb-5'>
            <BlockTitle title='Latest Blogs' />
          </div>
          <div className='mb-8'>
            <BlogList blogs={blogs.slice(0, 4)} grid={true} />
          </div>
          <div className='text-center'>
            <Link
              to='/blog'
              className='inline-block px-4 py-2 rounded-xl bg-black/80 hover:bg-black text-white'
            >
              All Blogs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
