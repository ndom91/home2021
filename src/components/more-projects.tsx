import { ParallaxProvider } from "react-scroll-parallax"
import ProjectCard from "@/components/project-card"
import { Project } from "../types/project"

type Props = {
  projects: Project[]
}

const MoreProjects = ({ projects }: Props) => {
  return (
    <section className="py-4 mt-36">
      <div className="dark:text-gray-100 more-projects">
        {projects.map((project, index) => (
          <ParallaxProvider key={project.name}>
            <ProjectCard
              project={project}
              key={project.name}
              index={index + 1}
            />
          </ParallaxProvider>
        ))}
      </div>
    </section>
  )
}

export default MoreProjects
