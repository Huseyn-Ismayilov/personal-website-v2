import image from '../assets/tachopilot-website.png'
import image1 from '../assets/albert-mohler-website.png'
import fiuby from '../assets/fiuby.png'

interface Project {
  name: string
  desc: string
  image: string
  link: string
}
export const projects: Project[] = [
  {
    name: 'Blanchard',
    desc: 'Blanchard website for Turkey company',
    image: image,
    link: '#'
  },
  {
    name: 'Tachopilot App',
    desc: 'Tachopilot App',
    image: image1,
    link: '#'
  },
  {
    name: 'Fiuby',
    desc: 'Social media website for gamers',
    image: fiuby,
    link: '#'
  },
  {
    name: 'Tachopilot App',
    desc: 'Tachopilot App',
    image: image1,
    link: '#'
  }
]
