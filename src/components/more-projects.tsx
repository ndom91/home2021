import { ParallaxProvider } from 'react-scroll-parallax'
import ProjectCard from '@/components/project-card'
import { Project } from '../types/project'

type Props = {
  projects: Project[]
}

const MoreProjects = ({ projects }: Props) => {
  return (
    <section className="more-projects dark:text-gray-100">
      {projects.map((project, index) => (
        <ParallaxProvider key={project.name}>
          <ProjectCard project={project} key={project.name} index={index + 1} />
        </ParallaxProvider>
      ))}
    </section>
  )
}

export default MoreProjects
