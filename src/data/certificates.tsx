import FreeCodeCamp from '../assets/FreeCodeCamp.png'
import Ibm from '../assets/ibm-logo.png'
import CodeCademy from '../assets/codeCademy-logo.png'
import Udemy from '../assets/udemy-logo.png'

interface certificateTypes {
  id: number
  title: string
  date: string
  corporate: string
  image: string
}

export const certificates: certificateTypes[] = [
  {
    id: 1,
    title: 'Front End Development Libraries',
    date: 'July 2024',
    corporate: 'freeCodeCamp',
    image: FreeCodeCamp
  },
  {
    id: 2,
    title: 'Intermediate Web and Front-End Development',
    date: 'Dec 2023',
    corporate: 'IBM',
    image: Ibm
  },
  {
    id: 3,
    title: 'React Course',
    date: 'Dec 2023',
    corporate: 'Codecademy',
    image: CodeCademy
  },
  {
    id: 4,
    title: '30 Different Web Projects in 30 Days | HTML, CSS & JS',
    date: 'July 2023',
    corporate: 'Udemy',
    image: Udemy
  },
  {
    id: 5,
    title: 'Ethical Hacking and Penetration Testing with Kali Linux',
    date: 'Aug 2021',
    corporate: 'Udemy',
    image: Udemy
  }
]
