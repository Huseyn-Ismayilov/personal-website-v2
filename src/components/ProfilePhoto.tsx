interface ProfileProps {
    src: string
    size: string
    className: string,
    props: string
    active: boolean
}
const ProfilePhoto: React.FC<ProfileProps> = (props) => {
    return (
        <div
            className={`${props.size == 'sm' ? 'w-[60px] h-[60px]': 'w-[75px] h-[75px]'} relative border-4 rounded-full border-white shadow-lg ${props.className ? props.className : ""}`}
        >
            <img
                src={props.src}
                alt=""
                className="w-full"
            />
            {
                props.active &&
                <div
                    className="absolute right-0.5 top-0.5 w-3 h-3 border border-white bg-green-600 rounded-full"
                >
                </div>
            }

        </div>
    )
} 
export default ProfilePhoto