import Cart from './ListItem'
import { experiences } from '../data/experience'
import Block from './Block'

// Images

const Experience: React.FC = () => {
  return (
    <Block>
      {experiences.map((item, index) => (
        <Cart
          key={index}
          title={item.title}
          date={item.date}
          corporate={item.corporate}
          image={item.image}
          accomplishments={item.accomplishments}
        />
      ))}
    </Block>
  )
}

export default Experience
