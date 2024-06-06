export default function TopEmail(props) {
    return (
        <a
            href={props.to}
            className="text-sm font-bold hover:text-black"
        >
            {props.text}
        </a>
    )
}