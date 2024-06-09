import bionluk from '../assets/bionluk-logo.svg'
import cywebAgency from '../assets/cyweb-agency-logo.png'

interface experinceTypes {
  title: string
  date: string
  corporate: string
  image: string
  accomplishments: string[]
}

export const experiences: experinceTypes[] = [
    {
      title: 'Freelance Front End Developer',
      corporate: 'bionluk',
      date: '12/2021 - Present',
      image: bionluk,
      accomplishments: [
        'Successfully completed over 100 diverse projects for various clients, showcasing versatility and adaptability in front-end development.',
        'Maintained an exceptional client satisfaction rate, achieving an average rating of 4.93 out of 5.',
        'Consistently met project deadlines, ensuring timely delivery of high-quality code and user interfaces.',
        'Built responsive and user-friendly websites and web applications using modern front-end technologies and frameworks such as HTML, CSS, JavaScript, Tailwind CSS, SCSS/SASS, and Bootstrap.',
        'Received positive feedback and repeat business from satisfied clients, contributing to a strong professional reputation on Bionluk.'
      ]
    },
    {
        title: 'Wordpress Expert',
        corporate: 'Cyweb Agency',
        date: '8/2021 - 5/2023',
        image: cywebAgency,
        accomplishments: [
          'Developed and customized WordPress websites tailored to client needs using Elementor builder.',
          'Improved site speed and performance through effective optimization techniques.',
          'Provided ongoing site maintenance and support, ensuring security and functionality.',
          'Integrated and optimized WooCommerce for enhanced e-commerce functionality.'
        ]
      }
  ];
  