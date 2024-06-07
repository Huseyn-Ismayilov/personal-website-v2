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
                Where Creativity Meets Code
              </h1>
              <p className='max-w-[420px] text-gray-400'>
                I blend creativity seamlessly with coding expertise to craft
                one-of-a-kind digital experiences that leave a lasting impact.
              </p>
            </div>
            {/* <div>
              <button
                onClick={openModal}
                className='inline-flex items-start gap-2 px-5 py-3 rounded-lg bg-black/80 hover:bg-black text-white'
              >
                <svg
                  className='w-5 '
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.82495 6.68957L11.5 11.5824L20.1751 6.68957C19.9817 6.12279 19.4353 5.71429 18.7917 5.71429H4.20833C3.56466 5.71429 3.01839 6.12279 2.82495 6.68957ZM20.25 8.62543L11.9366 13.3143C11.6664 13.4666 11.3337 13.4666 11.0634 13.3143L2.75 8.62543V16.8571C2.75 17.6462 3.40291 18.2857 4.20833 18.2857H18.7917C19.5971 18.2857 20.25 17.6462 20.25 16.8571V8.62543ZM1 7.14286C1 5.40711 2.43642 4 4.20833 4H18.7917C20.5636 4 22 5.40711 22 7.14286V16.8571C22 18.5929 20.5636 20 18.7917 20H4.20833C2.43642 20 1 18.5929 1 16.8571V7.14286Z'
                    fill='currentColor'
                  ></path>  
                </svg>
                Contact
              </button>
            </div> */}
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
