interface TopEmailProps {
    to: string;
    text: string;
}

const TopEmail: React.FC<TopEmailProps> = (props: TopEmailProps) => {
    return (
        <a
            href={props.to}
            className="text-sm font-bold hover:text-black"
        >
            {props.text}
        </a>
    );
};

export default TopEmail;
