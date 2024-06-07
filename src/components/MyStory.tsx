import ProfilePhoto from './ProfilePhoto'
import photo from '../assets/photo.png'
import Block from './Block'
import BlockTitle from './BlockTitle'

export default function MyStory () {
  return (
    <Block>
      <BlockTitle title='My story' fontSize='text-lg' />
      <p className='font-medium text-gray-400 leading-6'>
        👋 I am a 20-year-old accomplished front-end developer with a rich
        background in web development. With nearly three years of hands-on
        experience, I have successfully collaborated with diverse clients as a
        seasoned freelancer.
        <br />
        <br />
        🚀 My skills include HTML, CSS, JavaScript, TypeScript, and React. While
        I am proficient in React and TypeScript, I have not yet worked with
        Angular. I excel at creating visually appealing and user-friendly
        interfaces, ensuring each project meets and exceeds client expectations.
        <br />
        <br />
        🎨 I am passionate about web design, integrating the latest trends and
        best practices to deliver clean, modern, and intuitive interfaces. My
        attention to detail ensures that my projects are not only functional but
        also visually captivating.
        <br />
        <br />
        📚 My commitment to continuous learning and professional development
        drives my success as a developer. I am always eager to explore new tools
        and techniques to enhance my skill set and contribute to successful
        projects.
      </p>
    </Block>
  )
}
