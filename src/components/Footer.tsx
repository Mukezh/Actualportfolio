import { Email } from "../assets/icons/email"
import { Github } from "../assets/icons/github"
import { LinkedIn } from "../assets/icons/linkedIn"

export const Footer = () => {
    return (
        <div className="bg-black text-white px-48 py-12 ">
            <div className="text-4xl font-serif">
                Connect with me
            </div>
            <div className="flex flex-col gap-2 px-12 py-8">
                <div className="flex space-x-4 pb-2">
                    <Github />
                    <a href="https://github.com/Mukezh">mukezh</a>
                </div>
                <div className="flex space-x-4 pb-2">
                    <Github />
                    <a href="https://x.com/tattakkaaee">@tattakkaaee</a>
                </div>
                <div className="flex space-x-4 pb-2">
                    <LinkedIn />
                    <a href="https://www.linkedin.com/in/mukeshbabu/">Mukesh Babu</a>
                </div>
                <div className="flex space-x-4 pb-2">
                    <Email />
                    <a href="mailto:mukesh.offcl@gmail.com">mukesh.offcl@gmail.com</a>
                </div>
            </div>
        </div>
    )
}