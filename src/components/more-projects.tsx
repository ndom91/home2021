import { Project } from "../types/project"
import dynamic from "next/dynamic"
const ProjectCard = dynamic(() => import("./project-card"), {
  ssr: false,
})

type Props = {
  projects: Project[]
}

const MoreProjects = ({ projects }: Props) => {
  return (
    <section className="mt-36">
      {/* <h2 className="mb-8 dark:text-gray-200 text-6xl font-bold tracking-tighter leading-tight md:mb-24 md:text-7xl">
        Projects
      </h2> */}
      <div className="grid gap-x-4 gap-y-20 grid-cols-1 mb-32 dark:text-gray-200 sm:gap-x-16 sm:grid-cols-2 md:gap-x-32 lg:gap-x-48 lg:gap-y-32 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default MoreProjects
