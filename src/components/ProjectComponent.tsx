import { Github } from "../assets/icons/github"
import Homepage from "../assets/Homepage.jpg"
import TechStackButton from "./techstack-btn";

export const ProjectComponent =() => {
    return (
        <div className="p-4">
            
        <div className="h-fit w-96 border-2 border-white text-white rounded-2xl p-4">
            <div>
                <div >
                    <img src={Homepage} alt="" className="rounded-2xl p-2" />
                </div>
                <div className="flex justify-between px-2 py-1">
                    <div>
                        Title
                    </div>
                    <div>
                        <Github />
                    </div>
                </div>
                <div className="px-2 py-1 italic">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt amet officiis sequi, natus necessitatibus temporibus doloremque autem iusto eum qui dolor pariatur at ad voluptate corporis rem quibusdam doloribus ab!
                </div>
                <div className="text-white font-serif text-sm flex gap-2 px-2 pt-2">
                <TechStackButton name="React" />
                <TechStackButton name="Nodejs" />
                <TechStackButton name="Mongoose" />
                </div>
            </div>
        </div>

        </div>
        )
}