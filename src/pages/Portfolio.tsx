import Projects from '../components/Portfolio/Projects'
import { projects } from '../data/projects'

const Portfolio:React.FC = () => {
  return (
    <>
      <section className='mb-10'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap gap-4 justify-between items-center bg-white'>
            <div>
              <h1 className='text-4xl font-semibold'>
                <span className='text-black/50'>Where Creativity Meets</span>{' '}
                Code
              </h1>
              <p className='max-w-[420px] text-gray-400'>
                I blend creativity seamlessly with coding expertise to craft
                one-of-a-kind digital experiences that leave a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-10'>
        <div className='container mx-auto'>
          <Projects projects={projects} />
        </div>
      </section>
    </>
  )
}
export default Portfolio
