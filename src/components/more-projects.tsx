import { ParallaxProvider } from "react-scroll-parallax"
import ProjectCard from "@/components/project-card"
import { Project } from "../types/project"

type Props = {
  projects: Project[]
}

const MoreProjects = ({ projects }: Props) => {
  return (
    <section className="mt-36">
      <div className="grid gap-x-4 gap-y-20 grid-cols-1 mb-32 dark:text-gray-200 sm:gap-x-16 sm:grid-cols-2 md:gap-x-32 lg:gap-x-48 lg:gap-y-32 lg:grid-cols-2">
        <ParallaxProvider>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ParallaxProvider>
      </div>
    </section>
  )
}

export default MoreProjects
