import image from '../assets/tachopilot-website.png'
import image1 from '../assets/albert-mohler-website.png'
import fiuby from '../assets/fiuby.png'
import bigbat from '../assets/bigbat.png'
import garanti from '../assets/garanti-tech.png'
import fis from '../assets/fis.png'

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
    name: 'Fis',
    desc: 'Yatch App',
    image: fis,
    link: '#'
  },
  {
    name: 'Tachopilot App',
    desc: 'Tachopilot App',
    image: image1,
    link: '#'
  },
  {
    name: 'Garantili',
    desc: 'Secondhand Phone Trading Platform',
    image: garanti,
    link: '#'
  },
  {
    name: 'Fiuby',
    desc: 'Social media website for gamers',
    image: fiuby,
    link: '#'
  },
  {
    name: 'Bigbat',
    desc: 'Tachopilot App',
    image: bigbat,
    link: '#'
  },

]
