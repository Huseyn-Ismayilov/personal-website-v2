import MyStory from '../components/MyStory'
import BlockTitle from '../components/BlockTitle'
import Certificates from '../components/Certificates'
import SkillList from '../components/SkillsList'
import Experience from '../components/Experience'
import Education from '../components/Education'
import BlockTransition from '../components/Animated'

export default function About () {
  return (
    <>
      <section className='mb-10'>
        <div className='container mx-auto'>
          <h1 className='text-2xl font-semibold tracking-tight leading-8'>
            <span className='text-black/40'>Hi there </span>👋 <br /> I'm a
            frontend developer, currently freelancing at Bionluk. I have a
            fervent passion for meticulously crafting beautiful
            micro-interactions and refining the smallest details in interface
            design.
          </h1>
        </div>
      </section>
      <section className='mb-12'>
        <div className='container mx-auto'>
          <BlockTitle title='Skills' />
          <BlockTransition>
            <SkillList />
          </BlockTransition>
        </div>
      </section>
      <section className='mb-4'>
        <div className='container mx-auto'>
          <div className='mb-10'>
            <BlockTitle title='Experience' />
            <Experience />
          </div>
          <div className='mb-10'>
            <BlockTitle title='Education' />
            <Education />
          </div>
          <div>
            <BlockTitle title='Certificates' />
            <Certificates />
          </div>
        </div>
      </section>
    </>
  )
}
