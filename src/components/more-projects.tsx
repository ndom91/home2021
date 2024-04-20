import { ParallaxProvider } from "react-scroll-parallax"
import ProjectCard from "@/components/project-card"
import { type Project } from "@/types"

type Props = {
  projects: Project[]
}

const MoreProjects = ({ projects }: Props) => {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-16 dark:text-gray-100">
      {projects.map((project, index) => (
        <ParallaxProvider key={project.name}>
          <ProjectCard project={project} key={project.name} index={index + 1} />
        </ParallaxProvider>
      ))}
    </section>
  )
}

export default MoreProjects
