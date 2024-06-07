import Block from '../components/Block'
import BlockTitle from '../components/BlockTitle'
import BlogList from '../components/Blog/BlogList'
import blogs from '../data/blogs'
import { Link } from 'react-router-dom'
import Projects from '../components/Portfolio/Projects'
import { projects } from '../data/projects'

export default function Home () {
  const latestBlogs = blogs.slice(0, 4)
  const latestProjects = projects.slice(0, 2)
  return (
    <>
      <section className='md:mb-24 mb-14'>
        <div className='container mx-auto'>
          <div className='inline-flex items-center text-sm bg-green-600/10 text-green-600 px-2 py-1 rounded-full font-medium gap-2 mb-3 leading-tight'>
            <div className='size-2 rounded-full bg-green-600'></div>
            <p>Available</p>
          </div>
          <h1 className='text-5xl font-semibold text-black'>
            Hello! I’m Huseyn👏
          </h1>
          <h1 className='text-5xl font-semibold text-black/50 mb-7'>
            Real Things. Experienced Developer.
          </h1>
          <p className='text-base text-black/60 tracking-tight leading-7 mb-8'>
            3+ years of experience in crafting high-performance, user-friendly
            web applications. Focused on delivering elegant solutions with a
            user-first approach.
          </p>
          <Link
            to='/about'
            className='inline-block px-4 py-2 rounded-xl bg-black/85 hover:bg-black text-white'
          >
            About me
          </Link>
        </div>
      </section>
      <section className='mb-14'>
        <div className='container mx-auto'>
          <div className='mb-5'>
            <BlockTitle title='Latest Projects' />
          </div>
          <div className='mb-10'>
            <Projects projects={latestProjects} />
          </div>
          <div className='text-center'>
            <Link
              to='/portfolio'
              className='inline-block px-4 py-2 rounded-xl bg-black/85 hover:bg-black text-white'
            >
              All Projects
            </Link>
          </div>
        </div>
      </section>
      <section className='mb-14'>
        <div className='container mx-auto'>
          <div className='mb-5'>
            <BlockTitle title='Latest Blogs' />
          </div>
          <div className='mb-8'>
            <BlogList blogs={latestBlogs} grid={true} />
          </div>
          <div className='text-center'>
            <Link
              to='/blog'
              className='inline-block px-4 py-2 rounded-xl bg-black/85 hover:bg-black text-white'
            >
              All Blogs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
