import image from '../assets/tachopilot-website.png'
import image1 from '../assets/albert-mohler-website.png'
import fiuby from '../assets/fiuby.png'
import bigbat from '../assets/bigbat.png'
import garanti from '../assets/garanti-tech.png'
import fis from '../assets/fis.png'
import printbi from '../assets/printibi.png'
import yacht from '../assets/yacht.png'
import flipped from '../assets/flipped.png'
import oceanX from '../assets/oceanX.png'

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
    desc: 'Personal website',
    image: bigbat,
    link: '#'
  },

  {
    name: 'Yachtim',
    desc: 'Rent your yacht and sail the seas',
    image: yacht,
    link: '#'
  },
  {
    name: 'printbi',
    desc: 'Design your own product',
    image: printbi,
    link: '#'
  },
    {
    name: 'oceanX',
    desc: '',
    image: oceanX,
    link: '#'
  },
  {
    name: 'FlippedNodeMonkes',
    desc: '',
    image: flipped,
    link: '#'
  },

]
