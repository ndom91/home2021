import { ParallaxProvider } from "react-scroll-parallax"
import ProjectCard from "@/components/project-card"
import { Project } from "../types/project"

type Props = {
  projects: Project[]
}

const MoreProjects = ({ projects }: Props) => {
  return (
    <section className="py-4 mt-36">
      {/* <div className="grid mb-32 gap-x-4 gap-y-20 dark:text-gray-200 sm:gap-x-16 md:gap-x-16 lg:gap-x-8 lg:gap-y-8 more-projects"> */}
      <div className=" dark:text-gray-200 more-projects">
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
