import { Profile } from '../components/Profile'
import SkillList from '../components/SkillsList'
import Block from '../components/Block'
import BlockTitle from '../components/BlockTitle'
import ReadMore from '../components/ReadMore'
import BlogList from '../components/Blog/BlogList'
import blogs from '../data/blogs'
import { Link } from 'react-router-dom'

export default function Home () {
  const latestBlogs = blogs.slice(0, 3)

  return (
    <>
      <section className='mb-14'>
        <div className='container mx-auto'>
          {/* <Profile /> */}
          <div className='flex items-center text-sm text-green-600 font-medium gap-2'>
            <div className="size-2 rounded-full bg-green-600"></div>
            <p>Available for new opportunities</p>
          </div>
          <h1 className='text-5xl font-semibold text-black'>
            Hello! I’m Huseyn👏
          </h1>
          <h1 className='text-5xl font-semibold text-black/50'>
            Real Things. Experienced Developer.
          </h1>
          <span className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              className='w-5'
            >
              <path
                d='M 14.426 4.637 C 15.028 4.326 15.675 4.972 15.364 5.575 L 9.124 17.637 C 8.785 18.292 7.794 18.039 7.811 17.302 L 7.933 12.068 L 2.699 12.19 C 1.962 12.207 1.709 11.216 2.364 10.877 Z'
                fill='currentColor'
              ></path>
            </svg>
            Baku, Azerbaijan
          </span>
        </div>
      </section>
      <section className='mb-14'>
        <div className='container mx-auto'>
          <BlockTitle title='About me' />
          <div className='md:flex md:space-x-7'>
            <div className='md:w-1/2'>
              <Block>
                <BlockTitle title='More about me' fontSize='text-lg' />
                <p className='line-clamp-5 text-gray-400 mb-4 leading-6'>
                  I am 20 years old an accomplished front-end developer with a
                  rich background in web development. Close to 3 years of
                  hands-on experience, I have successfully collaborated with
                  diverse clients as a seasoned freelancer. My proficiency
                  extends across the spectrum of web development and design,
                  where I have honed my skills in creating visually appealing
                  and user-friendly interfaces. I am an accomplished front-end
                  developer with a rich background in web development. Close to
                  3 years of{' '}
                </p>
                <ReadMore to='/about' />
              </Block>
            </div>
            <div className='md:w-1/2'>
              <Block>
                <BlockTitle title='My Skills' fontSize='text-lg' />
                <SkillList />
              </Block>
            </div>
          </div>
          <div>
            <BlockTitle title='Latest Blogs' />
            <Block>
              <div className='mb-5'>
                <BlogList blogs={latestBlogs} grid={false} />
              </div>
              <Link
                to='/blog'
                className='inline-block px-4 py-2 rounded-xl bg-black text-white'
              >
                All Blogs
              </Link>
            </Block>
          </div>
        </div>
      </section>
    </>
  )
}
