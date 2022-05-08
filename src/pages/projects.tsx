import MoreProjects from '@/components/more-projects'
import Layout from '@/components/layout'
import { Projects } from '../types/project'

const About = ({ projects }: Projects) => {
  return (
    <Layout>
      <div className="relative">
        <h1 className="mt-8 mb-20 animate-fade_in_up_10 text-8xl font-bold leading-tight tracking-tighter opacity-0 dark:text-gray-100 md:pr-8 md:text-9xl">
          projects.
        </h1>
      </div>
      {projects.length > 0 && <MoreProjects projects={projects} />}
    </Layout>
  )
}

export default About

export const getStaticProps = async () => {
  const projects = require('../data/projects.json')

  return {
    props: { projects },
  }
}
