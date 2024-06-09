import Cart from './ListItem'
import { experiences } from '../data/experience'

// Images

const Experience: React.FC = () => {
  return (
    <div>
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
    </div>
  )
}

export default Experience
