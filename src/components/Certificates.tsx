import Cart from "./ListItem";
import Block from "./Block";
import { certificates } from "../data/certificates";

// Images

export default function Certificates() {
    return (
        <Block>
            {certificates.map(item =>(
                <Cart
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    corporate={item.corporate}
                    image={item.image}
                />
            ))}
        </Block>
    )
}