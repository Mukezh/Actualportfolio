import { ProjectComponent } from "./ProjectComponent"

export const Projects = () => {
    return (
        <div className="h-fit bg-black">
            <div className="text-4xl font-serif text-white text-center p-4">
                Projects
            </div>
                <div className="flex px-24  justify-center flex-wrap">
                    <ProjectComponent />
                    <ProjectComponent />
                    <ProjectComponent />
                    <ProjectComponent />
                    <ProjectComponent />
                    <ProjectComponent />
                    <ProjectComponent />
                    <ProjectComponent />
                </div>
        </div>
    )
}