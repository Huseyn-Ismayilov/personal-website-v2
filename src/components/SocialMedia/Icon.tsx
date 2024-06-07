import { ReactNode } from "react"

interface iconProps {
    to: string
    children: ReactNode
}

const SocialMediaIcon =({to, children}: iconProps) => {
    return (
        <a
            href={to}
            className="block p-2 w-10 text-black/70 hover:text-black/90 transition-all"
            target="_blank"
        >
            {children}
        </a>
    )
}

export default SocialMediaIcon