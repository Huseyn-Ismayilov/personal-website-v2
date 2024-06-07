import { useModal } from '../context/ModalContext'
import Projects from '../components/Portfolio/Projects'
import { projects } from '../data/projects'

export default function Portfolio () {
  const { openModal } = useModal()

  return (
    <>
      <section className='mb-10'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap gap-4 justify-between items-center bg-white'>
            <div>
              <h1 className='text-3xl font-semibold mb-2'>
                <span className='text-black/40'>Where Creativity Meets</span> Code
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
